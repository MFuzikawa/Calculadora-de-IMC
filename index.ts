import express,{ Router, Request, Response, NextFunction, ErrorRequestHandler} from 'express'
import calculadoraRouter from './src/Routes/calculadoraRoutes';
import errorHandler from './src/middleware/errorHandler';

const app = express();
const port = 3000;
app.use(express.json());
app.use(calculadoraRouter);

app.use(errorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))