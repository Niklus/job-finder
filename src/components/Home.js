import { useState, useEffect } from "react";
import Http from "../utils/http";
import Form from "./Form";
import Joblist from "./Joblist";

const http = new Http();

function Home() {
  const [jobList, setJobList] = useState(() => {
    return JSON.parse(localStorage.getItem("jobList")) || [];
  });

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  http.setBaseUrl("/positions.json");

  useEffect(() => {
    if (jobList.length === 0) {
      getJobs("/");
    }
  });

  useEffect(() => {
    localStorage.setItem("jobList", JSON.stringify(jobList));
  }, [jobList]);

  function getJobs(url) {
    http.get(url).then((data) => {
      setJobList(data);
    });
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let endpoint;

    if (description && location) {
      endpoint = `?description=${description}&location=${location}`;
    } else if (description) {
      endpoint = `?description=${description}`;
    } else if (location) {
      endpoint = `?location=${location}`;
    } else {
      endpoint = "/";
    }

    getJobs(endpoint);
  }

  return (
    <>
      <Form
        description={description}
        location={location}
        onFormSubmit={handleFormSubmit}
        onDescriptionChange={handleDescriptionChange}
        onLocationChange={handleLocationChange}
      />
      <Joblist jobList={jobList} />
    </>
  );
}

export default Home;
