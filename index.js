const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Render!');
});

app.get('/api/data', (req, res) => {
    res.json({ success: true, data: ['item1', 'item2', 'item3'] });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});