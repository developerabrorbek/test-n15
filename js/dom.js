"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// const h1El = document.getElementById("title");
// document.getElementsByClassName("class")
// document.getElementsByName("name-attribute-value")
// document.getElementsByTagName("h1")

// const headerEl = document.querySelector("h1");
// const headerEls = document.querySelectorAll("h1");

// topshiriq
// 2ta elementlarni tanlovchi funksiya tuzing
// $ -> 1ta element qaytarsin
// $$ -> bir nechta element qaytarsin

// $("h1") -> 1- h1 element kelsin
// $$("h1") -> barcha h1 elementlari kelsin

// DOM ga element qo'shish

// 1-usul. createElement va appendChild
// const newHeaderOne = document.createElement("h1");

// newHeaderOne.innerText = "Hello world!"
// newHeaderOne.textContent = "Hello world 2!"

// $("body").appendChild(newHeaderOne);

// setInterval(() => {
//   const now = new Date();
//   newHeaderOne.textContent = now.toLocaleTimeString()
// }, 1000);

// 2-usul. insertBefore
// $("h1").parentNode.insertBefore(newHeaderOne, $("h1"));

// 3-usul. innerHTML

// $("h1").innerHTML = "<a target='_blank' href='https://kun.uz'>link</a>"

// 4-usul. insertAdjacentHTML

// $("body").insertAdjacentHTML("afterbegin", "<a>link</a>")

// topshiriq

// createElement(color, elementName) -> yangi element yaratishi  (prompt)
// va uning rangini berilgan rangga o'zgartirishi kerak
// ekranga chiqarishi kerak.

// createElement(red, h1) -> <h1>h1 element rangi: red</h1>

// const createElement = (color, elementName) => {
//     const newElement = document.createElement(elementName);
//     newElement.style.color = color;
//     newElement.innerText = `${elementName} elementi rangi: ${color}`;
//     $("body").appendChild(newElement);
// }

// const element = prompt("Biror element  kiriting:")
// const color = prompt("element rangini kiriting:")

// createElement(color, element)

// Element stilini o'zgartirish
// $("h1").style.transform = "rotate(30deg)"

// Elementga yangi class qo'shish
// $("h1").classList.add("new-class", "second")

// Elementdan classni olib tashlash
// $("h1").classList.remove("new-class")

// Elementga yangi class bo'lmasa uni qo'shish, aks holda olib tashlash
// $("h1").classList.toggle("new-class")

// Elemetning attributini olish
// console.log($("h1").getAttribute("id"))

// Elementga attribut qo'shish yoki yangilash
// $("h1").setAttribute("id", "text")

// click -> sichqonchaning chap tarafi 1 marta bosilgan holatini eshitadi
// document.querySelector("h1").addEventListener("click", function (event)  {
//     this.classList.toggle("red")
// })

// dblclick -> sichqonchaning chap tarafi 2 marta bosilgan holatini eshitadi

// mousedown -> sichqonchaning chap tarafi bosilgan holati

// mouseup -> sichqonchaning chap tarafi bosib qo'yib yuborilganda

// mousemove -> element ustida sichqoncha harakatlangan vaqt

// mouseleave -> sichqoncha element ustini tark etganda

// Keyboard events

// document.querySelector(".input-text").addEventListener("keydown", function (event) {
//     console.log(event, this)
// })

// keyup -> klaviatura bosilib qo'yib yuborilgan payt
// keydowm -> klaviatura bosilib turgan payt

// change -> biror ma'lumot o'zgarganda ishlaydi
// document.querySelector(".input-text").addEventListener("keyup", function (event) {
//     document.querySelector(".result-text").textContent = this.value
// })

// submit -> forma jo'natilgandagi holati
// document.querySelector(".login-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const task = this.task.value;

//   document.querySelector(".task-list").insertAdjacentHTML(
//     "beforeend",
//     `
//         <li>
//         <span class="task">${task} : ${new Date().toDateString()}</span>
//       </li>
//         `
//   );

//   this.reset();
// });

// form yaratilsin
// 1 dona input qo'shamiz task kiritish uchun
// Task qo'shish tugmasi bosilganda pastdan uni qo'shilgan vaqti bilan chiqarsin.

const getCountriesByRegion = async function (region) {
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  return await res.json();
};

const showCountries = function (countries) {
  countries.forEach((c) => {
    document.querySelector(".countries-list").insertAdjacentHTML(
      "beforeend",
      `
        <li style="padding: 4px; border-radius: 4px; background-color: rgb(61, 59, 59); box-shadow: 1px 1px 2px 2px #ccc;">
            <img width="300" height="180" src="${c.flags?.png}" alt="${
        c.name.official
      }">

            <div class="country-body">
            <h4>${c.name.official}</h4>
            <p>Poytaxt: ${c?.capital?.length ? c.capital[0] : ""}</p>
            <p>Aholi: ${c.population.toLocaleString()}</p>
            </div>
      </li>`
    );
  });
};

// top-level await
const data = await getCountriesByRegion("asia");
console.log(data[0]);

showCountries(data);

let text = 121312312;
console.log(text.toLocaleString());

import axios from "../node_modules/axios/dist/esm/axios.js";

const response = await axios.get(
  "https://restcountries.com/v3.1/region/europe"
);

const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
// console.log(response)

const response1 = await axiosInstance.get("/region/europe", {
  username: "user",
  password: "1234",
});
console.log(response1);


// const numbers = [1,2,3,4,5]

// const result = numbers.reduceRight((acc, n) => acc - n, 12)

// console.log(result)
console.log("version 3")

console.log("from test branch")