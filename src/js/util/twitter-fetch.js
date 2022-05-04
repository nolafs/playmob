import twitterFetcher from 'twitter-fetcher';

export default () => ({
    setup(feedId, num = '1' ) {
        const configProfile = {
            "profile": {"screenName": feedId},
            "domId": this.$el.id,
            "maxTweets": parseInt(num),
            "enableLinks": true,
            "showUser": false,
            "showTime": false,
            "showImages": false,
            "lang": 'en'
        };

        twitterFetcher.fetch(configProfile);
    }
});