const settings = {
    label: "GDPR",
    name: "gdpr",
    file: "site/data/gdpr.yaml",
    fields: [
        {
            label: "Simple Cookie Consent",
            name: "consent",
            widget: "object",
            fields: [
                { label: "Message", name: "message", widget: "string", default: "This website uses cookies to ensure you get the best experience on our website." },
                { label: "Dismiss", name: "dismiss", widget: "string", default: "Got it!", required: false },
                { label: "type", name: "type", widget: "select", default: "opt-in", options: ["opt-in", "categories"] },
                { label: "Label", name: "link", widget: "string", default: "Privacy Policy", required: false },
                { label: "Url", name: "url", widget: "string", required: false },
                { label: "Popup Background Color", name: "p_bg", widget: "color", required: false, default:"#efefef", picker: "sketch", presetColors: [ "#FFFFFF", "#000000", "#efefef"] },
                { label: "Popup Text Color", name: "p_txt", widget: "color", required: false, default:"#404040", picker: "sketch", presetColors: [ "#FFFFFF", "#000000", "#404040"] },
                { label: "Button Background Color", name: "b_bg", widget: "color", required: false, default:"#2e3691", picker: "sketch", presetColors:[ "#FFFFFF", "#000000", "#2e3691"] },
                { label: "Button Text Color", name: "b_txt", widget: "color", required: false, default:"#ffffff", picker: "sketch",  presetColors: [ "#FFFFFF", "#000000", "#ffffff"] }
            ]
        },
        {
            label: "Use Osana Cookie Content",
            name: "osana",
            widget: "object",
            hint: "Premium Service (Payable)",
            collapsed: true,
            fields: [
                { label: "Osana on/off", name: "active", widget: "boolean", default: false, required: false },
                { label: "Script" , name: "script", widget: "string", required: false  }
            ]
        }
    ]
}


export default settings;