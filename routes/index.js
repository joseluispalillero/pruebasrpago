module.exports = {
  frauds: {
    check: require("./frauds/check"),
    getById: require("./frauds/id"),
    getAll: require("./frauds/index"),
  },
  stats: require("./stats"),
};
