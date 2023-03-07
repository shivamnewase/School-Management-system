
const db = require('../../models');

const {Admission, Student} = db;


//==================================================================================================================================================================

  const Create = async function(req, res){

     try {
         const data = req.body;
         const {studentId} = data;

         const admissionCreated = await Admission.create(req.body);

         const values = {reqApproved: data.isApproved}
         const condition = {where: {id: studentId}};
         const options = {multi: true};

         const updatedStudentData = await Student.update(values, condition, options);

         let response = {
            admissionApprovedstatus: admissionCreated,
            updatedStudentData: values,
         }
        //  res.status(201).send({status: 'new Admission created Successfully', data: response });
         return res.json(response);
        
     } 
     catch (err) {
         console.log(err);
         return res.status(500).json({message: err.message});
     }
  };

//==================================================================================================================================================================


  const Get = async function (req, res) {
      
    try {
            const admission = await Admission.findAll();
            return res.json(admission);
       } 
       catch (err) {
           console.log(err);
           return res.status(500).json({ message: err.message});
       }
  };


  //==================================================================================================================================================================

  const Search = async function(req, res) {
             const uuid = req.params.uuid;
      try {
            const admission = await Admission.findOne({where:{uuid}});

            return res.json(admission);
        
      } catch (err) {
              console.log(err);
              return res.status(500).json({message: err.message});
      }
  };

  //====================================================================================================================================================================

  const Update = async function (req, res) {
       const uuid = req.params.uuid;
       const {isApproved} = req.body;
    try {
        const admission = await Admission.findOne({where: {uuid}});

            admission.isApproved = isApproved;
            admission.save();
          return res.json({message:'admission deatil update successfully'});
     } catch (err) {
          console.log(err);
          return res.status(500).send({message: err.message});
     }
  };

  //========================================================================================================

  const Delete = async function(req, res){
       const uuid = req.params.uuid;
    try {

          const admission = await Admission.findOne({where:{uuid}});

        await admission.destroy();
        return res.json({message: 'Admission deleted successfully'});
      
    } catch (err) {
         console.log(err);
         return res.status(500).json({message:'Something went wrong to Delete Admission'});
    }
  };

  //==================================================================================================================

  
  module.exports = {
        Create,
        Get,
        Search,
        Update,
        Delete,
  }