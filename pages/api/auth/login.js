import { UserAuthentication } from "../../../server/controller/Users";
import cookie from "cookie";
import { withIronSession } from "next-iron-session";


async function handler(req, res) {
  const { username, password } = req.body;

  const data = await UserAuthentication({ username, password });

  if (data.status === "SUCCESS") {
    // res.setHeader(
    //   "Set-Cookie",
    //   cookie.serialize("token", data.token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV !== "development",
    //     maxAge: 60 * 60 * 24 * 7,
    //     sameSite: "strict",
    //     path: "/"
    //   })
    // )

    req.session.set("token", data.token)
    await req.session.save();

    res.status(200).json(data);
  } else if (data.status === "ERROR") {
    res.status(400).json(data);
  }
}


export default withIronSession(handler, {
  password: "5L196mi27mGQmHEBMAiJYqtZ77u8AmqU",
  cookieName: "token",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "strict",
    path: "/"
  }
})