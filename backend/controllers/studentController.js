import Student from "../models/Student.js";

export async function getStudents(req, res) {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getStudent(req, res) {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function checkRollNoExistance(req, res) {
  const rollNo = req.params.rollNo;

  try {
    const existingStudent = await Student.findOne({ rollNo });
    res.json({ exists: !!existingStudent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createStudent(req, res) {
  try {
    const { rollNo } = req.body;
    const existingStudent = await Student.findOne({ rollNo });

    if (existingStudent) {
      return res.status(400).json({ message: "Roll number already exists" });
    }

    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateStudent(req, res) {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteStudent(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
