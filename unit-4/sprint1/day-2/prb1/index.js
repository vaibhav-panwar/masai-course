const { log } = require("console");
const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case 'read':
    fs.readFile(`./${file}`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(data);
      }
    })
    break;
  case 'append':
    fs.appendFile(`${file}`, `\n${content}`, (err) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(`Content appended to the file '${file}'`);
      }
    })
    break;
  case 'rename':
    fs.rename(`${file}`, `${content}`, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(`File '${file}' renamed to '${content}'`);
      }
    })
    break;
  case 'create':
    fs.writeFile(`${file}`, "", (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(`File '${file}' created`);
      }
    })
    break;
  case 'delete':
    fs.unlink(`${file}`, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(`File '${file}' deleted`);
      }
    })
    break;
  case 'list':
    const directoryPath = file || '.';
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error(`Error listing directory ${directoryPath}: ${err}`);
      } else {
        console.log(`Files in directory '${directoryPath}':`);
        console.log(files.join('\n'));
      }
    });
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
