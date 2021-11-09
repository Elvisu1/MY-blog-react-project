
import './global.css';
import {Route, Switch} from "react-router-dom";

import Blog from "./pages/blog/Blog";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/about'>
                <AboutPage />
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Route path='/contact'>
                <ContactPage />
            </Route>
            <Route  path='*'>
                <h2>Oops page not found 404</h2>
            </Route>
        </Switch>


    </div>
  );
}

export default App;
