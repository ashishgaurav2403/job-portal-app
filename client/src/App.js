import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
import { css } from "@emotion/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

//import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import AppliedJobs from "./pages/AppliedJobs";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import { useSelector } from "react-redux";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);

  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appliedjobs" element={<AppliedJobs />} />
          <Route exact path="/jobinfo" element={<JobInfo />} />
          <Route exact path="/postjob" element={<PostJob />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
