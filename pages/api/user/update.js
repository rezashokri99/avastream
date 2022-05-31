import { putUserData } from "../../../server/controller/Users";


export default async function handler(req, res) {
    const { values } = req.body;
    const { username, password, past_password } = values;
    
    const data = await putUserData({username, password, past_password});

    if (data.status === "SUCCESS") {
        res.status(200).json(data);
    } else {
        res.status(400).json(data);
    }

}