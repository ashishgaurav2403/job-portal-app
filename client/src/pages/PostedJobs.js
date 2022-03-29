import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { Table, Modal } from "antd";
import moment from "moment";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    EditOutlined,
    OrderedListOutlined,
  } from "@ant-design/icons";
  
import { useNavigate } from "react-router-dom";
function PostedJobs() {
  const alljobs = useSelector((state) => state.jobsReducer).jobs;
  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = alljobs.filter((job) => job.postedBy == userid);
  const history = useNavigate();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
        title: "Actions",
        render: (text, data) => {
          return (
            <div className="flex">
              <EditOutlined
                style={{fontSize:20}}
                onClick={() => {
                 // history.push(`/editjob/${data.completeJobData._id}`)
                 history(`/editjob/${data.completeJobData._id}`)
               
                }}
              />
    
            </div>
          );
        },
      },
    ];

  const dataSource = [];

  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job
    };
    dataSource.push(obj);
  }

 
  console.log(userPostedJobs);
  return (
    <div>
      <DefaultLayout>
        <h1>Posted Jobs</h1>

        <Table columns={columns} dataSource={dataSource} />

       
      </DefaultLayout>
    </div>
  );
}

export default PostedJobs;