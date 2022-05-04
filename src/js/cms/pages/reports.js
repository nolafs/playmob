import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/reports/_index.md",
    label: "Reports Page",
    name: "reports",
    ...configPage,
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string', required: false },
        { label: "Body", name: "body", widget: "markdown", required: false },
        layoutBlocks
    ]
}

export default page