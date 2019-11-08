const json = require( "./halloween.json" );
 
const movies = json.movies;

// console.log(movies.length);


// Get a list of movies released before 1950
// const moviesBefore1950 =
//     movies.filter(function(movie) {
//         if(movie.date <= 1950) {
//             return true;
//         }
//     });
// console.log(moviesBefore1950);







// Get a list of movies released after 1975
// const moviesAfter1975 =
//     movies.filter(function(movie) {
//         if(movie.date >= 1975) {
//             return true;
//         }
//     });
// console.log(moviesAfter1975);






// Get a list of movies that start with the word "The"
// const startsWithThe = 
//     movies.filter(function(movie) {
//         if(movie.title.startsWith("The")) {
//             return true;
//         }
//     });
// console.log(startsWithThe);







// Get a list of the top 25 movies (filter; not manual)
// const top25 = 
//     movies.filter(function(movie) {
//         if(movie.rank <= 25) {
//             return true;
//         }
//     });
// console.log(top25);






// Get a list of movies that contain the word "halloween"
// const containsHalloween = 
//     movies.filter(function(movie) { 
//         const lowerCaseTitle = movie.title.toLowerCase();
        
//         if(lowerCaseTitle.includes("halloween")) {
//             return true;
//         }
//     });
// console.log(containsHalloween);








// Find the movie titled "Halloween 4: The Return of Michael Myers",
// if it exists.
// const findSpecificMovie = 
//     movies.find(function(movie) { 
//         if(movie.title === "Halloween 4: The Return of Michael Myers") {
//             return true;
//         }
//     }); 
// console.log(findSpecificMovie);








// Create a new array containing strings of all titles
// const createTitleStrings =
//     movies.map(function(movie) { 
        
//         return movie.title;
        
       
//     });
// console.log(createTitleStrings);







// Use the reduce function to sum up the release year of every movie
// const sumOfAllYears = movies.reduce(function(runningTotal, movie) {
//     return runningTotal + movie.date;
// }, 0);
// console.log(sumOfAllYears);








// Sort by Release Date Year. Either up or down.
const sortReleaseDate =
    movies.sort(function(movieA, movieB) {
        if(movieA.date < movieB.date) {
            return -1;
        }
        else if(movieA.date > movieB.date) {
            return 1;
        }
        else {
            return 0;
        }
    });
console.log(sortReleaseDate); 