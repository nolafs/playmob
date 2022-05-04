const settings = {
    label: "Social Media",
    name: "socialmedia",
    file: "site/data/socialmedia.yaml",
    fields: [
        {
            label: "Twitter Feed",
            name: "twitter",
            widget: "object",
            fields: [
                {
                    label: "Off/On",
                    name: "active",
                    widget: "boolean",
                    required: false,
                    default: false
                },
                {
                    label: "Feed Url",
                    name: "url",
                    widget: "string",
                    required: false
                },
                {
                    label: "Feed Id",
                    name: "id",
                    widget: "string",
                    required: false
                },
                {
                    label: "Max Tweets",
                    name: "num",
                    widget: "number",
                    required: false
                }
            ]
        },
        {
            label: "Social Links",
            name: "links",
            widget: "list",
            fields: [

                {
                    label: "Type",
                    name: "type",
                    widget: "string"
                },
                {
                    label: "id",
                    name: "id",
                    widget: "string"
                },
                {
                    label: "url",
                    name: "url",
                    widget: "string"
                },
                {
                    label: "Hide",
                    name: "hide",
                    widget: "boolean",
                    required: false,
                    default: false
                },
            ]
        }
    ]
}

export default settings;