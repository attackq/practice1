"use strict";

/* const numberOfFilms = +prompt("How many films have you already watched?", "");

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
console.log(personalMovieDB); */


/* function start() {
   numberOfFilms = +prompt("How many films have you already watched?", "");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you already watched?", "");
   }

} */


const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres: [],
    privat : false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you already watched?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already watched?", "");
        }

     },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Name last movie", ""),
                  b = prompt("Name your mark", "");
            if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detecetPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    toggleVisibleDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;

        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat) {
            console.log("error!!!!!!!!")
            ;
        } else {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++) {
            let ask = prompt("Ваш любимый жанр?");
            if (ask === '' || ask == null) {
                console.log('вы ввели неверные данные!');
                i--;
            } else {
                personalMovieDB.genres[i-1] = ask;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });

    }

};


//personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detecetPersonalLevel();

//personalMovieDB.showMyDB();
//personalMovieDB.toggleVisibleDB();
//personalMovieDB.writeYourGenres();






