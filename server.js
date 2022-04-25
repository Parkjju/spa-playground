const express = require('express');
const path = require('path');

const app = express();

app.use(
    '/static',
    express.static(path.resolve(__dirname, 'frontend', 'static'))
);

// 어떤 경로든지
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(8080, () => console.log('Server running at http://localhost:8080'));
