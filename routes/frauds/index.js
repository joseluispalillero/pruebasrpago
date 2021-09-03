const { fraud } = require("../../db/Models");

async function getAllFrauds(req, res) {
  const page = +req.query.page || 1;
  const size = +req.query.size || 0;
  try {
    const docs = await fraud.getAll((page - 1) * size, size);
    const transaction_ids = await docs.map((doc) => doc.transaction_id);
    res.json({ transaction_ids });
  } catch (error) {
    res.status(400).end();
  }
}

module.exports = getAllFrauds;
