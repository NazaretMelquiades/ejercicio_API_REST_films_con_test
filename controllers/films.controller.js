const fetchFilm = require('../utils/fetchFilms');

//READ
const getFilmByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        let film = await fetchFilm(title);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json(film);
    }
    catch (error) {
        console.error('Error fetching film by title:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//CREATE
const createFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({ message: `Se ha guardado ${movie.Title}` })
}

// UPDATE
const editFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({ id: `${movie.Id}`, message: `Se ha actualizado ${movie.Title}` });
};

// DELETE 
const deleteFilm = (req, res) => {
    const movie = req.body;
    res.status(200).send({ id: `${movie.id}`, message: `Se ha borrado la película con ID: ${movie.id}` })
};

module.exports = {
    getFilmByTitle,
    createFilm,
    editFilm,
    deleteFilm
};





















