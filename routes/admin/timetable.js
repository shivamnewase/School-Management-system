const express = require('express');
const {Create, Get} = require('../../controller/admin/timetable');
const timeTableRoute = express.Router();



timeTableRoute.post('/timetables', Create);
timeTableRoute.get('/timetables', Get);


module.exports = timeTableRoute;