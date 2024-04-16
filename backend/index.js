import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import tasksRoute from './routes/tasksRoute.js';  

const app = express();

// Middleware
app.use(express.json()); 

app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To The Task App');
});

// Routes
app.use('/tasks', tasksRoute); 

// Database connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

