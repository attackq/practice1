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

  function isIsogram(str) {
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

  isIsogram('katya');