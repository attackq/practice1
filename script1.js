"use strict";

/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
 */
/* const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d:17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20; */

/* console.log(add);
console.log(clone); */
/*
const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'ddfasdfasfa';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

   function log(a, b, c) {
          console.log(a);
          console.log(b);
          console.log(c);

      }

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

console.log(array);
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newOb = {...q};
console.log(q);
console.log(newOb); */

// To String
console.log(typeof(String(1233)));

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';

//To Number
console.log(typeof(+'4'));


console.log(typeof(parseInt('15px', 10)));

let answ = +prompt("Hello", "");

// To Boolean

// 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
    console.log("working...");
}

switcher = 1;

if (switcher) {
    console.log("working...");
}

console.log(typeof(Boolean('4')));

console.log(typeof(Boolean(!!'4444')));