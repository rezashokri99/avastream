import { getFilm } from "../../../server/controller/Film"


export default async function handler(req, res){
    if(req.method === "GET"){
        const film = await getFilm(req.query)
        
        res.status(200).json(film)
    }
}