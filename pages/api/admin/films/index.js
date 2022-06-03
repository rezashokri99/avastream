import { getFilms } from "../../../../server/controller/Film";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const films = await getFilms(req.query);
    res.status(200).json(films);
  }
}
