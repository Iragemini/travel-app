import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {filterCountries} from '../../../redux/actions';
import classes from './Search.module.scss';

const Search = ({filterCountries, language}) => {
  const [valueSearch, setValueSearch] = useState('');
  const refInput = useRef(null);

  useEffect(() => {
    filterCountries({value: valueSearch, language});
  }, [valueSearch, language]);

  useEffect(() => {
    document.addEventListener('keypress', keyControl);
    return () => {
      document.removeEventListener('keypress', keyControl);
    };
  }, [valueSearch]);

  const keyControl = (e) => {
    e = e || window.event;
    if (e.keyCode == '13') {
      filterCountries({value: valueSearch, language});
    }
  };

  const clearFieldSearch = () => {
    setValueSearch('');
    filterCountries({value: '', language});
  };

  return (
    <div className={`${classes['block-search']} form-inline`}>
      <input
        className={`${classes.field} form-control mr-2`}
        ref={refInput}
        type="text"
        autoFocus={true}
        autoComplete="off"
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
        placeholder="Search"
      />
      <span className={classes.close} onClick={clearFieldSearch}>
        &#10006;
      </span>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => filterCountries({value: valueSearch, language})}
      >
        Search
      </button>
    </div>
  );
};

const mapStateToProps = ({countries}) => {
  return {countries};
};

const mapDispatchToProps = {
  filterCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);