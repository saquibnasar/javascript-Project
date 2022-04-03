// const age = 18;

// age == 18 ? console.log("hi") : console.log("bye");

// const area = "ddf";
// var pI = 3.142,
//   l = 5,
//   b = 4,
//   r = 3;
// switch (area) {
//   case "circle":
//     console.log("the area of  the circle is : " + pI * r ** 2);
//     break;
//   case "triangle":
//     console.log("the area of  the triangle is : " + (l * b) / 2);
//     break;
//   case "rectriangle":
//     console.log("the area of  the rectriangle is : " + b * l);
//     break;
//   default:
//     console.log("Enter a valid value");
// }

// var num = 0;
// while (num <= "10") {
//   console.log(num);
//   num++;
// }

// let num = 20;
// do {
//   console.log(num);
//   num++;
// } while (num <= "10");

// for (let num = 1; num <= 10; num++) {
//   console.log(8 * num);
// }

// let satart = (a, b) => {
//   total = a + b;
//   console.log(total);
// };
// satart(20, 30);

// const object = {
//   id: 1,
// };
// console.log(object);

// const newObject = Object.assign(object, { name: "saquib" });
// console.log(newObject);

// const array = [5, 7, 34, 48];
// const arrey2 = array.reduce((accumulator, item) => {
//   debugger;
//   return accumulator - item;
// });
// console.log(arrey2);

// setInterval(() => {
//   let time = new Date().toLocaleTimeString();
//   document.getElementById("time").innerHTML = time;
// }, 1000);

// document.getElementById("time").innerHTML = time;

// console.log(document.getElementsByClassName("para"));
// document.getElementById("para").innerHTML = "sdfk";
// document.getElementById("para").innerHTML = "sdfk";
// document.querySelector(".para2").innerHTML = "sdfktg";

// const mouseup = () => {
//   const p = document.querySelector("p");
//   p.style.color = "red";
// };
// const mousedown = () => {
//   const p = document.querySelector("p");
//   p.style.color = "yellow";
// };
// let numData = document.querySelector("#number");
// let number = 0;
// let data;
// const num = () => {
//   data = setInterval(() => {
//     numData.innerHTML = number;
//     number++;
//   }, 1000);
// };

const numStop = () => {
  // setInterval(() => {
  //   numData.innerHTML = number;
  //   number++;

  // }, 1000);
  clearInterval(data);
};
// setInterval(() => {
//   let time = new Date().toLocaleTimeString();
//   document.getElementById("time").innerHTML = time;
// }, 1000);

// let bioData = {
//   myName: {
//     firstName: "saquib",
//   },
//   myAge: 26,
//   getData() {
//     console.log(`hello ${bioData.myAge}`);
//   },
// };
// bioData.getData();
// let myName = "hello";
// let data = { myName };
// console.log(data);

// let oldNum = Number.MAX_SAFE_INTEGER;
// const newNum = 9007199254740991n;
// console.log(typeof newNum);
// console.log(newNum);

const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);

sum(5)(3)(8);
