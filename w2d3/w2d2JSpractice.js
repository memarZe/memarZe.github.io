/*jshint esversion: 6 */
(function () {
    "use strict";
    function reverseArray(arr) {
       let newArray;
        newArray =  arr.reduce((resArr, elm) => {resArr.splice(0,0, elm); return resArr;}, []);
        return newArray;
    }

    console.log("The Expected  is: " + reverseArray(['A', 'B', 'C', 'D']));

    function reverseArrayInPlace(arr) {
        let newArray;
        newArray = arr.reduce((resArr, elmnt) => {resArr.splice(0, 0, elmnt); return resArr;}, []);
        return newArray;
    }

    let numArray = [4, 5, 6, 7, 8];
    console.log("The Expected result of " + numArray + " is " + reverseArrayInPlace(numArray));

    function listToArray(list) {
        let result = [];
        while (list !== null) {
            result.push(list.value);
            list = list.rest;
        }
        return result;
    }


    let list = {
        value: 1,
        rest: { value: 2,
            rest: {value: 3,
                rest: null
            }
        }
    };

    console.log("the array is: " + listToArray(list));

    function prepend(val, list) {
        let result = {
            value: val,
            rest: null
        };
        result.rest = list;
        return result;
    }

    console.log(7, list);
})();