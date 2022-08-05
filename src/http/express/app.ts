import express from 'express';
import { router } from '../../routes';
import { userRoutes } from '../../routes/user.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes)

console.log('Testing branches')
console.log('Test branch 2')

export { app }