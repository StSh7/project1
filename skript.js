let numberOfFilms;
do {
    numberOfFilms = prompt('How many films your watch?', '');
} while (numberOfFilms.length == 0);



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let quest1,
    quest2;
for (let i = 0; i < 2; i++) {

    do {
        quest1 = prompt('one of the last waching film?', '');
    } while (quest1.length == 0 || quest1.length > 50);
    quest2 = prompt('How many estimate thim?', '');
    personalMovieDB.movies[quest1] = quest2;
    if (quest1.length == 0 || quest2.length > 50 || quest2.length == 0) {
        i--;
    }
}
console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('ВИ класический зритель!!');
} else {
    alert('ДА ви кіноман!!!!');
}
