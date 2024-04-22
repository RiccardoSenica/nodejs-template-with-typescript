import cors from 'cors';
import express, { Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit';
import session from 'express-session';
import helmet from 'helmet';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { addition } from '../utils/addition';
import { logger } from '../utils/logger';

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  standardHeaders: 'draft-7',
  legacyHeaders: false
});

const server = express();
server.use(cors());
server.use(helmet());
server.disable('x-powered-by');
server.set('trust proxy', 1);
server.use(
  session({
    secret: 's3Cur3',
    name: 'sessionId'
  })
);
server.use(limiter);
server.use(express.json());

const schema = z.object({
  value: z.number()
});

server.post('/', async (req: Request, res: Response) => {
  logger.info(`POST / with ${JSON.stringify(req.body)}`);

  try {
    schema.parse(req.body);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validationError = fromZodError(err as any);
    return res.status(400).json({ message: validationError.message });
  }

  const { value } = req.body;

  const result = await addition(value);

  return res.json({
    response: result
  });
});

export default server;
