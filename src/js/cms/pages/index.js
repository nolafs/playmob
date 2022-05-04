import home from './home';
import contact from "./contact";
import login from "./login";
import signup from "./signup";
import caseStudies from "./case-studies";
import reports from "./reports";
import news from "./news";

const pages = {
    name: 'pages',
    label: 'Pages',
    files: [home, caseStudies, reports, news, contact, login, signup ],
}

export default pages