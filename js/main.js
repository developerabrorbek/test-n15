"use strict";

// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }

// const john = new Person("John", 34)
// const anna = new Person("Anna", 34)

// console.log(john, anna)

// OOP

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }
// }

// const john = new Person("john", 45);
// const anna = new Person("anna", 45);
// const alex = new Person("alex", 45);
// const tom = new Person("tom", 45);

// const testPerson = {
//     name: "Test",
//     age: 45,
//     walk: function() {
//         console.log(`${this.name} can walk`);
//     }
// }

// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   set setA(val) {
//     if(typeof val == "number") {
//         this.a = val
//     }
//   }

//   get getA() {
//     return this.a;
//   }

//   add() {
//     console.log(this.a + this.b);
//   }
//   subtract() {
//     console.log(this.a - this.b);
//   }
//   multiply() {
//     console.log(this.a * this.b);
//   }
//   divide = function () {
//     console.log(this.a / this.b);
//   };
// }

// const calc = new Calculator(12, 4);

// calc.add();
// calc.subtract();
// calc.multiply();
// calc.divide();

// calc.setA = "24"
// calc.add();
// calc.subtract();
// calc.multiply();
// calc.divide();

// const car = {
//   brand: "BMW",
//   price: 120000,
//   color: "blue",
//   get logDetails() {
//     console.log(
//       `${this.color} ${this.brand.toLocaleLowerCase()}'ning narxi: ${
//         this.price
//       }$`
//     );
//   },

//   set setBrand(brand) {
//     if (typeof brand == "string") {
//       this.brand = brand;
//     }
//   },

//   drive: function () {
//     console.log(`${this.brand} can drive`);
//   },
// };

// console.log(car.brand);
// // car.brand = "Toyoto"
// car.logDetails;

// car.setBrand = 12;

// car.logDetails;

// const name = "Alex";
// const age = 34;
// const hobbies = ["suzish", "kitob oqish"];

// console.log(
//   `${name} ning yoshi ${age} va uning hobbilari: ${hobbies.join(",")}`
// );

// BankAccount nomli class yaratish
// o'z ichiga boshlang'ich -> name, balance kiritilsin
// methodlar -> transfer, accept
// get -> getBalance -> qiymat ko'rinishi: Alex'ning hisobi: 12000$
// set -> setBalance, buni ichida numberlikka tekshirilsin

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }

//     transfer(money) {
//         this.balance -= money
//         return this
//     }

//     accept(money) {
//         this.balance += money
//         return this
//     }

//     get getBalance() {
//         console.log(`${this.name}'ning hisobi: ${this.balance}$`)
//         // return `${this.name}'ning hisobi: ${this.balance}$`
//         return this
//     }

//     set setBalance(money) {
//         if(typeof money == "number") {
//             this.balance = money
//         }
//     }

//     static compareBalance(acc1, acc2) {
//         if(acc1.balance < acc2.balance) {
//             console.log(`${acc2.name}'ning hisobi ${acc1.name}'nikidan ko'p`)
//         } else {
//             console.log(`${acc1.name}'ning hisobi ${acc2.name}'nikidan ko'p`)
//         }
//     }
// }

// const account1 = new BankAccount("Tomas Shelbi", 350000)
// const account2 = new BankAccount("Will Smith", 43000)

// BankAccount.compareBalance(account1, account2)

// account1.getBalance
// account1.transfer(120000)
// account1.getBalance
// account1.accept(50000)
// account1.getBalance
// account1.setBalance = 500000
// account1.getBalance

// account1.accept(45000).transfer(120000).accept(12000).getBalance.accept(13000).getBalance

// OOP Principles

// Inheritance

// class Transport {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   get info () {
//     console.log(`${this.name} ning yaratilgan yili: ${this.year}`)
//   }
// }

// class Car extends Transport {
//   constructor(name, year, color, numberOfWheels, numberOfDoors, engineSize) {
//     super(name, year)

//     this.color = color;
//     this.numberOfWheels = numberOfWheels;
//     this.numberOfDoors = numberOfDoors;
//     this.engineSize = engineSize;
//   }

//   drive() {
//     console.log(`${this.name} mashinasi yuradi....`)
//   }
// }

// const porsche = new Car("Porsche 911", 2023, "black", 4, 2, 3)
// console.log(porsche["color"])

// TOPSHIRIQ
// Inson nomli class yarating, unda name, birthYear, birthPlace
// nomli xususiyatlar bo'lsin
// Inson classidan vorislik olib Talaba classini yarating
//  unda qo'shimcha: kurs, uquvTuri (grant, kontrakt), baho kabi xossalari bo'lsin
//  Inson classidan vorislik olib Uqituvchi classini yarating
//  unda qo'shimcha: groups, ishVaqti, maoshi kabi xossalari bo'lsin

