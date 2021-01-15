const mike = "hello";
const { pwd } = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

console.log(mike);

process.stdout.write("prompt >");

process.stdin.on("data", (data, fileName) => {
  console.log("YOUR LIST OF FILES IN YOUR CWD IS---->", pwd);
  console.log("YOUR LIST OF FILES IN YOUR CWD IS---->", ls());
});
