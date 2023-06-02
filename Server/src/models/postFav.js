const Favorite = require('../DB_connection').Favorite;

const postFav = async(req, res) =>{
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send("Faltan datos");
  }

  try {
    await Favorite.create({
      name,
      origin,
      status,
      image,
      species,
      gender
    });

    const favorites = await Favorite.findAll();
    return res.json(favorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = postFav;
