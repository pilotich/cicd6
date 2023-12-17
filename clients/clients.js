import express from 'express';
import mongoose from 'mongoose';

import Router from '../routers/routerClient.js'

const app = express();
app.use(express.json())


mongoose
    .connect('mongodb+srv://pilotich:hu2K0kPxpRNAkWFP@cluster0.jbysdhn.mongodb.net/services')
    .then(() => console.log("Database is ok"))
    .catch((err) => console.log("Database is not ok", err))
    

app.use('/api', Router);

// Starting the server on port 8010
app.listen(8000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on port 8000");
  });