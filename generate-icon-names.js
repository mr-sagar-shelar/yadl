const fs = require("fs");
const readline = require("readline");

const input_path = "./assets/svgIcons/skill-icons/index.ts";
const output_path = "./assets/utils/IconNames.ts";

const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

const inputStream = fs.createReadStream(input_path);
const outputStream = fs.createWriteStream(output_path, { encoding: "utf8" });
var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});
outputStream.write("export const IconNames = {\n")
lineReader.on("line", function (line) {
  let componentName = line.substring(20);
  componentName = componentName.substring(0, componentName.indexOf("}") - 1);
  const fullComponentName = `"${toKebabCase(componentName)}": "${componentName}",`
  outputStream.write(fullComponentName + "\n");
});
lineReader.on("close", function () {
  outputStream.write("};\n")
})
