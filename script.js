"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ""),
                  b = prompt('Насколько оцените его?', "");
        
            if (a != null && b != "null" && a != "" && b != "" && a.length < 50) {
                personalMovieDb.movies[a] = b;   
                console.log('done');
            }
            else {
                i--;
                console.log('error');
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDb.count >= 0 && personalMovieDb.count < 10) {
            console.log("Просмотрено довольно мало фильмов.");
        } 
        else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log("Вы классический зритель.");
        }
        else if (personalMovieDb.count >= 30) {
            console.log("Вы киноман.");
        }
        else {
            console.log("Произошла ошибка.");
        }
    },
    showMyDB: function() {
        if (!personalMovieDb.private) {
            console.log(personalMovieDb.private);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
            while (personalMovieDb.genres[i] == '' || personalMovieDb.genres[i] == null) {
                personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} — это ${item}`);
            i++;
        })
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDb.private) {
            personalMovieDb.private = false;
        }
        else {
            personalMovieDb.private = true;
        }
    }
};

personalMovieDb.start();
personalMovieDb.rememberMyFilms();
personalMovieDb.detectPersonalLevel();
personalMovieDb.writeYourGenres();
personalMovieDb.toggleVisibleMyDb();
personalMovieDb.showMyDB();