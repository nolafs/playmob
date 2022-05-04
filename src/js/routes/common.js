import  CC  from "@activescott/cookieconsent"

export default {
    init() {
        console.log('common init')
    },
    finalize() {
        this.initConsent();
        console.log(this)
    },
    allowCookies(args){
        if(!args.length){
            return;
        }
        args.forEach(v => {
            const key = Object.keys(v)[0]
            this.checkCookieType(key, v)
        })

    },
    checkCookieType(key, v) {
        switch (key){
            case 'UNCATEGORIZED' : {
                if(v['UNCATEGORIZED'] === 'ALLOW'){

                }
                break;
            }
            case 'ESSENTIAL' : {
                if(v['ESSENTIAL'] === 'ALLOW'){

                }
                break;
            }
            case 'PERSONALIZATION' : {
                if(v['PERSONALIZATION'] === 'ALLOW'){

                }
                break;
            }
            case 'ANALYTICS' : {
                if(v['ANALYTICS'] === 'ALLOW'){
                    window.enableCookies(false)
                }
                break;
            }
            case 'MARKETING' : {
                if(v['MARKETING'] === 'ALLOW'){

                }
                break;
            }
        }
    },
    initConsent() {
        const userCategories = [ "UNCATEGORIZED", "ESSENTIAL", "ANALYTICS", "MARKETING" ]
        const cc = new CC({
            enabled: true,
            cookie: {
                domain: window.consentVars.domain
            },
            content: {
                policy: 'Privacy Policy',
                message: window.consentVars.message,
                dismiss: window.consentVars.dismiss,
                link: window.consentVars.link,
                href: window.consentVars.href
            },
            palette: {
                popup: {
                    "background": window.consentVars.pbg,
                    "text": window.consentVars.ptxt,
                },
                button: {
                    "background": window.consentVars.bbg,
                    "text": window.consentVars.btxt,
                }
            },

            elements: {
                categories: '<ul class="cc-categories">' +
                    userCategories.map( ( category, index ) =>
                        `<li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="${category}" checked /><span class="cc-btn-checkbox"></span>${category}</button>
          <button class="cc-btn cc-info" aria-label="${category} Definition Button" tabindex="${index+1}">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit the '${category.toLowerCase()}' category.</p>
          </div>
        </li>`
                    ).join("")
                    + '</ul>',
            },
            type: window.consentVars.type,
        })

        cc.on( "initialized", ( ...args ) =>{

            args[0].userCategories = {
              UNCATEGORIZED  : 'ALLOW',
              ESSENTIAL      : 'ALLOW',
              PERSONALIZATION: 'ALLOW',
              ANALYTICS      : 'ALLOW',
              MARKETING      : 'ALLOW'
            }


            this.allowCookies(args[0])

        } )
        cc.on( "error", console.error )
        cc.on( "popupOpened", () => console.log( "Popup Open" ) )
        cc.on( "popupClosed", (v) => console.log( "Popup Closed", v ) )
        cc.on( "revokeChoice", (v) => console.log( "Popup Reset", v ) )
        cc.on( "statusChanged", ( ...args ) => {
            console.log('status',  args )
            const  cat = args[0].split('_')[1];
            const  value =  args[1];
            this.checkCookieType(cat, {[cat]: value})
        })


    }
}