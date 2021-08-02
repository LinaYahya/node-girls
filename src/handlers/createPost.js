const fs = require("fs");
const path = require("path");
const queryString = require("querystring");

const createPostHandler = (req, res) => {
    let allData = "";
    req.setEncoding("utf8");

    req.on("data", (chunk) => {
        allData += chunk;
    });
    req.on("end", () => {
        const postsPath = path.join(__dirname, "..", "posts.json");
        console.log(allData);
        const { post } = queryString.parse(allData);

        fs.readFile(postsPath, (err, file) => {
            if (err) {
                res.writeHead(500);
                res.end("server error");
            } else {
                const myObj = JSON.parse(file);
                myObj[Date.now()] = post;
                console.log(myObj);
                fs.writeFile(postsPath, JSON.stringify(myObj), (err) => {
                    if (err) {
                        res.writeHead(500);
                        res.end("server error");
                    } else {
                        res.writeHead(302, { Location: "/" });
                        res.end();
                    }
                });
            }
        });
    });
};

module.exports = createPostHandler;
