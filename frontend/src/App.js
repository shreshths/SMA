import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/students" element={<StudentList />} />
            <Route exact path="/add-student" element={<AddStudent />} />
            <Route exact path="/edit-student/:id" element={<EditStudent />} />
            <Route exact path="/view-student/:id" element={<ViewStudent />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
