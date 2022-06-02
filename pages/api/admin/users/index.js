import { getUsers } from "../../../../server/controller/Users";


export default async function handler(req, res) {
    const users = await getUsers(req.query)

    res.status(200).json(users)
}