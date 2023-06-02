const User = require('../DB_connection').User


const login = async (req, res) => {
    const [username, password] = req.query

    if (!username || !password) {
        return res.status(400).send('Faltan datos')
    }

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('Usuario no encontrado')
        }

        if (user.password !== password) {
            return res.status(403).send('Contraseña incorrecta')
        }
        return res.status(200).json({ access: true });
    } catch (error) {
        return res.status(500).send(`Error: ${error.message}`);
    }

}




module.exports = login;