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

    describe ('test', function () {
        it('reverseArray should return D, C, B, A', function () {
            let result = test.reverseArray(['A', 'B', 'C', 'D'], function () {
                test.assert.equal(result, ['D', 'C', 'B', 'A']);
            });
        });
        it('reverseArrayInPlace should return 9, 8, 7, 6 ', function () {
            let result = test.reverseArrayInPlace([6, 7, 8, 9], function () {
                test.assert.equal(result, [9, 8, 7, 6]);
            });
        });
        let list = {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        it('reverseArrayInPlace should return 1, 2, 3', function () {
            let result = test.listToArray(list, function () {
                test.assert.equal(result, [1, 2, 3]);
            });
        });

        it("the given prepend(10, prepend(20, null)) is {value: 10, rest: {value: 20, rest: null}}", function () {
            let result = test.listToArray({
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }
            }, function () {
                test.assert.equal(result,  {value: 10, rest: {value: 20, rest: null}});
            });
        });

    });
}());