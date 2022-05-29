/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CreateUser } from "../../../server/controller/Users"

export default async (req, res) => {

  console.log(req.body)
  const { username, password, email } = req.body

  const data = await CreateUser({ username, password, email })
  if (data.status === "SUCCESS") {
    res.status(200).json(data)

  } else if (data.status === "ERROR") {
    res.status(400).json(data)
  }
}
