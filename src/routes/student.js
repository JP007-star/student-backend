const express=require('express');
const routes = express.Router()
const { Router } = require('express');
const { addStudent, getAllStudents, getStudentById } = require('../controller/student');


routes.post('/createStudent',addStudent) 
routes.get('/readAllStudents',getAllStudents)
routes.get('/studentById',getStudentById)
// routes.get('/updateStudent/:studentId',getstudentDetailsById)
// routes.delete( "/deleteStudent", deletestudentById);


module.exports =routes; 