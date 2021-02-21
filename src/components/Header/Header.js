import "./Header.css";

function Header(props) {
  return (
    <header className="w3-container w3-blue">
      <div>
        <h1 id="title">
          <b>Tech Work</b>
        </h1>
        <button
          onClick={props.onButtonClick}
          className="w3-button w3-blue w3-border w3-border-white w3-large w3-round"
        >
          All Jobs
        </button>
      </div>
    </header>
  );
}

export default Header;
