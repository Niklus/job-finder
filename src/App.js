import Home from "./components/Home/Home";
import Jobdetail from "./components/Jobdetail/Jobdetail";
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
