const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const userInput = query.name;
  
  // Уязвимость: eval с пользовательским вводом
  eval(userInput);
  
  res.end('Hello ' + userInput);
});

server.listen(3000);
