import { createFilm } from "../../../../server/controller/Film";


export default async function handler(req, res) {
    
    console.log(req.body);
    const film = await createFilm(req.body.values)

    res.status(200).json(film)
}