const http         = require('http');
const express      = require('express');
const widgetRouter = require('./routers/widgets');

const app        = express();
const server     = http.createServer(app);
const bodyParser = require('body-parser');

app.use('/api', bodyParser.json());
app.use('/api', widgetRouter);

// app.post('api/widgets', function (req, res) {});

server.listen(3000, function () {
    console.log('rest service running on port 3000... or is it???');
});
