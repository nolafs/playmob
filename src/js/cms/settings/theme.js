const linkList = [
    { label: "Name", name: "name", widget: "string", required: false },
    { label: "Link", name: "link", widget: "string", required: false },
    { label: "Active", name: "active", widget: "boolean", default: true, required: false },
    {
        label: "Page",
        name: "page",
        widget: "relation",
        multiple: false,
        required: false,
        collection: "pages",
        search_fields: [ "title" ],
        value_field: "title",
        display_fields: [ "title" ]
    }
]

const navigation = [
    ...linkList,
    {
        label: "Navigation Sub",
        name: "items",
        widget: "list",
        fields: [
            ...linkList
        ]
    }
]


const settings = {
    label: "Theme Settings",
    name: "theme",
    file: "site/data/theme.yaml",
    fields: [
        { name: "logo", label: "Logo", widget: "image",  required: false },
        { name: "logo_alt", label: "Logo Alt", widget: "image",  required: false },
        /*
        {
            label: "Theme",
            name: "theme",
            widget: "select",
            options: [
                "playmob",
                "rokit",
                "light",
                "dark",
                "cupcake",
                "bumblebee",
                "emerald",
                "corporate",
                "synthwave",
                "retro",
                "cyberpunk",
                "valentine",
                "halloween",
                "garden",
                "forest",
                "aqua",
                "lofi",
                "pastel",
                "fantasy",
                "wireframe",
                "black",
                "luxury",
                "dracula",
                "cmyk"
            ],
            default: 'rokit'
        },
         */
        {
            label: "Favicon",
            name: "favicon",
            widget: "image",
            required: false
        },
        {
            label: "Placeholder image",
            name: "placeholder_img",
            widget: "image",
            required: false
        },
        {
            label: "Navigation",
            name: "cms_navbar",
            widget: "boolean",
            default: false
        },
        {
            label: "Activate Menu List",
            name: "active",
            widget: "boolean",
            default: false
        },
        {
            label: "Navigation Main",
            name: "items",
            widget: "list",
            fields: [...navigation]
        },
        {
            label: "Footer Mission Statement",
            name: "footer_statement",
            widget: "markdown",
            required: false
        },
        {
            label: "Navigation Footer",
            name: "footer_sections",
            widget: "list",
            fields: [
                { label: "Section", name: "section", widget: "string", required: false },
                { label: "Link", name: "link", widget: "string", required: false },
                { label: "Active", name: "active", widget: "boolean", default: true, required: false },
                {
                    label: "Page",
                    name: "page",
                    widget: "relation",
                    multiple: false,
                    required: false,
                    collection: "pages",
                    search_fields: [ "title" ],
                    value_field: "title",
                    display_fields: [ "title" ]
                },
                {
                    label: "Footer Navigation Section",
                    name: "footer_section_links",
                    widget: "list",
                    fields: [...linkList]
                }
            ]
        },
        {
            label: "Download Case Study Content",
            name: "download_popup",
            widget: "object",
            fields: [
                {
                    label: "Title",
                    name: "title",
                    widget: "string",
                    required: false
                },
                {
                    label: "Content",
                    name: "content",
                    widget: "markdown",
                    required: false
                }
            ]
        },
        {
            label: "Legal",
            name: "legal",
            widget: "markdown"
        }
    ]
}

export default settings;