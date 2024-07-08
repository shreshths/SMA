import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:5000/api/students";

class StudentService {
  getAllStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  getStudentById(studentId) {
    return axios.get(`${STUDENT_API_BASE_URL}/${studentId}`);
  }

  updateStudent(student, studentId) {
    return axios.put(`${STUDENT_API_BASE_URL}/${studentId}`, student);
  }

  deleteStudent(studentId) {
    return axios.delete(`${STUDENT_API_BASE_URL}/${studentId}`);
  }

  checkRollNoExistance(rollNo) {
    return axios.get(`${STUDENT_API_BASE_URL}/exists/${rollNo}`);
  }
}

export default new StudentService();