// Polymorphism

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   makeSound() {
//     console.log(`${this.name} ovoz chiqaradi...`)
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name)
//   }

//   makeSound() {
//     console.log(`${this.name} 'vov-vov' degan ovoz chiqaradi...`)
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//   }

//   makeSound() {
//     console.log(`${this.name} 'miyov-miyov' degan ovoz chiqaradi...`)
//   }
// }

// const rex = new Dog("Rex")
// const tom = new Cat("Tom")

// console.log(tom.name)

// tom.name = "Jerry"
// rex.makeSound()
// tom.makeSound()

// // Encapsulation

// // public -> ommaviy
// // private -> shaxsiy
// // protected -> Himoyalangan

// class Inson {
//   #passportId;

//   constructor(name, birthYear, passportId) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.#passportId = passportId;
//   }

//   get getPassport() {
//     console.log(`${this.name} ning passport IDsi: ${this.#passportId}`)
//   }

//   #test () {
//     console.log("test method")
//   }
// }

// class Qariyalar extends Inson {
//   constructor(name, year, passportId) {
//     super(name, year, passportId)
//   }
// }

// const alisher = new Inson("Alisher", 1998, "AA1234567")
// const usmon = new Inson("Usmon", 1988, "AA1232367")
// const tomas = new Qariyalar("Tomas", 1954, "AA0987665")

// class Book {
//   constructor(title, year, author, count) {
//     this.title = title;
//     this.year = year;
//     this.author = author;
//     this.count = count;
//   }
// }

// class Library {
//   #books = []

//   constructor(books = []) {
//     this.#books = [...books]
//   }

//   addBook(book) {
//     this.#books.push(book)
//   }

//   searchBook(title) {
//     const book = this.#books.filter((b) => b.title.includes(title))

//     if(!book) {
//       console.log("Kitob topilmadi")
//       return null
//     }

//     return book
//   }

//   get books() {
//     console.log(this.#books)
//     return this.#books;
//   }
// }

// const alisherNavoiyLibrary = new Library()

// const utkanKunlar = new Book("O'tgan kunlar", 1967, "Abdulla Qodiriy", 12)
// const molxona = new Book("Molxona", 2020, "Kimdir", 20)
// const yulduzliTunlar = new Book("Yulduzli tunlar", 1990, "Pirimqul Qodirov", 15)
// const oqKema = new Book("Oq Kema", 1978, "Chingiz Aytmatov", 23)

// alisherNavoiyLibrary.addBook(utkanKunlar)
// alisherNavoiyLibrary.addBook(molxona)
// alisherNavoiyLibrary.addBook(yulduzliTunlar)
// alisherNavoiyLibrary.addBook(oqKema)

// alisherNavoiyLibrary.books
// console.log(alisherNavoiyLibrary.searchBook("un"))

// CUSTOM ERROR -> Exception

// 404 status code
// class NotFoundException extends Error {
//   constructor(message) {
//     super(message)
//     this.status = 404;
//     this.name = "NotFoundException"
//   }
// }

// 9-masala. Viktorina o'yini

// class Question {
//   constructor(title, choices, correctAnswerIndex) {
//     this.title = title;
//     this.choices = choices;
//     this.correctAnswerIndex = correctAnswerIndex;
//   }

//   checkAnswer(answerIndex) {
//     if (answerIndex === this.correctAnswerIndex) {
//       return true;
//     }

//     return false;
//   }
// }

// class Quizz {
//   #_questions = [];
//   #_result = 0;
//   constructor() {}

//   addQuestion(...questions) {
//     this.#_questions.push(...questions);
//   }

//   deleteQuestionByTitle(title) {
//     const questionIndex = this.#_questions.findIndex((q) => q.title === title);
//     if (questionIndex !== -1) {
//       this.#_questions.splice(questionIndex, 1);
//       return ;
//     }

//     throw new NotFoundException(`Quizz- ${title}. topilmadi`)
//   }

//   startQuizz() {
//     if (this.#_questions.length === 0) {
//       console.log("Quizzz ishlashning imkoni yo'q...");
//       return;
//     }

//     this.#_questions.forEach((q, i) => {
//       const title = `${i + 1}-savol. ${q.title} (1-${
//         q.choices.length
//       } oralig'ida variantni kiriting!) \n`;
//       let questionChoises = "";
//       q.choices.forEach((ch, index) => {
//         questionChoises += `${index + 1}) ${ch} \n`;
//       });

//       const answer = +prompt(title + questionChoises);

