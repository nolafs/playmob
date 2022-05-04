import featureImage from "../partials/feature-image";
import layoutBlocks from "../partials/layout-blocks";
import meta from "../partials/meta";
import categories from "../partials/categories";
import tags from "../partials/tags";
import client from "../partials/client";
import seo from "../partials/seo";


const resources = (label, name, tax = null, relations = false, download = false, externalUrl = false, clientLink = false) => {
    let taxonomy = [];
    let ext = []
    let cl = []

    if(tax){
        taxonomy = [
                categories(name),
                tags(name)
        ]
    }

    if(relations) {
        taxonomy.push({ label: "hasRelations", name: "hasRelations", widget: "hidden", default: true })
    }

    if(externalUrl){
        ext.push({
            label: "External link",
            name: "external_link",
            widget: "string",
            required: false
        })
    }

    if(download){
        ext.push({
            label: "File",
            name: "download",
            widget: "file",
            media_library: {
                media_folder: "/static/downloads"
            },
            required: false
        })
    }

    if(clientLink){
        cl.push(client)
    }

    return {
    name: name,
    label: label,
    description: "Resource list",
    summary: "{{title}}",
    show_preview_links: true,
    folder: `site/content/${name}`,
    path: `{{slug}}/index`,
    filter: { field: "hidden", value: false },
    sortable_fields: [ "weight", "draft", "featured"],
    media_folder: "" ,
    public_folder: "",
    create: true,
    editor: {
        preview: true
    },
    fields: [
        { label: "lfs", name: "lfs", widget: "hidden", default: false },
        { label: "type", name: "type", widget: "hidden", default: 'resources' },
        {
            label: "Title",
            name: "title",
            widget: "string"
        },
        ...meta,
        ...taxonomy,
        ...cl,
        featureImage,
        {
            label: "Body",
            name: "body",
            widget: "markdown"
        },
        ...ext,
        layoutBlocks,
        ...seo
    ]
    }
};

export default resources;