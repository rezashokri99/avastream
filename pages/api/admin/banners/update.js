import { deleteBanner, updateBanner } from "../../../../server/controller/Banner"


export default async function handler(req, res){
    if (req.method === "PUT") {
        const banner = await updateBanner(req.body.values);
        if (banner.status === 200) {
          res.status(200).json(banner.data);
        } else if (banner.status === 400) {
          res.status(400).json(banner.message);
        }
      } else if (req.method === "DELETE") {
        const banner = await deleteBanner(req.query);
    
        if (banner.status === 200) {
          res.status(200).json(banner.data);
        } else if (banner.status === 400) {
          res.status(400).json(banner.message);
        }
      }

}