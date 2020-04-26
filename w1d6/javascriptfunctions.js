
/* a function that takes two numbers as arguments and returns the largest of them
* 1 if one of both greater  it will return the greater number
* 2. if both are equal it will return "They are equal"
* */
function maxOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1){
        return num2;
    }else{
        return "They are equal";
    }
}

console.log("The Expected output of max(45,43) is 45  " + maxOfTwo(45, 43));

/* a function that takes three numbers as arguments and returns the largest of them
* 1 if one of the  numbers is greater  it will return the greater number
* 2. if all numbers are equal it will return "They are equal"
* */
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3){
        return num2;
    }else if(num3>num2 && num3>num1){
        return num3;
    }else {
        return "They are equal"
    }
}

console.log("The Expected output of max(45,43, 42) is 45  " + maxOfThree(45, 43, 42));

/* a function that takes a character and returns true if it is a vowel, false otherwise.*/

function isVowel(char) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i<=vowels.length; i++){
        if(char===vowels[i]){
            return true;
        }
    }
    return false
}

console.log("The Expected output of a is true? : " + isVowel('a'));

/* A function sum() to sum two numbers and return the result. t*/

function sum(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }

    return sum;
}
function multiply(arr){
    let multiply = 1;
    for (let i=0; i<arr.length; i++){
        multiply = multiply * arr[i];
    }

    return multiply
}

let numList = [5, 10, 15, 20];
console.log("The Expected output of [5, 10, 15, 20] is 50?: " + sum(numList));
console.log("The Expected output of [5, 10, 15, 20] is 15000?: " + multiply(numList))


function reverse(str) {
 let reversedStr = "";
 for (let i=str.length-1; i>=0; i--){
     reversedStr = reversedStr + str.charAt(i);
 }
 return reversedStr;
}

console.log("The Expected output of 'Memar Zelealem' is 'melaelez ramem': " + reverse("Memar Zelealem"));

/*A function that takes an array of words and returns the length of the longest one.*/

function findLongestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let longestWord = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            longestWord = str[i];
        }
    }
    return longestWord;
}

console.log("The Expected output of 'Memar Zelealem Geremew' is 'Zelealem': " + findLongestWord("Memar Zelealem Geremew"));

/*A function that takes an array of words and an integer x and returns the array of words that are longer than x */
function  filterLongWords(arr, j) {
    let filteredWords = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > j) {
            filteredWords.push(arr[i]);
        }
    }
    return filteredWords;
}

let listOfWords = ["JavaScript", "misunderstood", "language"];
console.log("The expected output of " +
    "'JavaScript', 'misunderstood', 'language' " +
    "and 8 is 'JavaScript', 'language': " + filterLongWords(listOfWords, 5));

/*A function that take an array and and returns the array by multi0lying each element by 10*/
function multiplyEachElement(arr){
   let multipliesArr = arr.map(myFunction);

    function myFunction(num) {
        return num * 10;
    }

    return multipliesArr
}
let num = [0, 5, 10, 1];
console.log("The expected output of [0, 5, 10, 1] is [0, 50, 100, 10]: " + multiplyEachElement(num));

/*A function that take an array and filters the elements of the array which is equal to 3*/
function f(arr) {

    let lucky = arr.filter(function(number) {
        return number === 3;
    });
    return lucky
}

let l = [3, 5, 10, 3];
console.log("The expected output of [3, 5, 10, 3] is [3, 3] : " + f(l));

/*A function that take an array of numbers and returns the product of all elements.*/
function product(arr) {
    let product = 1;
    for (let i=0; i<arr.length; i++) {
        product = product * arr[i];
    }
    return product
}

let y = [3, 5, 10, 3];
console.log("The expected output of [3, 5, 10, 3] is 450: " + product(y));