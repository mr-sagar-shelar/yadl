const fs = require("fs");
const path = require("path");

let allIcons = [];
let allIndexPaths = "";

const getIndexFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getIndexFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file === "index.ts") {
        const filePath = path.join(__dirname, dirPath, "/", file);
        // console.log(filePath);
        // console.log(`export * from './${path.join(dirPath, "/", file).substring(16)}';`);
        allIndexPaths = `${allIndexPaths}\nexport * from './${path.join(dirPath, "/", file).substring(16)}';`;
        arrayOfFiles.push(filePath);
      }
    }
  });
  return arrayOfFiles;
};


const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

const indexFilePaths = getIndexFiles("./assets/svgIcons");
// console.log(`AllPaths = ${allIndexPaths}`);

const indexOutputStream = fs.createWriteStream("./assets/svgIcons/index.ts", { encoding: "utf8" });
indexOutputStream.write(allIndexPaths)
indexOutputStream.write("\n");

// console.log(indexFilePaths);
indexFilePaths.map((filePath) => {
  var lines = fs.readFileSync(filePath, "utf-8").split("\n").filter(Boolean);
  allIcons = allIcons.concat(lines);
});
// console.log(allIcons);

const outputStream = fs.createWriteStream("./assets/utils/IconNames.ts", { encoding: "utf8" });
outputStream.write("export const IconNames = {\n")
allIcons.map((iconPath) => {
  let componentName = iconPath.substring(20);
  componentName = componentName.substring(0, componentName.indexOf("}") - 1);
  const fullComponentName = `"${toKebabCase(componentName)}": "${componentName}",`;
  // console.log(fullComponentName);
  outputStream.write(fullComponentName + "\n");
});
outputStream.write("};\n");


// const input_path = "./assets/svgIcons/skill-icons/index.ts";
// const output_path = "./assets/utils/IconNames.ts";

// const toKebabCase = (str) =>
//   str &&
//   str
//     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//     .map((x) => x.toLowerCase())
//     .join("-");

// const inputStream = fs.createReadStream(input_path);
// const outputStream = fs.createWriteStream(output_path, { encoding: "utf8" });
// var lineReader = readline.createInterface({
//   input: inputStream,
//   terminal: false,
// });
// outputStream.write("export const IconNames = {\n")
// lineReader.on("line", function (line) {
//   let componentName = line.substring(20);
//   componentName = componentName.substring(0, componentName.indexOf("}") - 1);
//   const fullComponentName = `"${toKebabCase(componentName)}": "${componentName}",`
//   outputStream.write(fullComponentName + "\n");
// });
// lineReader.on("close", function () {
//   outputStream.write("};\n")
// })
