const User = require("../model/user");
const { hashPassword, verifyPassword } = require("../middleware/authentication");


const CreateUser = async ({ username, password, email }) => {
  const checkExistingUsername = await User.find({ username });
  const checkExistingEmail = await User.find({ email });

  if (checkExistingUsername.length > 0) {
    return { error: "نام کاربری وارد شده تکراری است!", status: "ERROR" };
  } else if (checkExistingEmail.length > 0) {
    return { error: "ایمیل وارد شده تکراری است!", status: "ERROR" }

  } else {
    const newPassword = await hashPassword(password)

    const values = { username, password: newPassword, email };

    try {
      const user = await User.create(values);
      const  { email , created} = checkExistingUsername || checkExistingEmail;
      const data = { username, email, created };
      return { data, status: "SUCCESS" };
    } catch (err) {
      throw err;
    }
  }
};


const UserAuthentication = async ({ username, password }) => {
  const checkExistingUser = await User.findOne({ username });

  if (!checkExistingUser) {
    return { error: "نام کاربری و یا رمز عبور وارد شده اشتباه است!", status: "ERROR" }
  } else {
    const hashPassword = checkExistingUser.password;
    const checkPassword = await verifyPassword(password, hashPassword);

    if (!checkPassword) {
      return {
        error: "نام کاربری ویا رمزعبور وارد شده اشتباه است.",
        status: "ERROR",
      };
    }else{
        const  { email , created} = checkExistingUser;
        const data = {username , email , created}
        return { data, status: "SUCCESS" };
    }
  }

}

module.exports = {
  CreateUser,
  UserAuthentication
};