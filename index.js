module.exports = {
    words: (words) => {
        return {
            add: (string) => {
                words.push(string)
            },
            check: (string,invalid) =>{
                let result = [],
                old = []
                for (i in words) {
                    let check = false;
                    if(words[i].includes(string)){
                        result.push(words[i]);
                        check = true
                    }
                    if(invalid && !check) old.push(words[i]);
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