import { FilmsCount } from "../../../../server/controller/Film";
import { UsersCount } from "../../../../server/controller/Users";


export default async function handler(req, res){
    const usersCount = await UsersCount()
    const filmsCount = await FilmsCount()
    
    res.status(200).json({users:usersCount , films:filmsCount})
}