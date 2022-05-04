import bgcolors from "./bgcolors";

const general = [
    {label: "Block active", name: "active", widget: "boolean", default: true, required: false},
    {label: "Header", name: "title", widget: "string", required: false},
    {label: "Hide header", name: "header_hide", widget: "boolean", default: false, required: false},
    {label: "Body", name: "body", widget: "markdown", required: false},
    {label: "Hide intro", name: "intro_hide", widget: "boolean", default: false, required: false},
]

const generalStyling = {
    label: "styling",
    name: "styling",
    widget: "object",
    collapsed: true,
    fields:
        [
            {label: "Full width", name: "full", widget: "boolean", default: false, required: false},
            {
                label: "Height",
                name: "height",
                widget: "select",
                options: ["auto", "screen/1", "screen/2", "screen/3", "screen/4", "screen/5"]
            },
            {label: "Text center", name: "center", widget: "boolean", default: false, required: false},
            {label: "Card", name: "card", widget: "boolean", default: false, required: false},
            {label: "Classes", name: "classes", widget: "string", default: false, required: false},
            ...bgcolors
        ]
}

const navigation = {
    label: "Navigation",
    name: "navigation",
    widget: "object",
    collapsed: true,
    fields: [
        {label: "Url", name: "url", widget: "string", required: false},
        {
            label: "Page",
            name: "collection_content",
            widget: "relation",
            multiple: false,
            required: false,
            collection: "pages",
            search_fields: ["title"],
            value_field: "title",
            display_fields: ["title"]
        },
        {label: "Button", name: "button", widget: "string", required: false}
    ]
}

