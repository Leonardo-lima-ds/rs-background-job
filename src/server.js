import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', UserController.store);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});