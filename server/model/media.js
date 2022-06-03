const mongoose = require("mongoose");

const { Schema } = mongoose;

const mediaSchema = new Schema({
  alt: String,
  name: { type: String, required: true },
  size: { type: Number, required: true },
  media: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
  },
  created: {type:Date ,  default: Date.now , required:true}
});
mediaSchema.set("toJSON", { gettes: true });
mediaSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };
  delete obj.__v;
  return obj;
};
module.exports = mongoose.models.Media || mongoose.model("Media", mediaSchema);