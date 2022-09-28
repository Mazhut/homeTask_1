"use strict";

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


//2
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


if (personalMovieDb.count >= 0 && personalMovieDb.count < 10) {
    const optionA = alert("Просмотрено довольно мало фильмов.");
} 
else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    const optionB = alert("Вы классический зритель.");
}
else if (personalMovieDb.count >= 30) {
    const optionC = alert("Вы киноман.");
}
else {
    const optionD = alert("Произошла ошибка.");
}

//3 
let i = 0;
let recentFilms = [];
let recentRatings = [];

do {
    recentFilms[i] = prompt('Один из последних просмотренных фильмов?', "");

    while (recentFilms[i] == '' || recentFilms[i].length > 50) {
        recentFilms[i] = prompt('Один из последних просмотренных фильмов?', "");
    }

    recentRatings[i] = prompt('Насколько оцените его?', "");

    while (recentRatings[i] == '' || recentRatings[i].length > 50) {
        recentRatings[i] = prompt('Насколько оцените его?', "");
    }
    personalMovieDb.movies[recentFilms[i]] = recentRatings[i];
    i++;
} while (i < 2);

// for (let i = 0; i < 2; i++) {
//     recentFilms[i] = prompt('Один из последних просмотренных фильмов?', "");

//     if (recentFilms[i] == ''|| recentFilms[i].length > 50) {
//         recentFilms[i] = prompt('Один из последних просмотренных фильмов?', "");
//         i--;
//         continue;
//     }

//     for (let j = 0; j < 2; j++) {
//         recentRatings[j] = prompt('Насколько оцените его?', "");

//         if (recentRatings[j] == '' || recentRatings[j] > 50) {
//             recentRatings[j] = prompt('Насколько оцените его?', "");
//             j--;
//         }
//     }
// }

console.log(personalMovieDb);
