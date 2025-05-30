import cors from 'cors';
import express, { Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit';
import session from 'express-session';
import helmet from 'helmet';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { addition } from '../utils/addition';
import { logger } from '../utils/logger';

if (!process.env.SECRET) {
  throw new Error('SECRET environment variable is required');
}

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
    secret: process.env.SECRET,
    name: 'sessionId',
    cookie: {
      secure: process.env.ENVIRONMENT !== 'dev',
      httpOnly: true
    }
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
    res.status(400).json({ message: validationError.message });
  }

  const { value } = req.body;

  const result = await addition(value);

  res.json({
    response: result
  });
});

export default server;
