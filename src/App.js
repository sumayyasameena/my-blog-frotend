import logo from './logo.svg';

import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ArticlesListPage from "./pages/ArticlesListPage"
import ArticlePage from "./pages/ArticlePage"
import NotFoundPage from "./pages/NotFoundPage"
import NavBar  from './NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
       <NavBar/>
       <Switch>
          <Route path="/" component={HomePage} exact />
        <Route path="/about-us" component={AboutPage}  />
        <Route path="/articles-list-page" component={ArticlesListPage}  />
        <Route path="/article/:name" component={ArticlePage}  />
        <Route component={NotFoundPage} />
       </Switch>
       
    </div>
    </Router>
  );
}

export default App;
