const SocialShare = require('./social-share');

const socialShare = new SocialShare();

const twitterLink = socialShare.generateTwitterLink('Check out this awesome package!', 'https://example.com');
const facebookLink = socialShare.generateFacebookLink('https://example.com');
const linkedinLink = socialShare.generateLinkedInLink('Awesome Package', 'Generate social share links easily!', 'https://example.com');

console.log('Twitter Share Link:', twitterLink);
console.log('Facebook Share Link:', facebookLink);
console.log('LinkedIn Share Link:', linkedinLink);
