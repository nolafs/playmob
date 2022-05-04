const clients = {
    name: "clients",
    label: "Clients",
    label_singular: "Client",
    description: "Client list",
    folder: "site/data/clients",
    extension: "yaml",
    create: true,
    editor: {
        preview: false
    },
    fields: [
        { label: "lfs", name: "lfs", widget: "hidden", default: true },
        {
            label: "Title",
            name: "title",
            widget: "string"
        },
        {
            label: "logo",
            name: "logo",
            widget: "image"
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        },
        {
            label: "Url",
            name: "url",
            widget: "string"
        },
        {
            label: "active",
            name: "active",
            widget: "boolean",
            default: true
        }
    ],
}

export default clients;