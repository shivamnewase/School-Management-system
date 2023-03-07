const express = require('express');
const {Create, Get, Search, Update} = require('../../controller/admin/class');
 const classRouter = express.Router();


 classRouter.post('/classes', Create);
 classRouter.get('/classes', Get);
 classRouter.get('/classes/:uuid', Search);
 classRouter.put('/classes/:uuid', Update);


 module.exports = classRouter;