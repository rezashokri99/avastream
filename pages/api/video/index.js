import { getVideo } from "../../../server/controller/Film"


export default async function handler(req, res){
    if(req.method === "GET"){
        const video = await getVideo(req.query)
        
        res.status(200).json(video)
    }
}