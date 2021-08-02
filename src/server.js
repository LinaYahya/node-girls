const http = require("http");
const router = require("./router");

const PORT = 4000;

const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`here http://localhost:${PORT}`);
});
