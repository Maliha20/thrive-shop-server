import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { authRoutes } from './app/modules/auth/auth.routes';
import { userRoutes } from './app/modules/user/user.route';
import router from './app/routes';


const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);


app.get('/', (req : Request, res :Response) => {

  res.json({
    message: 'Welcome to Thrive Shop',
  });
});





export default app;
