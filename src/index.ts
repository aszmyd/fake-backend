import { listeners } from './methods/listeners';

const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.options('*', cors());

const corsOptions = cors({
    origin: '*'
});

app.get('/listeners', corsOptions, (req, res) => {
    return res.send(listeners(req));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));