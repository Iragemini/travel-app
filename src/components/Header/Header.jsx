import React from 'react';
import {connect} from 'react-redux';
import Search from './Search';
import Select from '../Select';
import {LanguageConsumer} from '../../context';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Header.module.scss';

const Header = ({showSearch}) => {
  const options = [
    {"OptValue": "russian", "name": "", "value": "Rus"},
    {"OptValue": "belarusian", "name": "", "value": "Bel"},
    {"OptValue": "english", "name": "", "value": "Eng"}
  ]
  return (
    <LanguageConsumer>
      {({updateLanguage, language}) => (
        <header className={`${classes.header} bg-primary`}>
          <nav className={`${classes.nav} navbar navbar-expand-lg navbar-dark container-center`}>
            <Link to="/" className={`${classes.logo} navbar-brand`}>
              Travel app
            </Link>
            <div className={`${classes.panel}`}>
              {showSearch ? <Search language={language} /> : null}
              <Select func={updateLanguage} selected={language} options={options} />
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

Header.propTypes = {
  showSearch: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Header);
