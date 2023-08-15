const express=require('express');
const routes = express.Router()
const { Router } = require('express');
const { addStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } = require('../controller/student');


routes.post('/createStudent',addStudent) 
routes.get('/readAllStudents',getAllStudents)
routes.get('/studentById',getStudentById)
routes.put('/updateStudent',updateStudent)
routes.delete( "/deleteStudent", deleteStudent);


module.exports =routes; 