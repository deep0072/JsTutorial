// nodemon is kind of like live server we use of front end. it shows the all changes that is done in backend side

const http = require("http");

// to create server ==> method    "create server" is used

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // it is like  urls.py in django
    res.write("hello, this is the http server"); // it is the response when someonehit on localhost:3000/
    res.end(); // now end the server reponse otherwise it keeps on listening
  }
  if (req.url === "/deepak/techstacks") {
    // it is like  urls.py in django
    res.write(JSON.stringify(["python", "Django", "js", "solidity"])); // it is the response when someonehit on localhost:3000/
    res.end(); // now end the server reponse otherwise it keeps on listening
  }
});

server.listen(3000);
console.log("listening....");
