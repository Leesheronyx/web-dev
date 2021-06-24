"use strict";


let umberOfFilms;
// function start() {
//     for(let i = 0; i < 1; i++) {
//         umberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
//         if(umberOfFilms == '' || umberOfFilms != null) {
//             umberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
//         } else {
//             console.log('Произошла ошибка')
//         }
//     }
// }
function start() {
    
    while(umberOfFilms == '' || umberOfFilms == null || isNaN(umberOfFilms)) {
        umberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
    }
}
//start();

const personalMovieDB = {
    count: umberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
        if(a == '' || a == null || !isNaN(a)) {
            i--;
        } else {
            personalMovieDB.genres[i - 1] = a.toUpperCase();
        }
        
    }
}
writeYourGenres(personalMovieDB.genres);
console.log(personalMovieDB);

function writeYourGenres(x) {
    
    for(let i = 1; i <= 3; i++) {
        x[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
        
    
}
writeYourGenres(personalMovieDB.genres);
console.log(personalMovieDB);

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } 
}
function showMyDB(a) {
    if(a == false) {
        console.log(personalMovieDB);
    } 
}
showMyDB(personalMovieDB.privat);


function moviesMove () {
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
// moviesMove();


function rateFilms() {
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
// rateFilms();



// console.log(personalMovieDB);



