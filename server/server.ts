import express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Lunch Proposals App Server Test...');
});

var server = app.listen(port,() => {

    let host = server.address().address
    let port = server.address().port

    console.log("Server running at http://%s:%s", host, port)

});