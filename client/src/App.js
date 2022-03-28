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

import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";
import { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  //  dispatch(getAllUsers())
  }, []);


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
          <Route exact path="/jobs/:id" element={<JobInfo />} />
          {/* <Route exact path="/jobs/:id" component={JobInfo} /> */}
          <Route exact path="/postjob" element={<PostJob />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
