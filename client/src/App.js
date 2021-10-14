import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Dashboard/Home";
import AboutUs from "./component/Dashboard/AboutUs";
import CreateBlog from "./component/Dashboard/CreateBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Login/Register";

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
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
