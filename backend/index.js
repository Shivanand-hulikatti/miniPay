const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const rootRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1',rootRouter);
app.listen(3000);