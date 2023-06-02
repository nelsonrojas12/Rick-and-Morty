const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(`${URL}${id}`);
    const character = response.data;

    if (character) {
      const { id, status, name, species, origin, image, gender } = character;
      res.json({ id, status, name, species, origin, image, gender });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharById };



