const mike = "hello";
const { pwd, prompt } = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

console.log(mike);

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const entry = data.toString().trim();
  const [command] = entry.split(" ");
  switch (command) {
    case "pwd":
      console.log("YOUR LIST OF FILES IN YOUR CWD IS---->", pwd);
      process.stdout.write("prompt >");
      break;
    case "ls":
      console.log("YOUR LIST OF FILES IN YOUR CWD IS---->", ls());
    default:
      console.log("THAT ISNT AN OPTION!!!!!(VALID OPTIONS ARE: 'PWD' OR 'LS')");
  }
  //   console.log("YOUR LIST OF FILES IN YOUR CWD IS---->", ls());
});
