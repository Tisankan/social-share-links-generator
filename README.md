# Social Media Share Links Generator

A simple Node.js package for generating social media share links for popular platforms.

## Installation

```bash
npm install social-share-links-generator
````
## Usage

```javascript

const SocialShare = require('social-share-links-generator');

const socialShare = new SocialShare();

const twitterLink = socialShare.generateTwitterLink('Check out this awesome package!', 'https://example.com');
const facebookLink = socialShare.generateFacebookLink('https://example.com');
const linkedinLink = socialShare.generateLinkedInLink('Awesome Package', 'Generate social share links easily!', 'https://example.com');

console.log('Twitter Share Link:', twitterLink);
console.log('Facebook Share Link:', facebookLink);
console.log('LinkedIn Share Link:', linkedinLink);
```
## API
Certainly! Below is a basic example of a README.md file for your Social Media Share Links Generator package. Feel free to customize it based on your specific features and usage instructions.

markdown

# Social Media Share Links Generator

A simple Node.js package for generating social media share links for popular platforms.

## Installation

```bash
npm install social-share-links-generator
```
## Usage

```javascript
const SocialShare = require('social-share-links-generator');

const socialShare = new SocialShare();

const twitterLink = socialShare.generateTwitterLink('Check out this awesome package!', 'https://example.com');
const facebookLink = socialShare.generateFacebookLink('https://example.com');
const linkedinLink = socialShare.generateLinkedInLink('Awesome Package', 'Generate social share links easily!', 'https://example.com');

console.log('Twitter Share Link:', twitterLink);
console.log('Facebook Share Link:', facebookLink);
console.log('LinkedIn Share Link:', linkedinLink);
```
## API
`generateTwitterLink(text, url)`

Generates a Twitter share link with the provided text and URL.

`text` (string): The text to be included in the tweet.

`url` (string): The URL to be included in the tweet.

`generateFacebookLink(url)`

Generates a Facebook share link with the provided URL.

`url `(string): The URL to be shared on Facebook.

`generateLinkedInLink(title, summary, url)`

Generates a LinkedIn share link with the provided title, summary, and URL.

`title` (string): The title of the shared content.

`summary` (string): A brief summary or description of the shared content.

`url` (string): The URL to be shared on LinkedIn.
## Author
Name: Tisankan

Email: info.tisankan@gmail.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.