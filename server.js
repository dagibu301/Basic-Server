const http = require('http');

const server = http.createServer((request, response) => {
    console.log('Method: ', request.method);
    console.log('Url: ', request.url);
    const user = {
        name: 'John',
        lastName: 'Doe'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
});

server.listen(3000);