const express=require('express');
const Router=express.Router();


//Start Block Calling and initializing Controllers
const {AddingTwoNumbers,SubtractingTwoNumbers}=require('../controllers/AdminManagementController');
//Start Block Calling and initializing Controllers

//Routes
Router.post('/AddingTwoNumbers',AddingTwoNumbers);
Router.post('/SubtractingTwoNumbers',SubtractingTwoNumbers);
//Routes

module.exports=Router;
