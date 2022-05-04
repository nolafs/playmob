import {updateErrorMessages, changeUpdate, initDomData } from "./formValidation";

export default () => {
    Alpine.data('login',
    () => (
        {
            auth: null,
            success: false,
            authError: false,
            loading: false,
            message: null,
            userName: '',
            role: '',
            inputElements: [],
            init()  {

                this.auth = window.auth;

                if (!this.auth) {
                    console.log('Login No Auth found')
                    return;
                }

                if(!this.auth.currentUser()) {
                    this.inputElements = [...this.$el.querySelectorAll('input[data-rules]')];
                    initDomData(this, this.inputElements);
                    updateErrorMessages(this, this.inputElements);
                } else {
                    if(this.auth.currentUser().token.expires_at < Date.now()){
                        this.auth.currentUser().logout();
                        return;
                    } else {
                        this.userName = this.auth.currentUser().user_metadata.full_name;
                        this.role = this.auth.currentUser().app_metadata.roles[0];
                        this.showMessage(
                            `<p>Log in successful! </p><p>Welcome back ${this.userName}</p>`, true
                        );
                    }
                }
            },
            change (event) {
                this.authError = false;
                changeUpdate(this, event);
                updateErrorMessages(this, this.inputElements);
            },
            showMessage (msg, success, authError = false){
                this.message = msg;
                this.success = success;
                this.authError = authError;
            },
            submit(event) {
                const invalidElements = this.inputElements.filter((input) => {
                    return Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true;
                });
                if (invalidElements.length > 0) {
                    event.preventDefault();
                    document.getElementById(invalidElements[0].id).scrollIntoView();
                    this.inputElements.map((input) => {
                        this[input.name].blurred = true;
                    });
                    updateErrorMessages(this ,this.inputElements);
                } else {
                    if (!window.auth) {
                        console.log('No Auth found')
                        return;
                    } else {
                        event.preventDefault();
                        this.loading = true;
                        window.auth
                            .login(this.inputElements[0].value, this.inputElements[1].value, true)
                            .then(response => {
                                this.loading = false;
                                const userName = response.user_metadata.full_name;
                                this.role = response.app_metadata.roles[0];
                                this.showMessage(
                                    `<p>Log in successful! </p><p>Welcome back ${userName}</p>`, true
                                );
                                this.$dispatch('logged');
                            })
                            .catch(error =>{
                                this.loading = false;
                                this.showMessage(`Failed to log in :( <p>${error.json.error_description}</p>`, false, true)
                            }
                            );
                    }
                }
            }
        }
 ));
};