//       if (typeof answer !== "number" || !(answer <= q.choices.length)) {
//         console.log("Xato javob kiritdingiz❌");
//         return;
//       }

//       if (q.checkAnswer(answer - 1)) {
//         console.log("to'g'ri", answer);
//         this.#_result++;
//       }
//     });

//     console.log(`Umumiy javob: ${this.#_questions.length}/${this.#_result}`);

//     this.#_result = 0;

//     return;
//   }
// }

// // 1-savol. O'zbekistan poytaxti qaysi? (1-4 oralig'ida variantni kiriting!)
// // 1) Buxoro
// // 2) Xorazm
// // 3) Toshkent
// // 4) Samarqand

// // "Akbar" + "Tom" = "AkbarTom"

// const question1 = new Question(
//   "O'zbekistan poytaxti qaysi?",
//   ["Buxoro", "Xorazm", "Toshkent", "Samarqand"],
//   2
// );

// const question2 = new Question(
//   "Amir temur tug'ilgan yili?",
//   [1336, 1995, 1501],
//   0
// );

// const question3 = new Question(
//   "O'zbekistan poytaxti qaysi?",
//   ["Buxoro", "Xorazm", "Toshkent", "Samarqand"],
//   2
// );

// const question4 = new Question(
//   "Amir temur tug'ilgan yili?",
//   [1336, 1995, 1501],
//   0
// );

// const quizz = new Quizz();

// quizz.addQuestion(question1, question2, question3, question4);

// // quizz.startQuizz()
// quizz.deleteQuestionByTitle("O'zbekistan poytaxti qaysi?");

// quizz.startQuizz();

// 123 == "123"   => true
// 123 === "123" => false

// const mixins = {
//   log(message) {
//     console.log(message);
//   },
// };

// class NotificationTest {}

// Object.assign(NotificationTest.prototype, mixins);

// class Transport {}

// Object.assign(Transport.prototype, mixins);

// const notify = new NotificationTest();

// // notify.log("sjshajassasaj")

// const transfer = new Transport();

// // transfer.log("transport")

// try {
//   const notify = new NotificationTest();

//   // notify.log("sjshajassasaj")

//   const transfer = new Transport();

//   // transfer.log("transport")
//   // throw new Error("Xato qildingiz!");
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Finally bloki");
// }

// Topshiriq.
// User sinfini yarating
// xususiyatlar: ism, password, username, email

// UserController sinf yaratamiz
// methodlar: addUser, login
// login (username, password) qilganda agar foydalanuvchi ma'lumoti topilmasa -> NotFoundException
// addUser qilganda agar bu foydalanuvchi bo'lsa -> ConflictException (409)

// Masala
// Book nomli sinf(class) yarating
// xususiyatlari: title, description, author, year, price, count

// BookController nomli sinf(class) yarating
// metodlari: addBooks, updateBook, deleteBook, getBooks, getSingleBook, searchBooks, getAuthorBooks

// CALL, APPLY, BIND

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getFullName(age = 12, gender = "male") {
//     console.log(age, gender)
//     return this.firstName + " " + this.lastName
//   }
// }

// const johnSmith = new Person("John", "Smith")
// const alexBaker = new Person("Alex", "Baker")

// console.log(johnSmith.getFullName(34, "male"))
// console.log(alexBaker.getFullName.call(johnSmith, 45, "male"))
// console.log(alexBaker.getFullName.apply(johnSmith, [98, "female"]))

// const newFn = alexBaker.getFullName.bind(johnSmith)
// console.log(newFn(56, "asjkaskca"))

// console.log("start", new Date().toISOString())

// // for(let i = 0; i<100000; i++) {
// //   let a = 12
// // }

// setTimeout(() => {
//   console.log("1s dan so'ng")
// }, 1000)

// console.log("end", new Date().toISOString())

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Promisedan qaytgan ma'lumot(2s dan so'ng)");
//     reject(new Error("xatolikkkk"))
//   }, 2000);
// });

// console.log("start", new Date().toISOString());

// myPromise
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// .finally(() => console.log("finally block"))

// console.log("end", new Date().toISOString());

// getCountry("uzbekistan")
//   .then((data) => {
//     const [
//       {
//         borders,
//         name: { official: countryName },
//       },
//     ] = data;

//     console.log(`1-davlat: ${countryName}`);

//     if (borders[0]) {
//       return getCountry(borders[0]);
//     }
//   })
//   .then((data) => {
//     const [
//       {
//         borders,
//         name: { official: countryName },
//       },
//     ] = data;

//     console.log(`2-davlat: ${countryName}`);

//     if (borders[0]) {
//       return getCountry(borders[0]);
//     }
//   })
//   .then((data) => {
//     const [
//       {
//         borders,
//         name: { official: countryName },
//       },
//     ] = data;

