import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Jobdetail from "./components/Jobdetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail" exact>
            <Jobdetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
