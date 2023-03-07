const db = require('../../models');

const {Timetable, Classes} = db;

//================================================================================================================

const Create = async function(req, res){

   const {classUuid, day, subjectName, startTime, endTime} = req.body;
   try {
      const classes = await Classes.findOne({where: {uuid: classUuid}});

      const timetable = await Timetable.create({day,subjectName,startTime,endTime, classId: classes.id});

      return res.json(timetable);
   }
    catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
       
};

//=================================================================================================================

 const Get = async function(req, res){
   try {
      const timetable = await Timetable.findAll();
      return res.json(timetable);
   } catch (err) {
        console.log(err);
   }   
 };
 
 module.exports = {
    Create,
    Get,
 };