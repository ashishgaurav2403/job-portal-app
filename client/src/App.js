import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
import { css } from "@emotion/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';
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
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";



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

           {/* <Route exact path="/jobs/:id" component={JobInfo} /> */}

           <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        

          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/appliedjobs" element={<AppliedJobs />} />
          <Route exact path="/jobs/:id" element={<JobInfo />} />
         
          <Route exact path="/postjob" element={<PostJob />} /> 
          <Route exact path="/profile" element={<Profile />} />
         
          <Route path="/posted" element={<PostedJobs />} />
          <Route exact path="/editjob/:id" element={<EditJob />} /> */}



<Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

<Route
          path="/appliedjobs"
          element={
            <PrivateRoute>
              <AppliedJobs />
            </PrivateRoute>
          }
        />

<Route
          path="/jobs/:id"
          element={
            <PrivateRoute>
              <JobInfo />
            </PrivateRoute>
          }
        />

<Route
          path="/postjob"
          element={
            <PrivateRoute>
              <PostJob />
            </PrivateRoute>
          }
        />

<Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

<Route
          path="/posted"
          element={
            <PrivateRoute>
              <PostedJobs />
            </PrivateRoute>
          }
        />

<Route
          path="/editjob/:id"
          element={
            <PrivateRoute>
              <EditJob />
            </PrivateRoute>
          }
        />









        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function PrivateeRoute({children}) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  } else {
   return <Route {...children} />;
  }


}

function PrivateRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}

