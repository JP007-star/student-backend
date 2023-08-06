const Student = require('../models/Student')
exports.addStudent = (req, res, next) => {
    const {id,name, age, fee} = req.body;
    const student = new Student({
        id: slugify(name),
        name: name,
        age,
        fee
    });
    student.save((error, student) => {
        if (error) { res.status(400).json({ error: error }) }

        if (student) res.status(200).json({ student: student })
    })
}