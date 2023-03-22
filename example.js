const filler = require('autofiller');
let words = filler.words(['stress','stream','steam','graphics','music','streoid'])
let string = 'stre'
console.log(words.check(string)) // Output: [ 'stress', 'stream' ]

//Retrieve old data
console.log(rwords.check(rtring))
/*
Output: {
  result: [ 'stress', 'stream', 'streoid' ],
  old: [ 'stress', 'stream', 'steam', 'graphics', 'music' ]
}
*/