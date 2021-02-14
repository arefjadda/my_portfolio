import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import SinglePost from "./components/single_post";
import Blog from "./components/blog";
import About from "./components/about";
import NavBar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
        <Route component={SinglePost} path="/blog/:slug" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
