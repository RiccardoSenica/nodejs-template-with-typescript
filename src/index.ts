import express, { Request, Response } from 'express';
import { formatResponse } from './call/call';

const app = express();

app.get('/', (req: Request, res: Response) => {
  if (!req.query.string) {
    return res.status(400).send('Missing query parameter: str');
  }

  return res.send(formatResponse(req.query.string as string));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
