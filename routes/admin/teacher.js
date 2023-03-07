const express = require('express');
const {Create, Get, Search, Update, Delete} = require('../../controller/admin/teacher');

const teacherRouter = express.Router();

teacherRouter.post('/teacher', Create);
teacherRouter.get('/teacher', Get);
teacherRouter.get('/teacher/:uuid', Search);
teacherRouter.put('/teacher/:uuid', Update);
teacherRouter.delete('/teacher/:uuid', Delete);

module.exports = teacherRouter;