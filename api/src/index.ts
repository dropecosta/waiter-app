import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3002;

        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`Server listening on localhost http://localhost:${port}`);
        });

    })
    .catch(() => console.log('error connecting to MongoDB'));

