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

//3 
const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('Насколько оцените его?', ""),
      c = prompt('Один из последних просмотренных фильмов?', ""),
      d = prompt('Насколько оцените его?', "");


personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);
