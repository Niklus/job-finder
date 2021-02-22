import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Jobdetail.css";
import Http from "../../utils/http";

const http = new Http();

function Jobdetail() {
  const [job, setJob] = useState({});

  http.setBaseUrl(
    "https://cors-server-app.herokuapp.com/https://jobs.github.com/positions"
  );

  useEffect(() => {
    const id = window.location.hash.slice(1);

    document.title = "Tech Work - Job Detail";

    getFromStorage(id);

    function getFromStorage(id) {
      const jobList = JSON.parse(localStorage.getItem("jobList"));
      if (jobList) {
        const jobDetail = jobList.find((el) => el.id === id);
        jobDetail ? setJob(jobDetail) : getFromNetwork(id);
      } else {
        getFromNetwork(id);
      }
    }

    function getFromNetwork(id) {
      http
        .get(`/${id}.json`)
        .then((data) => setJob(data))
        .catch((err) => {
          console.error("OOPS:" + err);
        });
    }
  }, []);

  return (
    <div className="w3-container detail-container">
      <Link
        to={"/"}
        style={{ marginTop: "30px" }}
        className="w3-button w3-border w3-border-blue w3-round"
      >
        <img src="/go-back.svg" alt="back button" width="50px" />
      </Link>

      <div className="title">
        <h2 className="w3-center w3-text-blue">{job.title}</h2>
        <h4 className="w3-text-grey w3-center">
          {job.type} - {job.location}
        </h4>
      </div>

      <hr />

      <div className="w3-row-padding row">
        <div
          className="w3-twothird"
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
        <div className="w3-third third">
          <a href={job.company_url} target="_blank" rel="noreferrer">
            <div className="w3-card-4 w3-center card-1">
              <h2>{job.company}</h2>
              <hr />
              <img src={job.company_logo} alt="company logo" width="200px" />
              <p className="company-url">{job.company_url}</p>
            </div>
          </a>

          <div className="w3-card-4 w3-padding w3-sand card-2">
            <h2 className="w3-center">How to apply</h2>
            <hr />
            <div
              className="how-to-apply"
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdetail;
