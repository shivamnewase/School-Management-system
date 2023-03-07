const express = require('express');
const {Create, Get, Search, Update, Delete} = require('../../controller/student/student');
const studentRouter = express.Router();


studentRouter.post('/students',Create);
studentRouter.get('/students',Get);
studentRouter.get('/students/:uuid',Search);
studentRouter.put('/students/:uuid',Update);
studentRouter.delete('/students/:uuid',Delete);


module.exports = studentRouter;
