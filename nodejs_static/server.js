var connect = require('connect');
connect.createServer(
    connect.static('/Users/Manuel/documents/nodejs/static')
).listen(8080);