(function() {
    "use strict";


    const sayHello = () =>{
        return "Hello";
    }

    const hello = (greeter, person) => {
        return greeter() + ' ' + person
    }

    console.log(hello(sayHello, "Memar"));

    const initialValue = 0;

    const sum = [{x: 1}, {x:2}, {x:3}];
    const x = sum.reduce(
        function (accumulator, currentValue) {return accumulator + currentValue.x;},initialValue
    );

    document.writeln(x); // logs 6

    let arr = [3, 4, 5, 6];
    let add = arr.reduce(function (accumulator, element) {
        return  accumulator + element;
    });
            console.log(add);

    const str = "Memar Zelealem";
    let rever = str.split('').reduce(function (acc, ele) {
        return ele + acc;
    });
    console.log(rever);

    function f(x, y) {
        console.log(x + '' + y);
    }

    f("Memar");

})();

