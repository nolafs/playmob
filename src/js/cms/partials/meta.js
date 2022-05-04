const meta = [
    { label: "hidden", name: "hidden", widget: "hidden", default: false },
    { label: "Publish Date", name: "date", widget: "datetime" },
    { label: "Draft", name: "draft", widget: "boolean", default: false, required: false  },
    { label: "Featured", name: "featured", widget: "boolean",  default: false, required: false },
    { label: "Weight", name: "weight", widget: "number",  default: '0', required: false },
    {
        label: "Author",
        name: "authors",
        required: false,
        widget: "relation",
        multiple: true,
        collection: "authors",
        search_fields: [ 'title' ],
        value_field: "{{title}}",
        display_fields: [ "title" ]
    },
    { label: "Summary", name: "summary", widget: "text", required: false },
]

export default meta;