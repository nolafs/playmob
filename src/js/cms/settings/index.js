import theme from "./theme";
import gdpr from "./gdpr";
import newsletter from "./newsletter";
import contact from "./contact";
import socialMedia from "./social-media";
import taxonomy from "./taxonomy";

const config = {
    name: 'config',
    label: 'Settings',
    editor: {
        preview: false
    },
    files: [theme, taxonomy, contact, gdpr, newsletter, socialMedia]
}

export default config