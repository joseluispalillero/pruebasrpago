const { fraud } = require("../../db/Models");

async function getFraudById(req, res) {
  const transaction_id = req.params.id || null;
  if (transaction_id) {
    try {
      const doc = await fraud.get(transaction_id);
      res.json(doc._doc);
    } catch (error) {
      res.status(404).end();
    }
  } else res.status(404).end();
}

module.exports = getFraudById;
