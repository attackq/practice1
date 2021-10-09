"use strict";
/* let num = 20;
function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("HELLO!");
console.log(num);

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,5));
console.log(calc(10,6)); */

/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello");
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
}; */

/* const str = "teSt";

console.log(str.toLowerCase());
console.log(str);

const fruit = "some fruit";

console.log(fruit.indexOf("q"));

const logg = "I am Olga"; */

// console.log(logg.slice(5, 9));

// console.log(logg.substring(5, 9));

/* console.log(logg.substr(5, 4));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); */


/* function isIsogram(str){
    let b = str.length;
    let v = str.toLowerCase();
   // console.log(v);
    for (let i = 0; i < b; i++) {
        let a = v.substring(i, i + 1);
        console.log(a);
        let c = v.substring(i + 1, b);
        console.log(c);

        if (c.includes(a)) {
            console.log("false!!!");
            break;
        } else if (c.includes(a) == false){

            console.log("true!!!");
            break;
        }

    }

  }

  isIsogram("moOse"); */

 /*  function isIsogram(str) {
      let i, j;
      str = str.toLowerCase();
      for(i = 0; i < str.length; i++) {
          for (j = i + 1; j < str.length; j++) {
              if (str[i] === str[j]) {
                  console.log('falseeee');
              }
          }
      }
      console.log('trueeee');
  }

  isIsogram('katya'); */

 /* function first() {
     // do something
     setTimeout(function() {
         console.log(1);
     }, 500);
 }

 function second() {
     console.log(2);
 }
 first();
 second();

 function learnJS(lang, callback) {
     console.log(`Я учу: ${lang}`);
     callback();
 }
function done() {
    console.log('я прошел этот урок');
}
 learnJS('javascript', done); */

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("test!");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);
const obj = {
    name: "alex",
    weight: 70,
    height: 178,
    eys: 'brown',
    parts: {
        legs: 2,
        arms: 2
    }
};
obj.gender = 'male';
console.log(obj);

console.log(Object.keys(obj).length); */
/* console.log(options["colors"]["border"]);

delete options.name;
console.log(options); */
/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }

}

console.log(counter); */

const arr = [14, 22, 3, 24, 8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value)
} */


/* const str = prompt('', "");

const products = str.split(', ');
products.sort();
console.log(products.join('; ')); */