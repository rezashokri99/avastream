import { createBanners } from "../../../../server/controller/Banner";
import { searchFilms } from "../../../../server/controller/Film";


export default async function handler(req, res){

    if(req.method ==="GET"){
        const search = req.query
        const result = await searchFilms(search)
        res.status(200).json(result)
    }else if(req.method ==="POST"){
        console.log(req.body)
        const {values} = req.body; 
    
        const banner = await createBanners(values)
    
        res.status(200).send("banner")
    }
}