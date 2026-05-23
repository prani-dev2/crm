import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";
import Team from "./pages/Team";
import Activities from "./pages/Activities";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <BrowserRouter>

      <div className={
        darkMode
        ? "app dark"
        : "app"
      }>

        <div className="app-container">

          <Sidebar />

          <div className="content">

            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/leads"
                element={<Leads />}
              />

              <Route
                path="/add-lead"
                element={<AddLead />}
              />

              <Route
                path="/team"
                element={<Team />}
              />

              <Route
                path="/activities"
                element={<Activities />}
              />

            </Routes>

          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;