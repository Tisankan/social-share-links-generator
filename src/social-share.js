
const querystring = require('querystring');

class SocialShare {
    constructor() {
        this.baseUrl = {
            twitter: 'https://twitter.com/intent/tweet',
            facebook: 'https://www.facebook.com/sharer/sharer.php',
            linkedin: 'https://www.linkedin.com/shareArticle',
        };
    }

    generateTwitterLink(text, url) {
        const tweetText = querystring.escape(text);
        const tweetUrl = querystring.escape(url);
        return `${this.baseUrl.twitter}?text=${tweetText}&url=${tweetUrl}`;
    }

    generateFacebookLink(url) {
        const encodedUrl = querystring.escape(url);
        return `${this.baseUrl.facebook}?u=${encodedUrl}`;
    }

    generateLinkedInLink(title, summary, url) {
        const encodedTitle = querystring.escape(title);
        const encodedSummary = querystring.escape(summary);
        const encodedUrl = querystring.escape(url);
        return `${this.baseUrl.linkedin}?title=${encodedTitle}&summary=${encodedSummary}&url=${encodedUrl}`;
    }
}

module.exports = SocialShare;
