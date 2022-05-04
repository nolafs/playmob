const authors = {
    name: "authors",
    label: "Authors",
    label_singular: "Author",
    folder: "site/content/authors/",
    path: "{{slug}}/_index",
    sortable_fields: [ 'title' ],
    identifier_field: "name",
    create: true,
    editor: {
        preview: false
    },
    fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Occupation", name: "occupation", widget: "string" },
        { label: "Summary", name: "Summary", widget: "string", required: false },
        {
            label: "Profile Image",
            name: "image",
            widget: "image",
            required: false,
            media_folder: "/site/static/uploads",
            public_folder: "/uploads"
        },
        { label: "Body", name: "body", widget: "markdown", required: false }
    ]
}

export default authors;