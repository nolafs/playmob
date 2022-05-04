const client =  {

        label: "Client",
        name: "client",
        widget: "relation",
        multiple: false,
        required: false,
        collection: "clients",
        search_fields: [`title`],
        display_fields: [`title`],
        value_field: `title`,

}

export default client;