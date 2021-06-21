// Задача1
const string = "Привет! Как дела?";
lower=string.toLowerCase()
let getVowels = (str) => str.replace(/[првткдл!?]/gi, '');
console.log(getVowels(lower));
const string = "Привет! Как дела?";
const vowels=["а","е","ё","и","о","у","ы","э","ю","я"];
const getVowels= stringFilter =>{
    let result="";
    for (let i =0;i<stringFilter.lenght;i++){
        const currentLetter = stringFilter[i].toLowerCase();
        if(vowels.includes(currentLetter)){
            result +=currentLetter;
        }
    }
    return result;
}
console.log(getVowels(string));
// Задача2
const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

    
console.log(getWorthyWorkers(workers))
// Задача3
const path = "/users/download/index.html"

console.log(isHtml(path))
// Задача4
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => { /* code */ };
console.log(filterArray(mixedArray, isEven));

// ДОМ1


// ДОМ2