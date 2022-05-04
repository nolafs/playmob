const tags = (name) => {
    return {
        label: "Tags",
        name: `${name}/tags`,
        widget: "relation",
        multiple: true,
        required: false,
        collection: "config",
        file: "taxonomy",
        search_fields: [`tags.*.name`],
        display_fields: [`tags.*.name`],
        value_field: `tags.*.value`,
    }
}

export default tags;