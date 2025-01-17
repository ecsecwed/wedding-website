const { getDB } = require("../config/db");

async function submitRSVP(req, res) {
  const { name, attending, plusOne, mealPreference } = req.body;

  if (!name || attending === undefined) {
    return res
      .status(400)
      .json({ error: "Name and attendance status are required" });
  }

  try {
    const db = getDB();
    await db.collection("rsvps").insertOne({
      name,
      attending,
      plusOne: !!plusOne,
      mealPreference: mealPreference || null,
      createdAt: new Date(),
    });

    return res.json({ message: "RSVP submitted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}

module.exports = { submitRSVP };
