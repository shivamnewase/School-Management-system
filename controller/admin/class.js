const db = require('../../models');

const {Classes} = db;


//=====================================================================================================================================================

const Create = async function(req, res){
   
        const {className, departmentName, classShift} = req.body;
     
    try {

           const classes = await Classes.create({className,departmentName,classShift});
           return res.json(classes);

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'something went wrong to create classes'});
    }
}

//========================================================================================================================================================

 const Get = async function (req, res) {

    try {
         
         const classes = await Classes.findAll();
         return res.json(classes);

    } catch (err) {
        console.log(err);
        return res.status(500).json({message: 'something went wrong get user'});
    }

 };

//======================================================================================================================

  const Search = async function(req, res){
         const uuid = req.params.uuid;
    try {
        
         const classes = await Classes.findOne({where:{uuid}});
          return res.json(classes);

    } catch (err) {
         console.log(err);
         return res.status(500).json({message: 'something went wrong to search classes'});
    }
};

//======================================================================================================================

   const Update = async function(req, res){
       const uuid = req.params.uuid;
       const {className, departmentName, classShift} = req.body;
       try{
         
           const classes = await Classes.findOne({where:{ uuid}});

               classes.className = className;
               classes.departmentName = departmentName;
               classes.classShift = classShift;
              
                await classes.save();
            return res.json(classes);

       }catch(err){
  
             console.log(err);
             return res.status(500).json({message: "something wnet wrong to update class"});
          
       }
   }

module.exports = {
       Create,
       Get,
       Search,
       Update,
}