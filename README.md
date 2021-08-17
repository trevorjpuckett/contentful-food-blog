# contentful-food-blog
 example contentful consumer application

## Dependencies
- [NodeJS](https://nodejs.org/en/download/)
- [React](https://create-react-app.dev/docs/getting-started/)
- [Contentful NPM Package](https://www.npmjs.com/package/contentful)
- [react-dotenv NPM Package](https://www.npmjs.com/package/react-dotenv)
- [Marked NPM Package](https://www.npmjs.com/package/marked)


## Notes

### DangerouslySetInnerHtml

**This keyword is used to interpret the markdown language into rendered HTML in the app/src/components/Post.js file.**  

This is a react key word, which is described as:  

> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key, to remind yourself that it’s dangerous. For example:

- [Link to Docs](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)


