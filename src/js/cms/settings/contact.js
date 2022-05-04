const settings = {
    label: "Forms & Contact",
    name: "contact",
    file: "site/data/contact.yaml",
    fields: [
        {
          label: "Address",
          name: "address",
          widget: "markdown"
        },
        {label: "Nature of your enquiries", name: "enquiries", summary:"{{enquiry}}", widget: "list", field: {
                label: "Enquiry", name: "enquiry", widget: "string"
            }},
        { label: "Privacy Link",
            name: "privacy",
            widget: "relation",
            multiple: false,
            required: false,
            collection: "legals",
            search_fields: [ "title" ],
            value_field: "{{slug}}",
            display_fields: [ "title" ]
        }

    ]
}

export default settings;