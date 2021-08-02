const querystring = require("querystring");

const {
    homeHandler,
    publicHandler,
    createPostHandler,
    postsHandler,
} = require("./handlers");

const router = (req, res) => {
    if (req.url === "/") {
        homeHandler(req, res);
    } else if (req.url.includes("public")) {
        publicHandler(req, res);
    } else if (req.url === "/create-post") {
        createPostHandler(req, res);
    } else if (req.url === "/posts") {
        postsHandler(req, res);
    } else {
        console.log("error:");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>not found</h1>");
    }
};

module.exports = router;
