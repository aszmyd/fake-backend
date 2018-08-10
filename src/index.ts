import { listeners } from './methods/listeners';

const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = cors({
    origin: '*'
});

app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/listeners', corsOptions, (req, res) => {
    return res.send(listeners(req));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));