const filmController = require('../controllers/films.controller');
const router = require('express').Router();

// GET http://localhost:3000/api/film/title
router.get("/:title", filmController.getFilmByTitle);

// Post http://localhost:3000/api/film
router.post('/', filmController.createFilm);

// PUT http://localhost:3000/api/film
router.put('/', filmController.editFilm);

// DELETE http://localhost:3000/api/film
router.delete('/', filmController.deleteFilm);

module.exports = router;