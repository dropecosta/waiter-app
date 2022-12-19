import express from 'express';

const app = express();

const port = 3002;
app.listen(port, () => {
    console.log(`Server listening on localhost http://localhost:${port}`);
});
