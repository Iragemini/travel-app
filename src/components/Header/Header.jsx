import React from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import Select from './Select';
import {LanguageConsumer} from '../../context';
import {Link} from 'react-router-dom';

import classes from './Header.module.scss';

const Header = ({showSearch}) => {
  return (
    <LanguageConsumer>
      {({updateLanguage, language}) => (
        <header className={`${classes.header} bg-primary`}>
          <nav className={`${classes.nav} navbar navbar-expand-lg navbar-dark center`}>
            <Link to="/" className={`${classes.logo} navbar-brand`}>
              Travel app
            </Link>
            <div className={`${classes.panel}`}>
              {showSearch ? <Search language={language} /> : null}
              <Select updateLanguage={updateLanguage} language={language} />
            </div>
          </nav>
        </header>
      )}
    </LanguageConsumer>
  );
};

const mapStateToProps = ({showSearch}) => {
  return {showSearch};
};

export default connect(mapStateToProps)(Header);
