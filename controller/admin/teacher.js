const db = require('../../models');
const {Teacher} = db;




//==========================================================================================================================================================================

  const Create = async function (req, res) {
 
       const { fullName, gender, address, dob, email, mobile, joinDate} = req.body;

    try {
          const teacher = await Teacher.create({fullName, gender, address, dob, email, mobile, joinDate});
          return res.json(teacher);
          
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({err});
    }

  };
//==========================================================================================================================================================================

   const Get = async function (req, res){
     
    try {
           const teacher = await Teacher.findAll();
           return res.json(teacher);
        
    } 
    catch(err) {
        console.log(err);
        return res.status(500).json({err});
    }


   };

   
//===========================================================================================================================================================================

   const Search = async function (req, res) {
        const uuid = req.params.uuid;

      try {
            const teacher = await Teacher.findOne({where:{uuid}});
             return res.json(teacher);
             
      } 
      catch (err) {
          console.log(err);
          return res.status(500).json(err);
      }
   };

//===========================================================================================================================================================================

  const Update = async function(req, res){
   
        const uuid  = req.params.uuid;
        const { fullName, gender, address, dob, email, mobile, joinDate} = req.body;

        try {
             const teacher = await Teacher.findOne({where:{uuid}});

             teacher.fullName = fullName;
             teacher.gender = gender;
             teacher.address = address;
             teacher.dob = dob;
             teacher.email = email;
             teacher.mobile = mobile;
             teacher.joinDate = joinDate;

          await teacher.save();
          return res.json({message:'teacher update sucessfully'});
   
        } 
        catch (err) {
             console.log(err);
           return res.status(500).json(err);            
        }
  };


//==========================================================================================================================================================================

   const Delete = async function(req, res) {
       const uuid = req.params.uuid;
       
       try {
              const teacher = await Teacher.findOne({where:{uuid}});
                 await teacher.destroy();
                 return res.json({message: "teacher Delete successfully"});
       } 
       catch (err) {
                 console.log(err);
                 return res.status(500).json(err);
       }
   };

//============================================================================================================================================================================   

module.exports = {
    Create,
    Get,
    Search,
    Update,
    Delete
}
 