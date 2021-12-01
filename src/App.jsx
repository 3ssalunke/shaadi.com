import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
