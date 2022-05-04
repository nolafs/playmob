import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/case-studies/_index.md",
    label: "Case studies Page",
    name: "case-studies",
    ...configPage,
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string', required: false },
        { label: "Body", name: "body", widget: "markdown", required: false },
        layoutBlocks
    ]
}

export default page