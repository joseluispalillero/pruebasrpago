const Fraud = require("./Fraud");
const NotFraud = require("./NotFraud");

class dbOperations {
  constructor(Model) {
    this.Model = Model;
  }
  create(data) {
    return new this.Model(data).save();
  }
  count() {
    return this.Model.countDocuments();
  }
  get(transaction_id, fields = "transaction_id data") {
    return this.Model.findOne({ transaction_id }, fields);
  }
  getAll(skip = 0, limit = 0, fields = "transaction_id") {
    return this.Model.find({}, fields).skip(skip).limit(limit);
  }
}

module.exports = {
  fraud: new dbOperations(Fraud),
  notFraud: new dbOperations(NotFraud),
};
