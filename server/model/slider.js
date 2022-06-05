const mongoose = require("mongoose");

const { Schema } = mongoose;

const sliderSchema = new Schema({
  film: { type: Schema.Types.ObjectId, ref: "Film" },
  banner: { type: Schema.Types.ObjectId, ref: "Media" },
  created: { type: Date, default: Date.now, required: true },
  show: { type: Boolean, default: false, required: true },
});
sliderSchema.set("toJSON", { gettes: true });
sliderSchema.options.toJSON.transform = (doc, ret) => {
  const obj = { ...ret };

  delete obj.__v;
  return obj;
};
filmSchema.pre(/^find/, function () {
  this.populate("film");
  
});
module.exports =
  mongoose.models.Slider || mongoose.model("Slider", sliderSchema);
