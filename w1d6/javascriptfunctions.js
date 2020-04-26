
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

console.log("Expected output of max(45,43) is 45  " + maxOfTwo(45, 43));

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

console.log("Expected output of max(45,43, 42) is 45  " + maxOfThree(45, 43, 42));

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

console.log("Is the letter entered vowel? : " + isVowel('A'));

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

let list = [1, 1, 1, 10];
console.log("The sum of the list of numbers : " + sum(list));
console.log("The product of the list of the numbers is: " + multiply(list))


