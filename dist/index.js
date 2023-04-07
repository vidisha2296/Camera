import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import camera from './routes/cameraRoute.js';
import cameraNetwork from './routes/cameraNetworkRoute.js';
import { ConnDB } from './config/database.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
ConnDB();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use(`/api/v1/camera`, camera);
app.use(`/api/v1/cameraNetwork`, cameraNetwork);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map