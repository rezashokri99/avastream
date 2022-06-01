import { getUsers } from "../../../../server/controller/Users";


export default async function handler(req, res) {
    const users = await getUsers()

    res.status(200).json(users)
}