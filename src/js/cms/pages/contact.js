import header from "../partials/header";
import featureImage from "../partials/feature-image";
import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/contact-us/_index.md",
    label: "Contact Us Page",
    name: "contact",
    ...configPage,
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: "Body", name: "body", widget: "markdown" },
        {label: "Map Location", name: "location", widget: "map" },
        {
            label: "Contact Information",
            name: "contacts",
            widget: "object",
            fields: [
                {
                    label: "Telephone Numbers",
                    name: "tel_list",
                    widget: "list",
                    fields: [
                        { label: "tel" , name: "tel" , widget: "string" },
                    ]
                }
            ]
        },
        layoutBlocks
    ]
}

export default page