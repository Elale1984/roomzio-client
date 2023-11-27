import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideBar from "./components/sideBar/SideBar";
import Facility from "./pages/facility/Facility";
import Organization from "./pages/organization/Organization";
import Register from "./pages/register/Register";
import Room from "./pages/room/Room";
import Wing from "./pages/wing/Wing";
import LandingPage from "./pages/landing-page/LandingPage";

const App = () => {

  return (
      <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route
              path="/dashboard/*"
              element={
                <React.Fragment>
                  <SideBar>
                    <Routes>
                      <Route path="/register" element={<Register />} />
                      <Route path="/organization" element={<Organization />} />
                      <Route path="/facility" element={<Facility />} />
                      <Route path="/wing" element={<Wing />} />
                      <Route path="/room" element={<Room />} />
                    </Routes>
                  </SideBar>
                </React.Fragment>
              }
            />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
