import CMS from "netlify-cms-app";
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../../../scss/cms.scss";
import simplePreview from "./simplePage";
CMS.registerPreviewStyle(styles, { raw: true });
//CMS.registerPreviewTemplate("news", simplePreview);
CMS.registerPreviewTemplate("case-studies", simplePreview);
CMS.registerPreviewTemplate("reports", simplePreview);
CMS.registerPreviewTemplate("whitepapers", simplePreview);
CMS.registerPreviewTemplate("legals", simplePreview);
