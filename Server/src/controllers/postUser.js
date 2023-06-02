const User = require('../DB_connection').User;

const postUser = async(req, res)=> {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan datos");
  }

  try {
    const user = await User.findOrCreate({ where: { email }, defaults: { password } });
    return res.json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = postUser;