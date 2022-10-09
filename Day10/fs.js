// file system module
// used for reading, writing the files also do modification inside the files

//----------------------------------------------------------------------------------------------

// reading text files ==>
const fs = require("fs"); // importing default module to read the file
const path = require("path");
fs.readFile("dem.txt", "utf-8", (err, data) => {
  if (err) {
    throw err.name;
  } else {
    console.log(data); // to string convert data to human readable or we can use utf-8 in as param
  }
});

//------------------------------------------------------

// write into file .writeFile() method
fs.writeFile("write.txt", "hello there! \n how are you", (err) => {
  console.log("success full written");
  if (err) {
    throw err.name;
  }
});
console.log(__dirname, "hmmmm");
