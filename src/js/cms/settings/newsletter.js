import bgcolors from "../partials/bgcolors";

const settings = {
    label: "Newsletter",
    name: "newsletter",
    file: "site/data/newsletter.yaml",
    fields: [
        {
            label: "Newsletter footer active",
            name: "newsletter_active",
            hint: "Activate to show newsletter in footer",
            widget: "boolean",
            required: false
        },
        {
            label: "Title",
            name: "title",
            widget: "string",
            required: false
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown",
            required: false
        },
        ...bgcolors
    ]
}

export default settings;