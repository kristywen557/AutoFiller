module.exports = {
    words: (words) => {
        return {
            check: (string) =>{
                let result = [];
                for (i in words) {
                    if(words[i].includes(string)){
                        result.push(words[i]);
                    }
                }
                return result;
            }
        }
    }
}