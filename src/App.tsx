import React from 'react';
import {Header} from "./Component/Header/Header";
import {Main} from "./Component/Main/Main";
import {Footer} from "./Component/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Services} from "./Component/Services/Services";
import {Gallery} from "./Component/Gallery/Gallery";
import {Contact} from "./Component/Contact/Contact";


function App() {
  return (
      <Router>
        <>
          <Header/>
          <Switch>
              <Route path="/" exact>
                  <Main/>
              </Route>
              <Route path="/services">
                  <Services/>
              </Route>
              <Route path='/gallery'>
                    <Gallery/>
              </Route>
              <Route path='/contacts'>
                  <Contact/>
              </Route>
          </Switch>

          <Footer/>
       </>
      </Router>
  );
}

export default App;
