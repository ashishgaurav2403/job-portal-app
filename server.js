const express = require("express");

const jobsRoute = require('./routes/jobsRoute.js')

const userRoute = require('./routes/usersRoute')

const app = express();

app.use(express.json())

const db=require("./db.js");

app.use('/api/jobs', jobsRoute)

app.use('/api/users/' , userRoute)

const port = process.env.port || 5000;

app.listen(port , ()=> console.log(`Server is running on port ${port}`));

