import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [rollNoError, setRollNoError] = useState("");

  const navigate = useNavigate();

  const saveStudent = async (e) => {
    e.preventDefault();

    const student = { name, rollNo, course, email, phone, dob, address };

    let errorFlag = false;

    if (!name || !rollNo || !course || !email || !phone || !dob || !address) {
      setError("Please fill all the fields");
      errorFlag = true;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email) {
      setEmailError("Please enter a valid email address");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (!phone.match(/^[0-9]{10}$/) && phone) {
      setPhoneError("Please enter a valid phone number");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (!/^\d{3}$/.test(rollNo) && rollNo) {
      setRollNoError("Roll number must be a 3-digit number");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (!errorFlag) {
      StudentService.checkRollNoExistance(rollNo).then((response) => {
        if (response.data.exists) {
          setRollNoError("Roll number already exists");
        } else {
          StudentService.createStudent(student)
            .then((response) => {
              console.log(response.data);
              navigate("/students");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "110px", marginBottom: "50px" }}
    >
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center mt-2">Add Student</h2>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Roll No:</label>
                <input
                  type="number"
                  placeholder="Enter roll no"
                  name="rollNo"
                  className="form-control"
                  value={rollNo}
                  onChange={(e) => {
                    setError("");
                    setRollNoError("");
                    setRollNo(e.target.value);
                  }}
                />
                {rollNoError && (
                  <div className="alert alert-danger">{rollNoError}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Course:</label>
                <input
                  type="text"
                  placeholder="Enter course name"
                  name="course"
                  className="form-control"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setError("");
                    setEmailError("");
                    setEmail(e.target.value);
                  }}
                />
                {emailError && (
                  <div className="alert alert-danger">{emailError}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Phone:</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  name="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => {
                    setError("");
                    setPhoneError("");
                    setPhone(e.target.value);
                  }}
                />
                {phoneError && (
                  <div className="alert alert-danger">{phoneError}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Address:</label>
                <textarea
                  placeholder="Enter full address, including street, city, state and ZIP code"
                  name="address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={(e) => saveStudent(e)}
              >
                Save
              </button>
              <Link to="/students" className="btn btn-danger ms-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
