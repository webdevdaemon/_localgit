import express from 'express'

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('express server is listening on port', port)
});
