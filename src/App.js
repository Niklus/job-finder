import { useState, useEffect } from "react";
import dayjs from "dayjs";
import Http from "./utils/http";
import "./App.css";

const http = new Http();

function App() {
  const [jobList, setJobList] = useState([]);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  http.setBaseUrl("/positions.json");

  useEffect(() => {
    getJobs("/");
  }, []);

  function getJobs(url) {
    http.get(url).then((data) => {
      setJobList(data);
    });
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
      <header className="w3-container w3-blue">
        <h1 className="w3-center">
          <b>JOB FINDER</b>
        </h1>
      </header>

      <form
        onSubmit={handleFormSubmit}
        className="w3-row-padding"
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
        }}
      >
        <div className="w3-third">
          <label htmlFor="description">
            <b>Job Description</b>
          </label>
          <input
            id="description"
            className="w3-input w3-border"
            type="text"
            placeholder="Enter job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="w3-third">
          <label htmlFor="location">
            <b>Location</b>
          </label>
          <input
            id="location"
            className="w3-input w3-border"
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="w3-third">
          <button
            className="w3-blue w3-button w3-block w3-round"
            style={{ marginTop: "22.5px" }}
          >
            <b>Search</b>
          </button>
        </div>
      </form>

      <main
        className="w3-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {jobList.map((job) => {
          return (
            <div className="w3-panel w3-light-grey w3-leftbar" key={job.id}>
              <h3 className="w3-text-blue">
                <b>{job.title}</b>
              </h3>
              <h4 className="w3-text-grey">
                <a
                  href={job.company_url}
                  target="_blank"
                  rel="noreferrer"
                  className="company-link"
                >
                  {job.company}
                </a>{" "}
                - <b className="w3-text-green">{job.type}</b>
              </h4>
              <div
                className="w3-text-grey"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h4>{job.location}</h4>
                <h4>{dayjs(job.created_at).format("MMM D YYYY")}</h4>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
