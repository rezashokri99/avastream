import { UserAuthentication } from "../../../server/controller/Users";

export default async function handler(req, res) {
  const { username, password } = req.body;

  const data = await UserAuthentication({ username, password });
   
  if (data.status === "SUCCESS") {
    res.status(200).json(data);
  } else if (data.status === "ERROR") {
    res.status(400).json(data);
  }
}
