const express = require('express');
require('./db/conn')
const app = express();
const olympicRouter = require('./routers/olympicRouter');
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(olympicRouter);


app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})