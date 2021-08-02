const fs = require("fs");
const path = require("path");

const homeHandler = (req, res) => {
    const filePath = path.join(__dirname, "..", "..", "public", "index.html");
    fs.readFile(filePath, (error, file) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>failed</h1>");
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(file);
        }
    });
};

module.exports = homeHandler;
