import * as bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import { Validator } from 'jsonschema';
import { addition } from '../utils/addition';

const server = express();
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

const validator = new Validator();
const schema = {
  id: '/PostRequest',
  type: 'object',
  properties: {
    value: { type: 'number' }
  },
  required: ['value']
};

server.post('/', (req: Request, res: Response) => {
  if (!validator.validate(req.body, schema).valid) {
    return res.status(400).json({ message: 'Malformed query parameters' });
  }

  return res.json({
    response: addition(parseInt(req.body.value))
  });
});

export default server;
