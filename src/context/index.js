import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;

const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'russian');
      setLanguage('russian');
    } else {
      setLanguage(localStorage.getItem('language'));
    }
  }, []);

  const updateLanguage = (e) => {
    localStorage.setItem('language', e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        updateLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export {LanguageProvider, LanguageConsumer};
