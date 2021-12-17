import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './views/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contacts from './views/Contacts/Contacts';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contacts" exact component={Contacts} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
