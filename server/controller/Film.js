const Film = require("../model/film");

const createFilm = async ({ name, content, score, poster, film, time, created, }) => {
    const newFilm = await Film.create({ name, content, imdb_score: score, poster, video: film, time, date: created });

    return newFilm;
};

module.exports = {
    createFilm,
};
