const Media = require("../model/media");
const fs = require("fs");
const path = require("path");

const createMedia = async (req, res, next) => {
  const medias = req.files;
  try {
    const response =await medias.reduce(
      async (memo, { fieldName, originalname, mimetype, filename, size }) => {
        // const author = req.user.id;
        const beforeResults = await memo;

        const obj = {
          alt: originalname,
          size,
          name: filename,
          media: {
            data: fs.readFileSync(
              path.resolve(__dirname, `../../uploads/${filename}`)
            ),
            contentType: mimetype,
          },
        };
        console.log(obj);
        const newMedia = await Media.create(obj);
        console.log(newMedia);
        fs.unlinkSync(path.resolve(__dirname, `../../uploads/${filename}`));
        return [...beforeResults, newMedia];
      },
      []
    );

    res.status(200).json(response);
  } catch (err) {
      next(err)
  }
};

module.exports = {
  createMedia,
};
