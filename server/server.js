const fs = require("fs");

// Config server
const http = require("http");
const host = "localhost";
const port = 8000;

let dataApi;

// Read file containing API data and set data
fs.readFile("./data.json", (err, data) => {
  if (err) {
    console.error(err); // Log error to console
    process.exit(1); // Exit the process with error code
  }
  dataApi = JSON.parse(data);
});

// Request
const requestListener = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Set CORS header
  res.writeHead(200);
  res.end(JSON.stringify(dataApi));
};

// Server
const server = http.createServer(requestListener);

// Run server
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});