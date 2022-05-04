import {updateErrorMessages, changeUpdate, initDomData } from "./formValidation";
import GoTrue from "gotrue-js";


export default () => {
    Alpine.data('userDetails',
        () => (
            {
                auth: null,
                success: false,
                authError: false,
                loading: false,
                edit: false,
                message: null,
                apiEndpoint: process.env.API_ROOT,
                inputElements: [],
                init()  {
                    if(!window.auth) {
                        this.auth = new GoTrue({
                            APIUrl: this.apiEndpoint,
                            setCookie: true
                        });
                        window.auth = this.auth;
                    } else {
                        this.auth = window.auth;
                    }

                    if (!this.auth) {
                        console.log('No Auth found')
                        return;
                    } else {
                        console.log('Auth found')
                    }
                },
                toggle(){
                    this.edit = !this.edit;
                },
                formSetup(){
                    if(this.edit){
                        this.inputElements = [...this.$el.querySelectorAll('*[data-rules]')];
                        console.log(this.inputElements)
                        initDomData(this, this.inputElements);
                        updateErrorMessages(this, this.inputElements);
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
                        event.preventDefault();
                        console.log('SUBMIT', window.auth)
                        let metaData = {}
                        this.inputElements.map((input) => {
                            console.log(input.name, input.value)
                            let obj = {}
                            obj[input.name] = input.value;
                            metaData = {...metaData, ...obj }

                        })
                        this.loading = true;
                        const user_metadata = {
                            data: metaData
                        }
                        this.auth.currentUser()
                            .update(user_metadata)
                            .then(response => {
                                this.loading = false;
                                this.showMessage(
                                    `<p>Log in successful! </p><p>Welcome back ${userName}</p>`, true
                                );
                                this.$dispatch('logged');
                            })
                            .catch(error =>{
                                    this.loading = false;
                                    console.log('error', error)
                                    this.showMessage(`Failed to log in :( <p>${error}</p>`, false, true)
                                }
                            );

                    }
                }
            }
        ));
}