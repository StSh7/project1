const numberOfFilms = +prompt('How many films your watch?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
 const quest1 = prompt('one of the last waching film?', ''),
       quest2 = prompt('How many estimate thim?', ''),
       quest3 = prompt('one of the last waching film?', ''),
       quest4 = prompt('How many estimate thim?', '');
       personalMovieDB.movies[quest1] = quest2;
       personalMovieDB.movies[quest3] = quest4;
       console.log(personalMovieDB);
    const a = 8;
    console.log(a);