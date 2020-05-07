//code is not working for question 8 ?
(function () {

    "use restrict";


    class User {

    constructor(name){
            this.name = name;
        }

        sayHi() {
            alert(this.name);
    }
    }

    let user = new User("John");
    user.sayHi();
})();
