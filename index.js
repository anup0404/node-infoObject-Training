const http = require("http");
const fs = require("fs");

require("dotenv").config();


const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    let data = [];

    req.on("data", (chunkdata) => {
      data.push(chunkdata);
    });

    req.on("end", () => {
      const resData = Buffer.concat(data).toString();
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(resData);
     
      try {
        let fileName=/filename="([^"]+)"/.exec(resData.split('\n')[1].trim())[1]
        console.log('Extracted filename:', fileName);
       
        fs.writeFile(`${__dirname}/${fileName}`, resData, (err) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error saving file');
            return;
          }
          console.log("Data successfully uploaded.");
        });
      } catch (error) {
        console.error('Error extracting filename:', error.message);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(process.env.PORT, "127.0.0.1", () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

function extractFilename(data) {
  // Example logic to extract filename from content-disposition header
  const contentDisposition = req.headers['content-disposition'];
  if (contentDisposition && contentDisposition.includes('filename=')) {
    const filenameRegex = /filename="([^"]+)"/;
    const matches = filenameRegex.exec(contentDisposition);
    if (matches && matches.length > 1) {
      return matches[1];
    }
  }
  throw new Error('Filename not found in content-disposition header');
}
