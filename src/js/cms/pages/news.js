import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/news/_index.md",
    label: "News Page",
    name: "news",
    ...configPage,
    fields: [
        { label: 'twitter', name: 'twitter', widget: 'hidden', default: true },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string', required: false },
        { label: "Body", name: "body", widget: "markdown", required: false },
        layoutBlocks
    ]
}

export default page