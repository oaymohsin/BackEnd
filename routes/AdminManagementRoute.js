const express=require('express');
const Router=express.Router();


//Start Block Calling and initializing Controllers
const {AddingTwoNumbers}=require('../controllers/AdminManagementController');
//Start Block Calling and initializing Controllers

//Routes
Router.post('/AddingTwoNumbers',AddingTwoNumbers);
//Routes

module.exports=Router;
