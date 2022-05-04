import meta from "../partials/meta";
import featureImage from "../partials/feature-image";
import categories from "../partials/categories";
import tags from "../partials/tags";
import seo from "../partials/seo";

const news = {
    name: "news",
    label: "News",
    label_singular: "News Article",
    description: "News collection",
    show_preview_links: true,
    folder: "site/content/news",
    path: '{{slug}}/index',
    filter: { field: "hidden", value: false },
    summary: "{{title}} - {{day}}/{{month}}/{{year}}",
    sortable_fields: [ 'news/categories' ],
    media_folder: "" ,
    public_folder: "",
    create: true,
    editor: {
        preview: false
    },
    fields: [
       { label: "lfs", name: "lfs", widget: "hidden", default: false },
       { label: "hasRelations", name: "hasRelations", widget: "hidden", default: true },
        { label: 'summary_button', name: 'summary_button', widget: 'hidden', default: "Read more" },
        {
            label: "Title",
            name: "title",
            widget: "string"
        },
        ...meta,
        categories('news'),
        tags('news'),
        featureImage,
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        },
        ...seo
    ],
}

export default news;