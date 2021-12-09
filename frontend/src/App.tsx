import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </DashboardLayout>
      </div>
    </Router>
  );
};

export default App;
