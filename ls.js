const fs = require("fs");

module.exports = () => {
  fs.readdir("./", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data.join("\n"));
    }
  });
};
