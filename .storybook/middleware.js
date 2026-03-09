import infoJson from '../info.json' with { type: 'json' };

export default app => {
    app.get('/iframe.html/info.json', (req, res) => {
        res.end(JSON.stringify(infoJson));
    });
};
