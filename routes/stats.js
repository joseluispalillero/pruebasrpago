const { fraud, notFraud } = require("../db/Models");

async function getStats(req, res) {
  try {
    const count_fraud = await fraud.count();
    const count_not_fraud = await notFraud.count();
    res.json({
      count_fraud,
      count_not_fraud,
      ratio: count_fraud / (count_fraud + count_not_fraud),
    });
  } catch (error) {
    res.status(400).end();
  }
}

module.exports = getStats;
