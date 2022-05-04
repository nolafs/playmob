import Router from './util/Router';
import common from './routes/common';
import navigationSetup from "./util/navigation";
import searchSetup from "./util/search";
import login from "./account/login";
import {profile} from "./account/profile";
import GoTrue from "gotrue-js";
import userDetails from "./account/user-details";
import home from "./routes/home";
import signup from "./account/signup";
import carousel from "./util/carousel";
import sticky from "./util/stricky";
import repeatSlider from "./util/repeat-slider";
import twitterFetch from "./util/twitter-fetch";


window.auth = new GoTrue({
    APIUrl: process.env.API_ROOT,
    audience: '',
    setCookie: true
});

const routes = new Router({
    common,
    home,
})

document.addEventListener('alpine:init', () => {
    profile()
    login();
    signup()
    userDetails()

    navigationSetup();
    searchSetup();

    Alpine.data('carousel', carousel);
    Alpine.data('sticky', sticky)
    Alpine.data('repeater', repeatSlider);
    Alpine.data('twitter', twitterFetch);

    routes.loadEvents();


});