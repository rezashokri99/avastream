import { UsersCount } from "../../../../server/controller/Users";


export default async function handler(req, res){
    const usersCount = await UsersCount()
    
    // TODO: filmsCount

    res.status(200).json({users:usersCount})
}