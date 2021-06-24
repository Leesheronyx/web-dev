"use strict";


const umberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: umberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function showMyDB(a) {
    if (!a) {
        console.log(personalMovieDB);
    } else {
        console.log('Error');
    }
}
//showMyDB(personalMovieDB.privat);

function writeYourGenres (b) {
    for(let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        if(a === '' || a === null || !isNaN) {
            i--;
        } else {
            b[i-1] = a;
        }
    }
}
writeYourGenres(personalMovieDB.genres);
console.log(personalMovieDB);




// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),    
//           b = prompt("На сколько оцените его?", "");
//           if (a != null && b!=null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//           } else {
//               i--;
//           }
// }


// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//     console.log( typeof(umberOfFilms) );
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла Ошибка!');
// }

// console.log(personalMovieDB);



