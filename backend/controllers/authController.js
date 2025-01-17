const { getDB } = require('../config/db');

async function login(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const db = getDB();
    const guest = await db.collection('guests').findOne({ name });

    if (!guest) {
      return res.status(401).json({ error: 'Name not found' });
    }

    return res.json({ message: 'Login successful', guest });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { login };