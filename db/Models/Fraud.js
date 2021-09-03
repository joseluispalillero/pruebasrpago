const mongoose = require("mongoose");

const fraudSchema = new mongoose.Schema(
  {
    data: [String],
    transaction_id: String,
  },
  {
    collection: "frauds",
  }
);

module.exports = mongoose.model("Fraud", fraudSchema);
