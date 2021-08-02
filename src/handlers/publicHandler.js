const fs = require("fs");
const path = require("path");

const mimeType = {
    html: "text/html",
    css: "text/css",
    jpg: "image/jpg",
    js: "text/javascript",
    json: "application/json",
    png: "image/png",
    ico: "image/x-icon",
};

const publicHandler = (req, res) => {
    const file = req.url.split("/public")[1];
    const filePath = path.join(__dirname, "..", "..", "public", file);
    const ext = filePath.split(".")[1];
    console.log("includes", filePath);
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500);
            res.end("<h1>sth went wrong</h1>");
            return;
        }
        res.writeHead(200, {
            "Content-Type": mimeType[ext],
        });
        res.end(file);
    });
};

module.exports = publicHandler;
