import { deleteFilm, updateFilm } from "../../../../server/controller/Film";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const film = await updateFilm(req.body.values);
    if (film.status === 200) {
      res.status(200).json(film.newFilm);
    } else if (film.status === 400) {
      res.status(400).json(film.error);
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const deleteProccess = await deleteFilm(id);
    if (deleteProccess.status === 200) {
      res.status(200).json(deleteProccess);
    } else if (deleteProccess.status === 400) {
      res.status(400).json(deleteProccess.error);
    }
  } else {
    res.status(404).send("مسیر مورد نظر یافت نشد!");
  }
}
