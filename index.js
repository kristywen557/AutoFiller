module.exports = {
    words: (words) => {
        return {
            check: (string,invalid) =>{
                let result = [],
                old = []
                for (i in words) {
                    if(words[i].includes(string)){
                        result.push(words[i]);
                    }
                    if(invalid) old.push(words[i]);
                }
                if(invalid) return {
                    result: result,
                    old: old
                };
                return result;
            }
        }
    }
}