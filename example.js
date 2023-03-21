const filler = require('@Enes557/AutoFiller');
let words = filler.words(['stress','stream','steam','graphics','music','streoid'])
let string = 'stre'
console.log(words.check(string)) // Output: [ 'stress', 'stream', 'streoid' ]