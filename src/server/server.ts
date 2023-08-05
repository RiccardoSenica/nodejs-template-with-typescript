import * as bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { Validator } from 'jsonschema';
import { addition } from '../utils/addition';
import { logger } from '../utils/logger';

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());
server.use(helmet());

const validator = new Validator();
const schema = {
  id: '/PostRequest',
  type: 'object',
  properties: {
    value: { type: 'number' }
  },
  required: ['value']
};

server.post('/', async (req: Request, res: Response) => {
  logger.info(`POST / with ${JSON.stringify(req.body)}`);
  if (!validator.validate(req.body, schema).valid) {
    return res.status(400).json({ message: 'Malformed query parameters' });
  }

  const { value } = req.body;

  const result = await addition(value);

  return res.json({
    response: result
  });
});

export default server;
