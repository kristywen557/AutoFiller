const filler = require('./index');
let words = filler.words(['stress','stream','steam','graphics','music'])
let string = 'str'
//Adding with string variable
words.add('strings')
//Outputs
console.log(words.check(string)) // Output: [ 'stress', 'stream', 'strings' ]

//Retrieve old data
console.log(words.check(string,true))
/*
Output: {
  result: [ 'stress', 'stream', 'strings' ],
  old: [ 'steam', 'graphics', 'music' ]
}
*/