const mongoose = require("mongoose");
const { Schema } = mongoose;
const shortId = require("shortid");

const shortUrlSchema = new Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortId.generate },
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

module.exports = shortUrl;
