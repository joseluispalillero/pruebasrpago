const mongoose = require("mongoose");

const notFraudSchema = new mongoose.Schema(
  {
    data: [String],
    transaction_id: String,
  },
  {
    collection: "not_frauds",
  }
);

module.exports = mongoose.model("NotFraud", notFraudSchema);
