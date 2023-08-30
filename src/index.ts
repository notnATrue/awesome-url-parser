import express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import sliceRoute from './routes/slice.route';
import concatRoute from './routes/concat.route';

export const app = express();
dotenv.config();

app.use(bodyParser.json());

app.post('/url/slice', sliceRoute);
app.post('/url/concat', concatRoute);

app.listen(process.env.PORT);

export default app;
