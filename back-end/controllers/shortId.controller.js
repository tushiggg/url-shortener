const { ShortUrl } = require("../models");

const createShortUrl = async (req, res) => {
  const Url = req.body.url;
  const newShortUrl = new ShortUrl({
    url: Url,
  });
  await newShortUrl.save();

  res.redirect("/");
};

const getShortUrl = async (req, res) => {
  const id = req.params.id;

  const rec = await ShortUrl.findOne({shortUrl: id});

  if (!rec) return res.sendStatus(404);

  await rec.save();
   
  res.redirect(rec.url);
};

const getShortUrls = async (req, res) => { 
    const Data = await ShortUrl.find({});
    res.send(Data);
}

module.exports = { 
    createShortUrl,
    getShortUrl,
    getShortUrls
};
