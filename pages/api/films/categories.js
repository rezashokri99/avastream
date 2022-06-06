import { searchFilms } from "../../../server/controller/Film";


export default async function handler(req, res){
    if(req.method === "GET"){
        const findFilms = await searchFilms(req.query)

        res.status(200).json(findFilms)
    }
}