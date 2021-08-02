const path = require("path");
const fs = require("fs");

const postsHandler = (req, res) => {
    const postsPath = path.join(__dirname, "..", "posts.json");
    fs.readFile(postsPath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("server error");
        } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            console.log(data);
            res.end(data);
        }
    });
};

module.exports = postsHandler;
