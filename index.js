const express = require('express');
const app = express();
const port = 8080;


app.use('/', express.static('src/home'));
app.use('/aboutme', express.static('src/aboutme'));
app.use('/ricknmorty', express.static('src/ricknmorty'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
