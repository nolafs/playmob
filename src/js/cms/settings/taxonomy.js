const taxonomy = {
    name: "taxonomy",
    label: "Taxonomy",
    file: "site/data/taxonomy.yaml",
    editor: {
        preview: false
    },
    fields: [
        { label: "Case Studies Categories", name: "case-studies", widget: "object", fields: [
            { label: "categories", name: "categories", widget: "list" , fields: [
                    { label: "Name", name: "name", widget: "string" },
                    { label: "Value", name: "value", widget: "string" }
            ] },
        ]},
        { label: "Reports Categories", name: "reports", widget: "object", fields: [
                { label: "categories", name: "categories", widget: "list" , fields: [
                        { label: "Name", name: "name", widget: "string" },
                        { label: "Value", name: "value", widget: "string" }
                    ] },
            ]},
        { label: "Whitepapers Categories", name: "whitepapers", widget: "object", fields: [
                { label: "categories", name: "categories", widget: "list" , fields: [
                        { label: "Name", name: "name", widget: "string" },
                        { label: "Value", name: "value", widget: "string" }
                    ] },
            ]},
        { label: "News Categories", name: "news", widget: "object", fields: [
                { label: "categories", name: "categories", widget: "list" , fields: [
                        { label: "Name", name: "name", widget: "string" },
                        { label: "Value", name: "value", widget: "string" }
                    ] },
            ]},
        { label: "Tags", name: "tags", widget: "list", fields: [
                { label: "Name", name: "name", widget: "string" },
                { label: "Value", name: "value", widget: "string" }
            ]},
    ]
}

export default taxonomy;