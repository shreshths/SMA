import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

const ViewStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    StudentService.getStudentById(id)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="container"
      style={{ marginTop: "110px", marginBottom: "50px" }}
    >
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Student Details</h2>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "40%" }}>
                <strong>Name: </strong>
                {student.name}
              </div>
              <div style={{ width: "20%" }}>
                <strong>Roll No: </strong>
                {student.rollNo}
              </div>
              <div style={{ width: "40%" }}>
                <strong>Course: </strong>
                {student.course}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "40%" }}>
                <strong>Email: </strong>
                {student.email}
              </div>
              <div>
                <strong>Phone: </strong>
                {student.phone}
              </div>
            </div>

            <div>
              <strong>Date of Birth: </strong>
              {student.dob}
            </div>
            <div>
              <strong>Address: </strong>
              {student.address}
            </div>
          </div>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-primary" onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
