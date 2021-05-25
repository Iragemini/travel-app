import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../pages/Main';
import Country from '../../pages/Country';
import Page404 from '../../pages/Page404';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Main />} />
        <Route
          path="/:countryName"
          exact
          render={({match}) => <Country countryName={match.params.countryName} />}
        />
        <Route render={() => <Page404 />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
