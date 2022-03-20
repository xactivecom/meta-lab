import * as express from 'express';
import wsRouter from './lib/meta-server-ws';

const wsRoutes = express.Router();
wsRoutes.use('/meta', wsRouter);

export default wsRoutes;
