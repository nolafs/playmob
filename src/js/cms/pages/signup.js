import header from "../partials/header";
import featureImage from "../partials/feature-image";
import layoutBlocks from "../partials/layout-blocks";
import configPage from "../partials/config-page";

const page = {
    file: "site/content/account/signup/index.md",
    label: "Signup Page",
    name: "signup",
    ...configPage,
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'string' },
        header[0],
        featureImage,
        { label: "Body", name: "body", widget: "markdown" },
        layoutBlocks
    ]
}

export default page