import header from "../partials/header";
import featureImage from "../partials/feature-image";
import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/_index.md",
    label: "Home Page",
    name: "home",
    ...configPage,
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Hero header title', name: 'hero_title', widget: 'markdown' },
        { label: 'Hero header Body', name: 'hero_body', widget: 'markdown' },
        { label: 'Hero header Image', name: 'hero_img', widget: 'image' },
        { label: 'Hero link label', name: 'hero_link_label', widget: 'string' },
        {
            label: "Header Link",
            name: "hero_collection",
            widget: "relation",
            multiple: false,
            required: false,
            collection: "pages",
            search_fields: ["title"],
            value_field: "{{title}}",
            display_fields: ["title"]
        },
        layoutBlocks
    ]
}

export default page