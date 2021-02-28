import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './index.css';

// Components
import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";
import AddContact from "./Components/Add-contact/add-contact";


const App = () => {
  return (
      <Fragment>
      <Header />
        <Router>
              <Switch>
                  <Route path="/"
                         exact
                         render={() =>
                             <Fragment>
                                 <Search />
                                 <ContactList />
                             </Fragment>
                         }
                         />

                  <Route path="/add-contact"
                         exact
                         render={() =>
                             <AddContact />
                         }
                  />
              </Switch>
          </Router>
        <Footer />
      </Fragment>

)
}

ReactDOM.render(<App />, document.getElementById("root"));
