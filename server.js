const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const port = 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});