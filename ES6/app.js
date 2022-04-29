
//1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction =  (num1, num2) => {
    return num1 + num2;
};

console.log(arrowMyFunction(3,4));

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
const arrowAdd100 =  money =>  money + 100;

console.log(arrowAdd100(500));


//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

let userString = prompt('Please enter a string.');
let userChar = prompt('Please enter a character thats within the string.')

let stringFunc = (string, char) => {
    let count = 0;
    for(let i = 0; i < string.length; i++ ){
        if (userString.charAt(i).toLocaleLowerCase() == char.toLocaleLowerCase()){
            count += 1;
        }
    }
    return count;
};
console.log(`The String is: "${userString}"`)
console.log(`The occurrence of "${userChar}" in the string is ${stringFunc(userString, userChar)}`);