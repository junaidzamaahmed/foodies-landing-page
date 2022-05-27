import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
