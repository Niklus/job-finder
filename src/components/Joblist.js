import dayjs from "dayjs";
import { Link } from "react-router-dom";

function Joblist(props) {
  return (
    <div
      className="w3-container"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {props.jobList.map((job) => {
        return (
          <div className="w3-panel w3-light-grey w3-leftbar" key={job.id}>
            <div className="my-link">
              <Link to={`/detail#${job.id}`} style={{ textDecoration: "none" }}>
                <h3 className="w3-text-blue">
                  <b>{job.title}</b> -{" "}
                  <i className="w3-text-grey">{job.type.toLowerCase()}</i>
                </h3>
              </Link>
            </div>
            <h4>
              <a
                href={job.company_url}
                target="_blank"
                rel="noreferrer"
                className="company-link"
              >
                {job.company}
              </a>
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
    </div>
  );
}

export default Joblist;
