const express = require('express');
const router  = express.Router();
const Movie = require("C:\\Users\\PCCOM MSI\\IRONHACK\\lab-express-cinema\\starter_code\\models\\models");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) => {
  
  Movie.find()
  .then(allMoviesFromDB => {
  //console.log(`Movies from Db ${allMoviesFromDB}`)
    res.render('movies', {allMoviesFromDB})
  })
  .catch(error => {
    //console.log('Error while getting movies from the DB: ', error);
  });
})

router.get('/movie/:id', (req,res,next) => {
  //console.log(req.params.id)
  Movie.findOne({'_id': req.params.id})
  .then(oneMovie => {
    //console.log(oneMovie)
    
    res.render('movie-features', {movies: oneMovie});
  })
  
  .catch(err => console.log(`You made a mistake ${err} `))
  
})


module.exports = router;
