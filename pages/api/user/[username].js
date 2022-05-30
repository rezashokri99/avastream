import { getUserData } from "../../../server/controller/Users"

export default async function handler (req, res) {
    
    const { username } = req.query;
    const user = await getUserData({username})

    res.status(200).json(user)
}
