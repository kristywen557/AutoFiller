const filler = require('./index');
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