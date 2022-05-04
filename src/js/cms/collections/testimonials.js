import client from "../partials/client";

const testimonials = {
    name: "testimonials",
    label: "Testimonials",
    label_singular: "Testimonial",
    description: "Testimonials list",
    show_preview_links: true,
    folder: "site/data/testimonials",
    extension: "yaml",
    media_folder: "/site/assets/images",
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
            label: "Weight",
            name: "weight",
            widget: "number",
            default: 0
        },
        {
            label: "Name",
            name: "name",
            widget: "string"
        },
        {
            label: "Position",
            name: "position",
            widget: "string",
            required: false
        },
        client,
        {
            label: "Profile",
            name: "profile",
            widget: "image",
            required: false
        },
        {
            label: "Feature Image",
            name: "image",
            widget: "image",
            required: false
        },
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        }
    ],
}

export default testimonials;