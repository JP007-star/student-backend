const express=require('express');
const routes = express.Router()
const { Router } = require('express');
const { addStudent } = require('../controller/student');


routes.post('/createStudent',addStudent) 
// routes.get('/readAllStudents',getAllstudent)
// routes.get('/studentById/:slug',getstudentsBySlug)
// routes.get('/updateStudent/:studentId',getstudentDetailsById)
// routes.delete( "/deleteStudent", deletestudentById);


module.exports =routes; 