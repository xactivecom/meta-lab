import * as express from 'express';
import * as cors from 'cors';

import wsRoutes from '@meta-lab/meta-server-ws';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(wsRoutes);

app.get('/health', (req, res) => {
  res.send({ status: 'OK' });
});

// TODO: initialize server

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