const layoutBlocks = {
    label: "Sections",
    name: "sections",
    widget: "list",
    types: [
        {
            label: "Block Section",
            name: "block_section",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling,
                navigation
            ]
        },
        {
            label: "Block Section SVG Animated",
            name: "block_section_svg_anim",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                {label: "Image SM", name: "image_sm", widget: "image", hint: "Mobile devices (svg)"},
                {label: "Image MD", name: "image_md", widget: "image", hint: "Tablet devices (svg)"},
                {label: "Image LG", name: "image_lg", widget: "image", hint: "Desktop devices (svg)"},
                generalStyling,
                navigation
            ]
        },
        {
            label: "Block Section Columns",
            name: "block_section_col",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                {
                    label: "Columns", name: "columns", widget: "list", types: [
                        {
                            label: "Image", name: "image", widget: "object", field:
                                {label: "Image", name: "image", widget: "image"}
                        },
                        {
                            label: "Content", name: "content", widget: "object", field:
                                {label: "Content", name: "content", widget: "markdown"}
                        },
                        {
                            label: "Cards", name: "cards", widget: "object", fields: [
                                {label: "Image", name: "image", widget: "image"},
                                {label: "title", name: "title", widget: "string"},
                                {label: "Content", name: "content", widget: "markdown"},
                                {
                                    label: "Case Studies",
                                    name: "collection_content",
                                    widget: "relation",
                                    multiple: false,
                                    required: false,
                                    collection: "case-studies",
                                    search_fields: ["title"],
                                    value_field: "{{slug}}",
                                    display_fields: ["title"]
                                },
                                {label: "Animation", name: "anim", widget: "string", required: false},
                            ]
                        },
                    ]
                },
                generalStyling,
                navigation
            ]
        },
        {
            label: "Block Video",
            name: "block_video",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling,
                {label: "Poster", name: "poster", widget: "image", required: false},
                {
                    label: "Type",
                    name: "video_type",
                    widget: "select",
                    required: false,
                    options: ['YouTube', "Vimeo", "HTML5"]
                },
                {
                    label: "Video",
                    name: "video",
                    widget: "file",
                    hint: "Only HTML5 requires video upload, other just copy the link",
                    required: false
                },
                {
                    label: "Aspect Ratio", name: "aspect", widget: "select",
                    options: [
                        "square",
                        "movietone",
                        "large",
                        "tv",
                        "imax",
                        "classic",
                        "still",
                        "modern",
                        "common",
                        "golden",
                        "super",
                        "hd",
                        "wide",
                    ],
                    required: false
                },
                {
                    label: "Max Width", name: "max_width", widget: "select",
                    options: [
                        "max-w-2xl",
                        "max-w-3xl",
                        "max-w-4xl",
                        "max-w-5xl"
                    ],
                    required: false
                },
                {label: "Border", name: "border", widget: "boolean", default: true, required: false},
                {label: "Shadow", name: "shadow", widget: "boolean", default: true, required: false},
                {label: "Rounded", name: "rounded", widget: "boolean", default: true, required: false},
                navigation
            ]
        },
        {
            label: "Block Content List",
            name: "block_list",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling,
                {label: "Content Type", name: "contentType", widget: "string"},
                {label: "Max items", name: "max", widget: "number"},
                {label: "Carousel", name: "carousel", widget: "boolean", required: false},
                {label: "Card Shadow", name: "shadow", widget: "boolean", default: false, required: false},
                {
                    label: "Card Style",
                    name: "card_style",
                    widget: "select",
                    default: 'glass',
                    options: ["glass", "image-full"],
                    required: false
                },
                navigation
            ]
        },
        {
            label: "Block Client List",
            name: "block_client_list",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling,
                navigation
            ]
        },
        {
            label: "Block Carousel",
            name: "block_carousel",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling,
                navigation,
                {label: "Only SVG", name: "svg", widget: "boolean", default: false},
                {
                    label: "Slides (phone)", name: "num_item_sm", widget: "select", default: "w-11/12", options: [
                        {label: "one", value: "w-10/12"},
                        {label: "two", value: "w-1/2"},
                        {label: "three", value: "w-1/3"},
                        {label: "four", value: "w-1/4"},
                        {label: "auto", value: "w-auto"},
                    ]
                },
                {
                    label: "Slides (tablet)", name: "num_item_md", widget: "select", default: "w-full", options: [
                        {label: "one", value: "md:w-10/12"},
                        {label: "two", value: "md:w-1/2"},
                        {label: "three", value: "md:w-1/3"},
                        {label: "four", value: "md:w-1/4"},
                        {label: "auto", value: "md:w-auto"},
                    ]
                },
                {
                    label: "Slides (desktop)", name: "num_item_lg", widget: "select", default: "w-full", options: [
                        {label: "one", value: "lg:w-10/12"},
                        {label: "two", value: "lg:w-1/2"},
                        {label: "three", value: "lg:w-1/3"},
                        {label: "four", value: "lg:w-1/4"},
                        {label: "auto", value: "lg:w-auto"},
                    ]
                },
                {
                    label: "Space between slides",
                    name: "space_x",
                    widget: "select",
                    default: "mx-0",
                    options: ["space-x-0", "space-x-2", "space-x-3", "space-x-4", "space-x-5", "space-x-6"]
                },
                {
                    label: "Slides",
                    name: "slides",
                    widget: "list",
                    fields: [
                        {label: "Name", name: "name", widget: "string"},
                        {label: "Label", name: "label", widget: "string", required: false},
                        {label: "Link", name: "link", widget: "string", required: false},
                        {label: "Target blank", name: "external", widget: "boolean", required: false},
                        {label: "image", name: "image", widget: "image", required: false},
                        {label: "Image min-width", name: "min_width", widget: "string", required: false},
                        {label: "Image max-width", name: "max_width", widget: "string", required: false},
                        {
                            label: "Base Size",
                            name: "base_size",
                            widget: "number",
                            hint: "Responsive Image base size 1x, 2x and 3x (not required for SVG only)",
                            required: false
                        },
                        {
                            label: "ratio",
                            name: "ratio",
                            widget: "select",
                            required: false,
                            options: ['square', "wide", "auto"]
                        },
                        ...bgcolors
                    ]
                }
            ]
        },
        {
            label: "Block Testimonials",
            name: "block_testimonials",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                {name: "style", label: "Type of display", widget: "select", options: ['carousel', 'list']},
                generalStyling,
                {
                    label: "Select a testimonials",
                    name: "testimonials",
                    widget: "relation",
                    multiple: true,
                    required: false,
                    hint: "No selection, all testimonials are listed",
                    collection: "testimonials",
                    search_fields: ["title"],
                    value_field: "title",
                    display_fields: ["title"]
                }
            ]
        },
        {
            label: "Block Newsletter",
            name: "block_newsletter",
            summary: 'Newsletter',
            widget: "object",
            fields: [
                {label: "Block active", name: "active", widget: "boolean", default: true, required: false},
            ]
        },
        {
            label: "Block Contact",
            name: "block_contact",
            summary: '{{fields.title}}',
            widget: "object",
            fields: [
                ...general,
                generalStyling
            ]
        }
    ]
}

export default layoutBlocks;