const express = require("express");
const router = express.Router();
const { success, error } = require("../../network/reponse");
const controller = require("./controller");


router.get("/", (req, res) => {
  controller.getAllUsers().then((response) => {
    success(req, res, response, 200);
  }).catch(e =>{
    error(req, res, "Internal error", 500 , e);
  })
});


router.patch('/:id' , (req, res)=>{
  res.send("Por Definir")
})

router.post('/singUp' , (req , res)=>{
  const User = req.body
  controller.addUser(User)
  .then((response) => {
    success(req, res, response, 200);
  }).catch(e =>{
    error(req, res, e, 400 , "Error in singUp");
  })
})

router.get('/:id' , (req , res) => {
    const idUser = req.params.id
    controller.getUserId(idUser).then((response) => {
      success(req, res, response, 200);
    }).catch(e => {
      error(req, res, e, 400 , "Error in GetUser");
    })
})

// router.post('/singIn' , (req , res)=>{
//   res.send("Por definir")
// })


module.exports = router;
