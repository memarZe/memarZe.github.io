/*jshint esversion: 6 */
window.onload=function () {
    "use strict";


    /*A function the takes an array and sums all the numbers in an array of numbers*/
    function sum(arr) {
        let sumElements = arr.reduce((totalSum, current) => {
            return totalSum + current;
        });
        return sumElements;
    }

    let array = [4, 5, 6, 5];
    console.log("The Expected output of " + array + " is 20 : " + sum(array));

    /*A function the takes an array and multiply all the numbers in an array of numbers*/
    function multiply(arr) {
        let sumElements = arr.reduce((totalSum, element) => {
            return totalSum * element;
        });
        return sumElements;
    }

    let arrayMultiply = [2, 10, 5, 6];
    console.log("The Expected output of " + arrayMultiply + " is 600: " + multiply(arrayMultiply));

    /* A FUnction that takes a string returns reversal of the string*/
    function reverse(string) {
        return string.split('').reduce((letter1, letter2) => letter2 + letter1);
    }

    console.log("The Expected output of Memar is ramem: " + reverse("Memar"));

    /* A a function that takes an array of words and an integer i and returns the array of words that are longer than i. */
    function filterLongWord(arrOfWords, i) {
        let newArray = arrOfWords.filter((currentElement) => {
            return currentElement.length > i;
        });
        return newArray;
    }

    let arrayOfWords = ["Memar", "Zelealem", "Desta", "Geremew"];
    console.log("The Expected output of " + arrayOfWords + " is 600: " + filterLongWord(arrayOfWords, 5));
};