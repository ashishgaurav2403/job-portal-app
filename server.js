const express = require("express");

const jobsRoute = require('./routes/jobsRoute.js')

const app = express();

const db=require("./db.js");

app.use('/api/jobs', jobsRoute)

const port = process.env.port || 5000;

app.listen(port , ()=> console.log(`Server is running on port ${port}`));

