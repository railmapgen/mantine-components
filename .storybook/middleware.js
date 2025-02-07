const infoJson = require('../info.json');

module.exports = app => {
    app.get('/iframe.html/info.json', (req, res) => {
        res.end(JSON.stringify(infoJson));
    });
};
