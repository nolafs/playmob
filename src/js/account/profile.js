import GoTrue from "gotrue-js";

const profile = () =>{
    Alpine.store('profile', {
      currentUser: null,
      auth: null,
      apiEndpoint: process.env.API_ROOT,
      loading: false,
      fullName: '',
      isLoggedIn: false,
      authSettings: null,
      role: '',
      start() {
          this.loading = true;

          if (!this.authSettings) {
              window.auth.settings().then(action => {
                  this.authSettings = action;
                  this.loggedIn();
              }).catch(error => {
                  console.log('error', error)
              })
          } else {
              this.loggedIn();
          }

      },
      loggedIn(){

          this.auth = window.auth;

          if (!this.auth) {
              console.log('No Auth found')
              return;
          }
          if (!this.auth.currentUser()) {
              console.log('No Auth User found')
              return;
          }

          this.currentUser =  this.auth.currentUser();

          if( this.currentUser.token.expires_at < Date.now()){
              this.currentUser.logout();
              return;
          }

          if( this.currentUser) {
              this.role = this.currentUser.app_metadata.roles[0];
              this.isLoggedIn = true;

              console.log('role', this.role)
              return true;
          } else {
              this.isLoggedIn = false;
              return false;
          }
      },
      getUserFullName(){
          if (!window.auth) {
              console.log('No Auth found')
              return {
                  fullName : ''
              }
          }
          if (!window.auth.currentUser()) {
              console.log('No Auth User found')
              return {
                  fullName : ''
              }
          }
          this.currentUser =  window.auth.currentUser();
          this.role = this.currentUser.app_metadata.roles[0];
          this.fullName = this.currentUser.user_metadata.full_name;
          const nameArray = this.fullName.split(' ');
          let initials = '';

          nameArray.map((i) => {
              initials = initials + ' ' + i.charAt(0);
          })

          return {
              initials,
              fullName : this.fullName
          }
      },
      logout(){
          if (!window.auth.currentUser()) {
              console.log('No Auth found')
              return;
          }
          const user = window.auth.currentUser();
          user
              .logout()
              .then(response => {
                  this.isLoggedIn = false;
                  //document.location.href = "/";
              })
              .catch(error => {
                  this.isLoggedIn = false;
                  console.error(error)
                  throw error;
              });
      }
    })
}


export {
    profile
}