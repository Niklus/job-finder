import { useState, useEffect } from "react";

function App() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setJobList(data);
      });
  }, []);

  return (
    <>
      <header className="w3-container w3-blue">
        <h1 className="w3-center">
          <b>JOB FINDER</b>
        </h1>
      </header>

      <form
        className="w3-row-padding"
        style={{
          maxWidth: "1200px",
          margin: "20px auto",
        }}
      >
        <div className="w3-half">
          <label>
            <b>Job Description</b>
          </label>
          <input className="w3-input w3-border" type="text" placeholder="" />
        </div>
        <div className="w3-half">
          <label>
            <b>Location</b>
          </label>
          <input className="w3-input w3-border" type="text" placeholder="" />
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
                {job.company}- <b className="w3-text-green">{job.type}</b>
              </h4>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
