const express = require("express");
const User = require("./backend/models/User.js");
const cors = require("cors");
var bcrypt = require("bcrypt");
const connected = require("../root/backend/db/connection.js");
console.log(connected);
connected.then(() => {
  console.log("connected!");
  const server = app.listen(8080, () => console.log("listening"));
});
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(" Connected For life");
});

const router = require("../root/backend/routes/index.js");
app.use("/api/v1", router);
// app.post("/signUp/",(req,res)=>{

//         let newUser=new User(
//             {
//             name:req.body.name,
//             email:req.body.email,
//             mobile:req.body.mobile,
//              dob:req.body.DOB,
//               password: req.body.password,
//              confirmpassword:req.body.confirmpassword,
//             // // password: bcrypt.hashSync(req.body.password, 8),
//             // // ConfirmPassword:bcrypt.hashSync(req.body.password, 8)
//         //    }

//             });
//            newUser.save().then(result=>{
//                res.json({
//                    data:newUser,
//                    url:`/signup/${newUser._id}`,
//                    message:"User was created successfully"

//                })
//             }).catch(error=>{res.status(500).send(error)});

// })

// app.post("/signin",(req,res)=>{
// User.findOne({
//           name: req.body.name,
//         })

//         .then((user)=>
//             {
//                 if(!user)
//                 {
//                     return res.status(401).json({
//                         error: new Error('User not found!')
//             })
//         }
//     if(req.body.password==user.password)
//     {
//             return res.status(200).json({
//               data:user,
//               url:`/signin/${user._id}`,
//               message:"User was authenticataed successfully"

//             });
//           }

//     }).catch((error)=>{res.status(500).json({error:error})});

// });