//     console.log(`3-davlat: ${countryName}`);

//     if (Array.isArray(borders) && borders[1]) {
//       return getCountry(borders[1]);
//     }
//   })
//   .then((data) => {
//     const [
//       {
//         borders,
//         name: { official: countryName },
//       },
//     ] = data;

//     console.log(`4-davlat: ${countryName}`);
//   })
//   .catch((err) => console.log(err));

// getCountryWithAsync("russia").then(data => console.log(data))

// topshiriq
// barcha todo'larni olib keluvchi funksiya tuzing,
//  agar funksiyaga biror id kiritilsa unda aynan shu todo'ni olib kelsin
// agar kiritilga id'lik todo bo'lmasa NotFoundException (404) ekranga chiqsin
// API:  https://jsonplaceholder.typicode.com/todos/1

// getTodos(2)

// 4 == "4"
// 4 === "4"

// getTodos(1212)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// // function declaration
// function fnname(args) {}

// // function expression
// const fn = function (args) {};

// // ARROW FUNCTIONS
// const arrowFn = (args) => {};

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise1 resolved");
//   }, 3000);
// })

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise2 resolved");
//   }, 2000);
// })

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise3 rejected");
//   }, 1500);
// })

// Promise.any([promise1, promise2, promise3]).then(data => console.log(data)).catch(err => console.log(err))

// console.log(1)

// setTimeout(() => {
//   console.log(2)

//   setTimeout(() => {
//     console.log(7)
//   }, 0)

//   getCountryWithAsync("russia").then(russia => console.log(russia, 6))
// }, 0)

// Promise.resolve(3).then(data => {
//   console.log(data)

//   setTimeout(() => {
//     console.log(8)
//   }, 0)

//   getUzbekistan.then(country => console.log(country, 5))
// })

// console.log(4)

// throw new Error("Foydalanuvchi topilmadi...")

// class UnauthorizedException extends Error {
//   constructor(message) {
//     super(message)
//     this.isException = true;
//     this.status = 401;
//     this.name = "UauthorizedException";
//   }
// }

// throw new UnauthorizedException("Ro'yhatga olinmagan")

// const person = {
//   name: "Alex",
//   address: {
//     home: 54,
//     street: {
//       name: "Amir Temur shoh ko'chasi"
//     }
//   }
// }

// try {

//   console.log(person.address.city?.adsjhbadshj?.adjhbasdkasd?.asdhbasdhbda)

// } catch(err) {
//   console.log(err.message)
// }

// function counter() {
//   let count = 0;

//   return {
//     increment() {
//       return ++count;
//     }
//   }
// }

// const myCounter = counter()

// console.log(myCounter.increment())
// console.log(myCounter.increment())
// console.log(myCounter.increment())
// console.log(myCounter.increment())

// console.count("test")
// console.count("test")
// console.count("test")
// console.count("test")
// console.count("test")
// console.count("test2")
// console.count("test2")

// console.table(["asddsa","adasds", "jhhjhb"])

// const elTitle = document.getElementById("title")

// const title = document.querySelector("#title")
// const title1 = document.querySelectorAll("h1")
// console.log(title1)

// function $ (selector) {
//   return document.querySelector(selector)
// }

// function $$ (selector) {
//   return document.querySelectorAll(selector)
// }

// const data = {
//   username: "john",
//   password: "wick",
// };

// fetch("https://restcountries.com/v3.1/all", {
//   method: "GET",
//   // headers: {
  //   "accept-language": "en",
  //   "content-type": "application/json",
  // },
  // body: JSON.stringify(data),
// })
  // .then((res) => res.json())
  // .then((data) => console.log(data));

// METHODS

// GET -> olish
// POST -> yaratish
// PUT -> to'liq yangilash
// PATCH -> qisman yangilash
// DELETE -> o'chirish

// username: "john",
// password: "wick"






// import { getCountry } from "./functions.js";

// async function getAllCountries() {
//   const response = await fetch("https://restcountries.com/v3.1/all")
//   const data = await response.json()

//   return data
// }

// getAllCountries().then(data => {
//   let allCountriesHTML = ''

//   console.log(data)

//   data.forEach(c => {
//     allCountriesHTML += `
//       <li class="countries-list__item">
//       <img src="${c.flags?.png}"  alt="country image"/>
//         <p>${c.name.official}</p>
//       </li>
//     `
//   })

//   document.querySelector(".countries-list").innerHTML = allCountriesHTML

//   console.log(allCountriesHTML)
// })



{/* <li class="countries-list__item">
          <p>South Georgia and the South Sandwich Islands</p>
        </li> */}



