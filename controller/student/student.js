const { json } = require('sequelize');
const db = require('../../models');

const {Student} = db;

//==============================================================================================================
const Create = async function(req, res){

    const {fullName, gender, fatherName,motherName,permanentAddress, currentAddress,
       district,dob,religion,year,enrollDate,className,requestApproved} = req.body
 
    try{
        const student = await Student.create({fullName, gender, fatherName,motherName,permanentAddress, currentAddress,
          district,dob,religion,year,enrollDate,className,requestApproved})
        return res.json(student);
    }
     catch(err){
        console.log(err);
        return res.status(500).json(err)
     }
  };

//===================================================================================================================

 const Get = async function(req, res){
        try{
          const student = await Student.findAll();

          return res.json(student);
        }
        catch{
            console.log(err.message);
            return res.status(500).json(err);
        }
 };

//===================================================================================

 const Search = async function(req, res){
         const uuid = req.params.uuid;
   try{
     const student = await Student.findOne({
              where:{uuid},

     });

     return res.json(student);
   }
   catch{
       console.log(err.message);
       return res.status(500).json(err);
   }
};


//==============================================================================================================================================================================
 const Update = async function(req, res){
         const uuid = req.params.uuid;
        const { fullName, gender, fatherName,motherName,permanentAddress, currentAddress,
                         district,dob,religion,year,enrollDate,className,requestApproved } = req.body;
     try{
       
          const student = await Student.findOne({where:{uuid}})

           student.fullName = fullName;
           student.gender = gender;
           student.fatherName = fatherName;
           student.motherName = motherName;
           student.permanentAddress =  permanentAddress;
           student.currentAddress = currentAddress;
           student.district = district;
           student.dob = dob;
           student.religion = religion;
           student.year = year;
           student.enrollDate = enrollDate;
           student.className = className;
           student.requestApproved = requestApproved;

         await student.save();
         return res.json({message:'student updated successfully'})
     }  
     catch{
      console.log(err);
      return res.status(500).send({error: "something went wrong to update student"});
     }
 }


 //==========================================================================================================================================================================

   const  Delete =  async function(req, res){
           const uuid = req.params.uuid;
       
     try{
          const student = await Student.findOne({where:{uuid}});
          await student.destroy();
          return res.json({message: 'student delete successfully'});
     }       
     catch {
      console.log(err);
      return res.status(500).send({error: "something went wrong to delete student"});
     }

   }

//===========================================================================================================================================================================

 module.exports = {
    Create,
    Get,
    Search,
    Update,
    Delete,
 }