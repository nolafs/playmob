
const featureImage = {
    label: "Featured Image",
    name: "featured_image",
    widget: "object",
    collapsed: true,
    fields: [
        { label: "active", name: "active", widget: "boolean", default: true, required: true },
        { label: "Page Title active", name: "active_title", widget: "boolean", default: true ,required: false},
        {
            name: "src",
            label: "Image",
            widget: "image",
            required: false,
        },
        { name: "alt", label: "Alt text", widget: "string", required: false }
    ]
}

export default featureImage;