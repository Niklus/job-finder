import "./Form.css";

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit} className="w3-row-padding">
      <div className="w3-third">
        <label htmlFor="description">
          <b>Job Description</b>
        </label>
        <input
          id="description"
          className="w3-input w3-border"
          type="text"
          placeholder="Enter job description"
          value={props.description}
          onChange={props.onDescriptionChange}
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
          placeholder="Enter your location"
          value={props.location}
          onChange={props.onLocationChange}
        />
      </div>
      <div className="w3-third">
        <button className="w3-blue w3-button w3-block w3-round search-btn">
          <b>Search</b>
        </button>
      </div>
    </form>
  );
}

export default Form;
