import React from 'react';
import PropTypes from 'prop-types';
import Weather from './Weather/Weather';
import DateTime from './Date/DateTime';
import Rate from './Rate/Rate';
import {LanguageConsumer} from '../../context';

/**Country widgets */

const Widgets = ({country}) => {
  const capital = country.capital.en;

  return (
    <LanguageConsumer>
      {({language}) => (
        <div className="card border-light mb-3">
          <div className="card-body p-0">
            <DateTime country={country} language={language} />
            <Weather country={country} capital={capital} language={language} />
            <Rate currency={country.currency} language={language} />
          </div>
        </div>
      )}
    </LanguageConsumer>
  );
};

Widgets.propTypes = {
    country: PropTypes.object.isRequired
}

export default Widgets;
