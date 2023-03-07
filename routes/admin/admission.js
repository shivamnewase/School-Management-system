const express = require('express');
const {Create, Get, Search, Update, Delete} = require('../../controller/admin/admission');

admissionRouter = express.Router();


admissionRouter.post('/admissions', Create);
admissionRouter.get('/admissions', Get);
admissionRouter.get('/admissions/:uuid',Search);
admissionRouter.put('/admissions/:uuid', Update);
admissionRouter.delete('/admissions/:uuid', Delete);

module.exports = admissionRouter;