const User = require("../model/user");
const { hashPassword } = require("../middleware/authentication");


const CreateUser = async ({ username, password, email }) => {
  const checkExistingUsername = await User.find({ username });
  const checkExistingEmail = await User.find({ email });
    
  if (checkExistingUsername.length > 0) {
    return { error: "نام کاربری وارد شده تکراری است!", status: "ERROR" };
  } else if (checkExistingEmail.length > 0) {
    return { error: "ایمیل وارد شده تکراری است!", status: "ERROR" }

  } else {
    const newPassword = await hashPassword(password)

    const values = { username, password:newPassword, email };

    try {
      const user = await User.create(values);
      return {data:user , status:"SUCCESS"};
    } catch (err) {
      throw err;
    }
  }
};

module.exports = {
  CreateUser,
};