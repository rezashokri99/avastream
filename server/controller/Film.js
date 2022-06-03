const Film = require("../model/film");
const { deleteMedia } = require("./Media");


const createFilm = async ({ name, content, score, poster, film, time, created, }) => {
  const newFilm = await Film.create({ name, content, imdb_score: score, poster, video: film, time, date: created });

  return newFilm;
};


const FilmsCount = async () => {
  const filmsCount = await Film.countDocuments();

  return filmsCount;
};


const getFilms = async (params) => {
  const filmsCount = await FilmsCount();

  const page = parseInt(params.page);
  const pageSize = parseInt(params.pageSize);
  const films = await Film.find({})
    .limit(pageSize)
    .skip(page === 1 ? 0 : (page - 1) * pageSize);
  console.log(films);
  return { films, count: filmsCount };
};


const updateFilm = async (params) => {
  const { filmId, poster, video, name, content, imdb_score, date, time } =
    params;

  const findFilm = await Film.findById(filmId);
  // مرحله اول : حذف فیلم ویا عکس فعلی و جایگزینی آن
  const pastFilm = findFilm.video;
  
  const pastPoster = findFilm.poster._id;

  if (pastFilm.toString() === video && pastPoster.toString() === poster) {
    const newFilm = await Film.findByIdAndUpdate(
      filmId,
      { name, content, imdb_score, date, time },
      { new: true }
    );
    // console.log(newFilm);
    return { newFilm, status: 200 };
  } else if (
    pastFilm.toString() === video &&
    pastPoster.toString() !== poster
  ) {
    const deletePoster = await deleteMedia(pastPoster);
    if (deletePoster._id) {
      const newFilm = await Film.findByIdAndUpdate(
        filmId,
        { poster, name, content, imdb_score, date, time },
        { new: true }
      );
      return { newFilm, status: 200 };
    } else {
      return { newFilm, status: 400, error: "عکس مورد نظر پاک نشد!" };
    }
  } else if (
    pastFilm.toString() !== video &&
    pastPoster.toString() === poster
  ) {
      
    const deleteVideo = await deleteMedia(pastFilm);
    if (deleteVideo._id) {
      const newFilm = await Film.findByIdAndUpdate(
        filmId,
        { video, name, content, imdb_score, date, time },
        { new: true }
      );
      return { newFilm, status: 200 };
    } else {
      return { newFilm, status: 400, error: "فیلم مورد نظر پاک نشد!" };
    }
  } else {
    const deleteVideo = await deleteMedia(pastFilm);
    const deletePoster = await deleteMedia(pastPoster);

    if (deletePoster._id && deleteVideo._id) {
      const newFilm = await Film.findByIdAndUpdate(
        filmId,
        { video, poster, name, content, imdb_score, date, time },
        { new: true }
      );
      return { newFilm, status: 200 };
    } else {
      return { newFilm, status: 400, error: "عکس ویا فیلم مورد نظر پاک نشد!" };
    }
  }
};


module.exports = {
  createFilm,
  FilmsCount,
  getFilms,
  updateFilm
};
