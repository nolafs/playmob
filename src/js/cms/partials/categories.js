const categories = (name) => {
    return {
        label: "Categories",
        name: `${name}/categories`,
        widget: "relation",
        multiple: true,
        required: false,
        collection: "config",
        file: "taxonomy",
        search_fields: [`${name}.categories.*.name`],
        display_fields: [`${name}.categories.*.name`],
        value_field: `${name}.categories.*.value`,
    }
}

export default categories;