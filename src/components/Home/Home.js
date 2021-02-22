import { useState, useEffect } from "react";
import Http from "../../utils/http";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Joblist from "../Joblist/Joblist";

const http = new Http();

function Home() {
  const [jobList, setJobList] = useState(() => {
    return JSON.parse(localStorage.getItem("jobList")) || [];
  });

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  http.setBaseUrl(
    "https://cors-server-app.herokuapp.com/https://jobs.github.com/positions.json"
  );

  useEffect(() => {
    if (jobList.length === 0) {
      getJobs("/");
    }
  });

  useEffect(() => {
    localStorage.setItem("jobList", JSON.stringify(jobList));
  }, [jobList]);

  useEffect(() => {
    document.title = "Tech Work - Job List";
  }, []);

  function getJobs(url) {
    http
      .get(url)
      .then((data) => {
        if (data.length === 0) {
          alert(`No jobs found in ${location}`);
        } else {
          setJobList(data);
        }
      })
      .catch((err) => {
        console.error("OOPS:" + err);
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
    setDescription("");
    setLocation("");
  }

  return (
    <>
      <Header onButtonClick={() => getJobs("/")} />
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
