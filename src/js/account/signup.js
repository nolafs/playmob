import {updateErrorMessages, changeUpdate, initDomData } from "./formValidation";

export default () => {
    Alpine.data('signup',
        () => (
            {
                success: false,
                authError: false,
                loading: false,
                message: null,
                inputElements: [],
                init()  {
                    console.log('Sign in Current User', window.auth.currentUser())
                    if(!window.auth.currentUser()) {
                        Iodine.addRule('matchingPassword', (value) => value === document.getElementById('password').value);
                        Iodine.messages.matchingPassword = 'Password confirmation needs to match password';
                        this.inputElements = [...this.$el.querySelectorAll('input[data-rules]')];
                        initDomData(this, this.inputElements);
                        updateErrorMessages(this, this.inputElements);
                    } else {
                        const userName = window.auth.currentUser().user_metadata.full_name
                        this.showMessage(
                            `<p>You already a member </p><p>Welcome back ${userName}</p>`, true
                        );
                    }
                },
                showMessage (msg, success, authError = false){
                    this.message = msg;
                    this.success = success;
                    this.authError = authError;
                    console.log('show message')
                },
                change (event) {
                    this.authError = false;
                    changeUpdate(this, event);
                    updateErrorMessages(this, this.inputElements);
                },
                submit(event) {
                    const invalidElements = this.inputElements.filter((input) => {
                        return Iodine.is(input.value, JSON.parse(input.dataset.rules)) !== true;
                    });
                    if (invalidElements.length > 0) {
                        event.preventDefault();
                        // document.getElementById(invalidElements[0].id).scrollIntoView();
                        this.inputElements.map((input) => {
                            this[input.name].blurred = true;
                        });
                        updateErrorMessages(this ,this.inputElements);
                    } else {
                        event.preventDefault();
                        if (!window.auth) {
                            console.log('No Auth found')
                            return;
                        } else {
                            this.loading = true;
                            window.auth
                                .createUser(this.inputElements[0].value, this.inputElements[1].value)
                                .then(response => {
                                    this.loading = false;
                                    this.showMessage(
                                        `<p>We have sent you verification email. Please check your mail account and follow the link to verify your email`, true
                                    );
                                })
                                .catch(error => {
                                        this.loading = false;
                                        if (error && Object.keys(error).length) {
                                            console.log(JSON.stringify(error))
                                            this.showMessage(`Failed to sign up :( <p>${error.json?.msg}</p>`, false, true)
                                        }
                                    }
                                )
                        }
                    }
                }
            }
        ));
};