import express, { Application, Request, Response } from 'express';
import cors from 'cors';


const app: Application = express();

app.use(express.json());
app.use(cors());



app.get('/', (req : Request, res :Response) => {

  res.json({
    message: 'Welcome to Thrive Shop',
  });
});





export default app;
