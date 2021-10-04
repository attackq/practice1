"use strict";

const numberOfFilms = +prompt("How many films have you already watched?", "");

// console.log(numberOfFilms);
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat : true
};

const a = prompt("Name last movie", ""),
      b = prompt("Name your mark", ""),
      c = prompt("Name last movie", ""),
      d = prompt("Name your mark", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

alert("i've done it!");
alert("new alert");