"use strict";


let umberOfFilms;
function start() {
    umberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    while (umberOfFilms == '' || umberOfFilms == null || isNaN(umberOfFilms)) {
        umberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    }
}
// start();



const personalMovieDB = {
    count: umberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),    
              b = prompt("На сколько оцените его?", "");
              if (a != null && b!=null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
              } else {
                  i--;
              }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
        console.log( typeof(umberOfFilms) );
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла Ошибка!');
    }
}
// detectPersonalLevel();

function showMyDB () {              //- мой варик
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } 
}
//showMyDB();

function showMyDB () {    // Можно сделать так
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } 
}
//showMyDB();


function showMyDB (hidden) { // По уроку
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
//showMyDB(personalMovieDB.privat);

function writeYourGenres() { // Можно сделать так и это короче
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) { // Можно сделать так
        const gener = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = gener; 
    }
}
writeYourGenres();
console.log(personalMovieDB);

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         const a = prompt('Ваш любимый жанр под номером', '');
//         personalMovieDB.genres = a;
//     }
// }
// writeYourGenres();



