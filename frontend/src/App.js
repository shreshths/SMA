import "./App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider, { AuthContext } from "./AuthContext";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ msg: "You must login first" }} />
  );
};

function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/students"
                element={<PrivateRoute element={<StudentList />} />}
              />
              <Route
                exact
                path="/add-student"
                element={<PrivateRoute element={<AddStudent />} />}
              />
              <Route
                exact
                path="/edit-student/:id"
                element={<PrivateRoute element={<EditStudent />} />}
              />
              <Route
                exact
                path="/view-student/:id"
                element={<PrivateRoute element={<ViewStudent />} />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
