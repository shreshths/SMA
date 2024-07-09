import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../services/StudentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getAllStudents()
      .then((response) => {
        const sortedStudents = response.data.sort(
          (a, b) => a.rollNo - b.rollNo
        );
        setStudents(sortedStudents);
        console.log(sortedStudents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "110px", marginBottom: "60px" }}
    >
      <h2 className="text-center">Student List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th>#</th>
          <th>Roll No</th>
          <th>Name</th>
          <th>Course</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>
                <i className="fa-solid fa-eye"></i>
                <Link
                  className="btn btn-outline-dark"
                  to={`/view-student/${student._id}`}
                >
                  <FontAwesomeIcon icon={faEye} />
                  &nbsp; View
                </Link>
                &nbsp;
                <Link
                  className="btn btn-outline-dark"
                  to={`/edit-student/${student._id}`}
                >
                  <i className="bi bi-pencil-square"></i>
                  &nbsp; Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
