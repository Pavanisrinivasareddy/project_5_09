const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let reqUrl = request.url;

    if (reqUrl === '/' || reqUrl.toLowerCase() === '/Login') {
        // Define the path to the login HTML file
        

        // Read the login HTML file and send it as the response
        fs.readFile(`./templates/login.html`, 'utf8', (err, data) => {
            if (err) {
                // If there is an error reading the file, send a 500 error
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('Error loading the login page.');
            } else {
                // Send the HTML file content as the response
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    } else {
        // Handle other routes with a 404 page
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Page not found');
    }
});






server.listen(9000, '127.0.0.1', () => {
    console.log('Server has started');
});