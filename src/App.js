import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard.jsx";
import Donations from "./screens/Donations/Donations.jsx";
import Login from "./screens/Login/Login.jsx";
import Donators from "./screens/Donators/Donators.jsx";
import Patients from "./screens/Patients/Patients.jsx";
import Reports from "./screens/Reports/Reports.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/donations"
            element={
              <PrivateRoute>
                <Donations />
              </PrivateRoute>
            }
          />
          <Route
            path="/donators"
            element={
              <PrivateRoute>
                <Donators />
              </PrivateRoute>
            }
          />
          <Route
            path="/patients"
            element={
              <PrivateRoute>
                <Patients />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
