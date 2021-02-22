import Home from "./Home/Home";
import Jobdetail from "./Jobdetail/Jobdetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail">
          <Jobdetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
