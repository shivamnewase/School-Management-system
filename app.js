const express = require('express');
const {sequelize, User, Post} = require('./models');
const studentRouter = require('./routes/student/student');
const teacherRouter = require('./routes/admin/teacher');
const admissionRouter = require('./routes/admin/admission');
const classRouter = require('./routes/admin/class');
const timeTableRoute = require('./routes/admin/timetable');

const app = express();
app.use(express.json());

app.post('/users', async(req, res)=>{

    const { userName,email,name,password, role} = req.body

    try{
        const user = await User.create({userName, email, name, password, role})
        return res.json(user)
    }
     catch(err){
        console.log(err);
        return res.status(500).json(err)
     }
})

app.get("/users",async(req, res)=>{

   try{
        const user = await User.findAll();
        return res.json(user);
   }
   catch(err){
       console.log(err);
      return res.status(500).send({error: "something went wrong to create user"});
   }
})

app.get("/users/:uuid",async(req, res)=>{
  const uuid = req.params.uuid;
  try{
       const user = await User.findOne(
        {
          where: {uuid},
          include:['posts']
        }
       );
       return res.json(user);
  }
  catch(err){
      console.log(err);
     return res.status(500).send({error: "something went wrong to create user"});
  }
})



app.post('/posts' , async(req, res) =>{
   const {userUuid, body} = req.body;
   try {
      const user = await User.findOne({where: {uuid: userUuid}});

      const post = await Post.create({body, userId: user.id});

      return res.json(post);
   }
    catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
});

app.get('/posts' , async(req, res) =>{
   try {
       
       let posts = await Post.findAll({include:[{model:User, as:'user'}]});
      return res.json(posts);
   }
    catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
})

app.delete("/users/:uuid",async(req, res)=>{
   const uuid = req.params.uuid;
   try{
        const user = await User.findOne({where: {uuid}});
        await user.destroy()
        return res.json({message:'user deleted successfully'});
   }
   catch(err){
       console.log(err);
      return res.status(500).send({error: "something went wrong to delete user"});
   }
 })
 
 
app.put("/users/:uuid",async(req, res)=>{
   const uuid = req.params.uuid;
   const {name, email, role} = req.body
   try{
        const user = await User.findOne({where: {uuid}});
        
        user.name = name;
        user.email = email;
        user.role = role;
     
     await user.save();
     return res.json({message:'user updated successfully'})
   }
   catch(err){
       console.log(err);
      return res.status(500).send({error: "something went wrong to delete user"});
   }
 })


//=============================================================================================================
 //student Route
 app.use('/', studentRouter);
 app.use('/', teacherRouter);

//=============================================================================================================
  //admission Route
   
 app.use('/', admissionRouter);

 //============================================================================================================
// classess Route

 app.use('/', classRouter);

 //=============================================================================================================

 app.use('/', timeTableRoute);
//=============================================================================================================
app.listen({port: 5000}, async()=>{
         //  await sequelize.sync({force: true});
       console.log('server listening on port http://localhost:5000');
         await sequelize.authenticate()
       console.log('database Connected!');
    })
   



