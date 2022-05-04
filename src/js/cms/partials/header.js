const header = [
    {
        label: "Header height",
        name: "height",
        widget: "select",
        required: false,
        options: ["30vh", "50vh", "75vh", "100vh"]
    },
    {
        label: "Header Type",
        name: "header_type",
        widget: "select",
        required: false,
        options: ["simple", "column", "master"]
    },
    {
        label: "Header classes",
        name: "header_classes",
        widget: "string",
        required: false
    }
    ]

export default header;