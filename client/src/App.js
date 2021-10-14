import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Dashboard/Home";
import AboutUs from "./component/Dashboard/AboutUs";
import CreateBlog from "./component/Dashboard/CreateBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutus" exact>
            <AboutUs />
          </Route>
          <Route path="/addblog" exact>
            <CreateBlog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
