const User = require("../model/user");
const { hashPassword, verifyPassword, createToken } = require("../middleware/authentication");


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
      const { email, created, role, sub, sub_time, profilePhoto } = user;
      // const { email, created, role, sub, sub_time, profilePhoto } = checkExistingUsername || checkExistingEmail;
      const data = { username, email, created, role, sub, sub_time, profilePhoto };
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
    } else {
      const { email, created, role, sub, sub_time, profilePhoto } = checkExistingUser;
      const token = createToken({ username, password, email, created })

      const user = { username, email, created, role, sub, sub_time, profilePhoto }
      return { token, user, status: "SUCCESS" };
    }
  }

}


const getUserData = async ({ username }) => {
  const checkExistingUser = await User.findOne({ username });
  const { email, created, role, sub, sub_time, profilePhoto } = checkExistingUser
  return { username, email, created, role, sub, sub_time, profilePhoto }
}


const putUserData = async ({ username, password, past_password }) => {

  const findUser = await User.findOne({ username });
  if (password) {
    const checkPassword = await verifyPassword(
      past_password,
      findUser.password
    );
    if (checkPassword === true) {
      const newPassword = await hashPassword(password);
      const value = { password: newPassword };
      const user = await User.findByIdAndUpdate(
        findUser._id,
        { ...value },
        { new: true }
      );
      const userData = {
        email: user.email,
        username: username,
        profilePhoto: user.profilePhoto,
        sub: user.sub,
        sub_time: user.sub_time,
        role: user.role,
        created: user.created,
      };
      return { user: userData, status: "SUCCESS" };
    } else {
      return { error: "رمز عبور وارد شده مطابقت ندارد!", status: "ERROR" };
    }
  } else {
    return { error: "رمز عبور  به صورت صحیح وارد کنید!", status: "ERROR" };
  }

}


const UsersCount = async () => {
  const usersCount = await User.countDocuments()

  return usersCount
}


const getUsers = async () => {
  const users = await User.find({})

  return users
}



module.exports = {
  CreateUser,
  UserAuthentication,
  getUserData,
  putUserData,
  UsersCount,
  getUsers
};