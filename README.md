# AutoFiller Module
This module shows which words are compatible with the text entered in line with the data it receives from any database (array). If you don't understand, you can check the usage.
## Why should I choose this?
- 100% Stable🎯
-  Less resource usage than others💪
- The software is in an understandable, extensible format 🔎
- Possible bug support 🪲📞
# Installation
To use the "AutoFiller" module in your project, you need to install it first. You can do this by running the following command in your terminal:


```
npm install autofiller
```
# Usage
To use the "AutoFiller" module in your project, you need to require it in your JavaScript file. Assuming that the module is installed in your project's "node_modules" directory, you can do this by adding the following line at the top of your file:

```js
const filler = require('autofiller');
```
Once you've required the module, you can use the "words" object and its "check" method. Here's an example:
```javascript
let words = filler.words(['stress','stream','steam','graphics','music'])
let string = 'stre'
console.log(words.check(string)) // Output: [ 'stress', 'stream' ]

//Retrieve old data
console.log(words.check(string,true))
/*
Output: {
  result: [ 'stress', 'stream' ],
  old: [ 'stress', 'stream', 'steam', 'graphics', 'music' ]
}
*/
```
# Contributing
If you want to contribute to the "AutoFiller" module, you can fork the repository on GitHub and make your changes. Once you're done, you can create a pull request and the maintainers will review your changes.

# Issues
If you encounter any issues with the "AutoFiller" module, you can report them on the GitHub repository's "Issues" tab. Please provide as much information as possible to help the maintainers understand and reproduce the issue.

<h1>Conclusion</h1>
The "AutoFiller" module is a useful tool for filtering words that start with a specific string. By following the steps outlined in this guide, you can easily use the module in your projects and even contribute to its development.
