// pages/api/user.js

import { withIronSession } from "next-iron-session";

function handler(req, res, session) {
    req.session.destroy();
    res.send("Logout");
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
});