import React from "react";
import CMS from "netlify-cms-app";
import pages from "./cms/pages";
import config from "./cms/settings";
import authors from "./cms/taxonomy/authors";
import legals from "./cms/collections/legals";
import clients from "./cms/collections/clients";
import resources from "./cms/collections/resources";
import news from "./cms/collections/news";
import testimonials from "./cms/collections/testimonials";

// Extend CMS
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker";
import richText from 'netlify-cms-widget-richtext';



// custom preview
import "./cms/previews"

/* Auto matic setup
CMS.init();
*/

CMS.registerWidget("color", ColorControl, ColorPreview);
CMS.registerWidget('richtext', RichTextControl, RichTextPreview)


CMS.init({
    config: {
        load_config_file: false,
        local_backend: true,
        site_url: 'https://luxury-marzipan-bd9173.netlify.app',
        backend: {
            name: 'git-gateway',
            branch: 'main',
            repo: "PlayMob/playMobSite"
        },
        //publish_mode: "editorial_workflow",
        media_folder: 'site/static/uploads',
        public_folder: '/uploads',
        collections: [
            pages,
            resources('Case Studies', 'case-studies', true, true,  true, false, true),
            resources('Reports', 'reports'),
            resources('Whitepapers', 'whitepapers', false),
            news,
            authors,
            clients,
            testimonials,
            legals,
            config],
    },
})