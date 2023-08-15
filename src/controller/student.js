const Student = require("../model/student");

exports.addStudent = async (req, res, next) => {
    
    const {name, age, fee} = req.body;
    const student = new Student({
        name: name,
        age,
        fee
    });
    student.save().then(()=>{
      res.status(200).json({ student: student })
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({ error: err })
    })
}