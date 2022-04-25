const express = require('express');
const path = require('path');

const app = express();

// 어떤 경로든지
app.get('/*', (req, res) => {
    res.sendFile(path.resolve('frontend', 'index.html'));
});
