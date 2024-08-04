/*
    Activity 1 : Class Definition.
*/

//Task 1

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greeting() {
//     return `Hello ${this.name} Welcome Back.`;
//   }
// }

// const greet = new Person("akki", 24).greeting();
// console.log(greet);

//Task 2

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   updateAge = function (newAge) {
//     return (this.age = newAge);
//   };
// }

// const update = new Person("akki", 24);
// console.log(update.updateAge(55));
// console.log(update);

/*
    Activity 2 : Class Inheritance.
*/

// Task 3

// class Student extends Person {
//   constructor(name, age, studentId) {
//     super(name, age);
//     this.studentId = studentId;
//   }
//   returnId = function () {
//     return `The Student ID is ${this.studentId}`;
//   };
// }
// console.log(new Student("akki", 24, 112).returnId());

//Task 4

// class Student extends Person {
//   constructor(name, age, studentId) {
//     super(name, age);
//     this.studentId = studentId;
//   }
//   greeting() {
//     return `Hello ${this.name} Your Id is ${this.studentId}`;
//   }
// }

// console.log(new Student("akki", 24, 112).greeting());

/*
    Activity 3 : Static Methods and Properties.
*/

//Task 5

// class StaticMethod extends Person {
//   static Staticgreeting() {
//     return `Hello This is Static Greeting.`;
//   }
// }

// console.log(StaticMethod.Staticgreeting());

// Task 6

// class Student extends Person {
//   static numberOfStudents = 0;
//   constructor(name, age) {
//     super(name, age);
//     Student.numberOfStudents += 1;
//   }
// }

// console.log(new Student("akki", 24));
// console.log(new Student("akki", 24));

// console.log("Total No. of Students: " + Student.numberOfStudents);

/*
    Activity 4 : Getters and Setters.
*/

//Task 7 : Getter Method

// class Person {
//   constructor(FirstName, LastName) {
//     this.FirstName = FirstName;
//     this.LastName = LastName;
//   }
//   get getFullName() {
//     return `${this.FirstName} ${this.LastName}`;
//   }
// }

// console.log(new Person("akki", "bisht").getFullName);

//Task 8 : Setter Method

// class Person {
//   constructor(FirstName, LastName) {
//     this.FirstName = FirstName;
//     this.LastName = LastName;
//   }
//   set FirstName(value) {
//     this._FirstName = value.toUpperCase();
//   }
//   set LastName(value) {
//     this._LastName = value.toUpperCase();
//   }

//   FullName() {
//     return `${this._FirstName} ${this._LastName}`;
//   }
// }

// console.log(new Person("akki", "bisht").FullName());

/*
    Activity 5 : Private Fields.
*/

//Task 9

class Account {
  static #balance = 0;

  static depositeMoney(money) {
    Account.#balance += money;
    return `Remaining balance is ${Account.#balance}`;
  }
  static withdrawMoney(money) {
    if (Account.#balance < money) {
      return `insufficent balance ${Account.#balance}`;
    } else {
      Account.#balance -= money;
      return `Remaining balance is ${Account.#balance}`;
    }
  }
  static getBalanceVAlue() {
    return Account.#balance;
  }
}

// Task 10

// console.log(Account.depositeMoney(200));
// console.log(Account.depositeMoney(1200));
// console.log(Account.getBalanceVAlue());
// console.log(Account.withdrawMoney(150));
