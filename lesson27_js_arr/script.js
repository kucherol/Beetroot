/* 1 

const products = [
    {name : 'potato', amount : 5, bought : "yes"},
    {name : 'carrot', amount : 3, bought : "no"},
    {name : 'onion', amount : 15, bought : "yes"},
    {name : 'corn', amount : 2, bought : "yes"}
];
*/
/* 1.1
let firstSort = products.sort(function (a, b) {
    if (a.bought > b.bought) {
      return -1;
    }
  });
*/

/* 1.2
const prod = prompt('Enter the product name');
const am = +prompt('enter the product amount');
let addNewProd = products.find(function(el) {
    if (el.name === prod) {
      el.amount = el.amount + am;
      return console.log(products);
    }
  });
*/

/* 1.3
const prod = prompt('If U bought a product then Enter the product name');
let buyProd = products.find(function(el) {
    if (el.name === prod) {
      el.bought = "yes";
      return console.log(products);
    }
  });
*/

/* 2 

const check = [
  {name : 'banana', amount : 10, price : 25},
  {name : 'pineapple', amount : 2, price : 50},
  {name : 'kiwi', amount : 5, price : 44},
  {name : 'orange', amount : 18, price : 35},
  {name : 'strawberry', amount : 22, price : 90}
]

/* 2.1 2.2
let pay = 0;
let checkPrint = check.map(function(el) {
  pay = pay + el.amount * el.price;
  return console.log(el);
});
console.log(` you have to pay ${pay}`);
*/

/* 2.3
let summ = check.map(function(el) {
  let pay = 0;
  pay = pay + el.amount * el.price;
  el.summ = pay;
  return;
});

let Sort = check.sort(function (a, b) {
  if (a.summ > b.summ) {
    return -1;
  }
});

console.log(`the highest summ = `, check[0]);
*/

/* 2.4
let average = check.map(function(el) {
  let avPrice = 0;
  avPrice = el.price / el.amount;
  el.averagePrice = avPrice;
});
console.log(check);
*/

/* 3
const style = [
  {id : 1, color : 'red', fs : '40px', ta : 'center'},
  {id : 2, color : 'green', fs : '60px', ta : 'right'},
  {id : 3, color : 'blue', fs : '90px', ta : 'left'},
]

let a = +prompt('choose the text syle 1,2 or 3');
let t = prompt('enter the text');
style.map(function(el) {
  if (a === el.id) {
  return document.write(`<p style="color: ${el.color}; font-size: ${el.fs}; text-align: ${el.ta}">${t}</p>`);
  }
}) 
*/


/* 4
const rooms = [
  {name : 'red', sits : 15, faculty : 'economics'},
  {name : 'green', sits : 12, faculty : 'math'},
  {name : 'blue', sits : 14, faculty : 'math'},
  {name : 'black', sits : 19, faculty : 'history'},
  {name : 'yellow', sits : 19, faculty : 'economics'}
]

/* 4.1
let r = rooms.map((el) => console.log(el));
*/

/* 4.2 
let a = prompt('enter the faculty')
let r = rooms.map((el) => {
  if (el.faculty === a) {
  console.log(el);
  }
});
*/

/* 4.3
let a = +prompt('Enter the students amount');
let b = prompt('enter the faculty');
let r = rooms.map((el) => {
  if (el.faculty === b && el.sits >= a) {
  console.log(el);
  }
});
*/

/* 4.4
let sort = rooms.sort(function (a, b) {
  if (a.sits > b.sits) {
    return -1;
  }
});
console.log(rooms);
*/

/* 4.5 
let sort = rooms.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
});
console.log(rooms);
*/