import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const EditStudent = () => {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");
  const [rollNoError, setRollNoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const updateStudent = (e) => {
    e.preventDefault();

    const student = { rollNo, name, course, email, phone, dob, address };
    const phoneString = phone.toString();

    let errorFlag = false;

    if (!rollNo || !name || !email || !phone || !address) {
      setError("Please fill all the fields");
      errorFlag = true;
    }

    if (!/^\d{3}$/.test(rollNo) && rollNo) {
      setRollNoError("Roll number must be a 3-digit number");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && email) {
      setEmailError("Please enter a valid email address");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (!phoneString.match(/^[0-9]{10}$/) && phone) {
      setPhoneError("Please enter a valid phone number");
      if (!errorFlag) {
        errorFlag = true;
      }
    }

    if (errorFlag) {
      return;
    } else {
      StudentService.checkRollNoExistance(rollNo)
        .then(async (response) => {
          const existingStudent = await StudentService.getStudentById(id);
          const currentRollNo = existingStudent.data.rollNo;
          if (response.data.exists && currentRollNo != rollNo) {
            setRollNoError("Roll number already exists");
            console.log(
              `rollNumber: ${rollNo} \n currentRollNo: ${currentRollNo}`
            );
          } else {
            console.log(
              `rollNumber: ${rollNo} \n currentRollNo: ${currentRollNo}`
            );
            StudentService.updateStudent(student, id)
              .then((response) => {
                console.log(response.data);
                navigate("/students");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    StudentService.deleteStudent(id)
      .then((response) => {
        console.log(response.data);
        navigate("/students");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    StudentService.getStudentById(id)
      .then((response) => {
        setRollNo(response.data.rollNo);
        setName(response.data.name);
        setCourse(response.data.course);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setAddress(response.data.address);
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
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center mt-2">Update Student</h2>
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
                  disabled
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
                    setPhoneError("");
                    setPhone(e.target.value);
                  }}
                />
                {phoneError && (
                  <div className="alert alert-danger">{phoneError}</div>
                )}
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
                onClick={(e) => updateStudent(e)}
              >
                Save
              </button>
              <Link to="/students" className="btn btn-danger ms-2">
                Cancel
              </Link>
              <div align="right">
                <button
                  className="btn btn--default"
                  title="Delete"
                  onClick={(e) => handleDelete(e)}
                >
                  <FontAwesomeIcon icon={faTrashCan} size="2x" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
