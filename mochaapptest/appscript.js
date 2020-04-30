/*jshint esversion: 6 */
(function() {
    "use strict";
    let test = {
        reverseArray: function (arr) {
            return  arr.reduce((resArr, elm) => {resArr.splice(0,0, elm); return resArr;}, []);
        },

        reverseArrayInPlace: function (arr) {
            return  arr.reduce((resArr, elm) => {resArr.splice(0,0, elm); return resArr;}, []);
        },

        listToArray: function (list){
            let result = [];
            while (list !== null) {
                result.push(list.value);
                list = list.rest;
            }
            return result;
        },

        prepend: function (val, list) {
            let result = {
                value: val,
                rest: null
            };
            result.rest = list;
            return result;
        }
    };
}());