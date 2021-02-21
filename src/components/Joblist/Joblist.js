import dayjs from "dayjs";
import { Link } from "react-router-dom";
import "./Joblist.css";

function Joblist(props) {
  return (
    <div className="w3-container list-container">
      {props.jobList.map((job) => {
        return (
          <div className="w3-panel w3-light-grey w3-leftbar" key={job.id}>
            <div className="row">
              <h3 className="w3-text-blue">
                <b>{job.title}</b> -{" "}
                <i className="w3-text-green">{job.type.toLowerCase()}</i>
              </h3>
              <h4 className="w3-text-grey">{job.location}</h4>
            </div>

            <h3 className="w3-text-grey company-name">
              <b>{job.company}</b>
            </h3>

            <div className="row">
              <Link to={`/detail#${job.id}`}>
                <button className="w3-button w3-white w3-border w3-border-blue w3-round w3-margin-bottom">
                  Read More
                </button>
              </Link>
              <h4 className="w3-text-grey">
                {dayjs(job.created_at).format("MMM D YYYY")}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Joblist;
