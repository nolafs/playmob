const legals = {
    name: "legals",
    label: "Legals",
    label_singular: "Legal Page",
    description: "Legal related pages",
    show_preview_links: true,
    folder: "site/content/legal/",
    filter: { field: "hidden", value: false },
    create: true,
    editor: {
        preview: true
    },
    fields: [
        {
            label: "Title",
            name: "title",
            widget: "string"
        },
        { label: "Summary", name: "summary", widget: "text", required: false },
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        }
    ],
}

export default legals;