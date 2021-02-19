import { useState, useEffect } from "react";

function Jobdetail() {
  const [job, setJob] = useState({});

  useEffect(() => {
    getJob();
  }, []);

  function getJob() {
    const id = window.location.hash.slice(1);
    const jobList = JSON.parse(localStorage.getItem("jobList"));
    setJob(jobList.find((el) => el.id === id));
  }

  return (
    <div
      className="w3-container"
      style={{ maxWidth: "1500px", margin: "0 auto" }}
    >
      <h2 className="w3-center">{job.title}</h2>
      <h4 className="w3-text-grey w3-center">
        {job.type} - {job.location}
      </h4>
      <hr />
      <div style={{ fontSize: "20px" }} className="w3-row-padding">
        <div
          className="w3-twothird"
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
        <div className="w3-third">
          <a href={job.company_url} target="_blank" rel="noreferrer">
            <div
              className="w3-card-4 w3-center"
              style={{ width: "470px", marginTop: "25px" }}
            >
              <h2 style={{ paddingTop: "20px", fontWeight: "bold" }}>
                {job.company}
              </h2>
              <hr />
              <img src={job.company_logo} alt="company logo" width="200px" />
              <p style={{ paddingBottom: "20px" }}>{job.company_url}</p>
            </div>
          </a>

          <div
            className="w3-card-4 w3-padding w3-sand"
            style={{ width: "470px" }}
          >
            <h2
              className="w3-center"
              style={{ paddingTop: "20px", fontWeight: "bold" }}
            >
              How to apply
            </h2>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdetail;
