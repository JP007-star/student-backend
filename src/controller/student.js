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


exports.getAllStudents = (req, res) =>  {
    Student.find({})
        .then((students, error) => {
            if (students) return res.status(200).json({ students: students });
            if (error) {

                return res.status(200).json({ error: error })
            }
        })
}

exports.getStudentById = (req, res) => {
    console.log(req.query);
    const { id } = req.query;

    if (id) {
      Student.findOne({ _id: id }).then((product, error) => {
        if (error) return res.status(400).json({ error });
        if (product) {
          res.status(200).json({ product });
        }
      });
    } else {
      return res.status(400).json({ error: "Params required" });
    }
  };