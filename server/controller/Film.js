const Film = require("../model/film");
const { deleteMedia } = require("./Media");


const createFilm = async ({ name, content, score, poster, film, time, created, category }) => {
  const newFilm = await Film.create({ name, content, imdb_score: score, poster, video: film, time, date: created, category });

  console.log(newFilm);

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
  const { filmId, poster, video, name, content, imdb_score, date, time, category } =
    params;

  const findFilm = await Film.findById(filmId);
  // مرحله اول : حذف فیلم ویا عکس فعلی و جایگزینی آن
  const pastFilm = findFilm.video;

  const pastPoster = findFilm.poster._id;

  if (pastFilm.toString() === video && pastPoster.toString() === poster) {
    const newFilm = await Film.findByIdAndUpdate(
      filmId,
      { name, content, imdb_score, date, time, category },
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
        { poster, name, content, imdb_score, date, time, category },
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
        { video, name, content, imdb_score, date, time, category },
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
        { video, poster, name, content, imdb_score, date, time, category },
        { new: true }
      );
      return { newFilm, status: 200 };
    } else {
      return { newFilm, status: 400, error: "عکس ویا فیلم مورد نظر پاک نشد!" };
    }
  }
};


const deleteFilm = async (id) => {
  const film = await Film.findById(id)
  const deletedPoster = await deleteMedia(film.poster._id)
  const deletedVideo = await deleteMedia(film.video)
  const deletedFilm = await Film.findByIdAndDelete(id)
  if (deletedPoster._id && deletedVideo._id && deletedFilm._id) {
    return { deletedFilm, deletedPoster, deletedVideo, status: 200 }
  } else if (!deletedPoster._id || !deletedVideo._id || !deletedFilm._id) {
    return { deletedFilm, deletedPoster, deletedVideo, status: 400, error: "فرآیند حذف بطور کامل صورت نگرفت!" }
  } else {
    return { deletedFilm, deletedPoster, deletedVideo, status: 200 }
  }
}


const getSliders = async () => {
  const popular_slider = await Film.find({}).sort("-score").limit(10)
  // const popular_slider = await Film.find({} , null , {sort:{score:-1}})

  const topTen_slider = await Film.find({}).sort("-imdb_score").limit(10);

  const featured_slider = await Film.find({}).sort("-imdb_score").limit(6);
  const movies_slider = await Film.find({}).sort("-imdb_score").limit(6);
  const series_slider = await Film.find({}).sort("-imdb_score").limit(6);

  // const old_slider = await Film.find({}).sort("date").limit(10)
  // old:old_slider
  return { popular: popular_slider, topTen: topTen_slider, featured: featured_slider, movies: movies_slider, series: series_slider }
}




const searchFilms = async ({ text, type, }) => {

  if (type === "search") {
    const search = await Film.aggregate([
      { "$match": { "name": { "$regex": text, "$options": "i" } } },
      { "$project": { "name": 1, "_id": 1 } }
    ]);
    return search;

  } else if (type === "categories") {
    const search = await Film.aggregate([
      { $match: { category: text } },
      { $project: { name: 1, _id: 1, poster: 1, category: 1 } },
      {
        $lookup: {
          from: "media",
          localField: "poster",
          foreignField: "_id",
          as: "poster",
        },
      },
    ]);

    return search;
  }

};


module.exports = {
  createFilm,
  FilmsCount,
  getFilms,
  updateFilm,
  deleteFilm,
  getSliders,
  searchFilms
};
