const { fraud, notFraud } = require("./../../db/Models");

function isFraud(data = []) {
  const rows = data.length;
  const columns = data[0].length;

  const diagonal = (i, j) => {
    let str = "";
    while (str.length < 4) {
      str += data[i][j];
      i++;
      j++;
    }
    return str;
  };
  const horizontal = (i, j) => data[i].slice(j, j + 4);

  const hasSameLetter = (str) => {
    for (let i = 1; i < 4; i++) {
      if (str[i] !== str[0]) return false;
    }
    return true;
  };

  for (let i in data) {
    for (let j in data[i]) {
      if (i + 4 <= rows && j + 4 <= columns) {
        if (hasSameLetter(diagonal(+i, +j))) return true;
      }
      if (j + 4 <= columns) {
        if (hasSameLetter(horizontal(+i, +j))) return true;
      }
    }
  }
  return false;
}
async function checkFraud(req, res) {
  const data = req.body.data || null;
  const transaction_id = req.body.transaction_id || null;
  if (data && transaction_id) {
    const f = isFraud(data);
    try {
      if (f) {
        await fraud.create({ transaction_id, data });
        res.end();
      } else {
        await notFraud.create({ transaction_id, data });
        res.status(403).end();
      }
    } catch (error) {
      res.status(400).end();
    }
  }
  else res.status(403).end(); 
}

module.exports = checkFraud;
