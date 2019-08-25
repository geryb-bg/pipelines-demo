'use strict';

let restify = require('restify');

let serverPort = process.env.PORT || 3001;

function getSomeData(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  let data = ['value 1', 'value 2', 'value 3'];
  res.json(data);

  return next();
}

let server = restify.createServer({
  name: 'Pipelines API',
  version: '1.0.0'
});

server.get('/api/data', getSomeData);

server.listen(serverPort, function() {
  console.log(`${server.name} server is listening at ${server.url}`);
});
