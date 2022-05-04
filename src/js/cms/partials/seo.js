const seo = [
        { name: "description", label: "SEO - Description", widget: "string", required: false, hint: "Kept empty summary is being used" },
        { name: "keywords", label: "SEO - Keywords", widget: "list", required: false, field:
                {
                name: "keyword", label: "Keyword", widget: "string"
                }
        }
    ]

export default seo;