import React from 'react';
import PropTypes from 'prop-types';
import TranslatableText from '../../TranslatableText';
import '../css/owfont-regular.css';

const WeatherContainer = ({data, country}) => {
  const {weather, main} = data;

  const img = `owf owf-${weather[0].id} owf-2x`;

  return (
    <div className="card-body">
      <h5 className="card-title">
        <TranslatableText
          dictionary={{
            russian: country.capital.ru,
            belarusian: country.capital.be,
            english: country.capital.en
          }}
        />
      </h5>
      <i className={img}></i>
      <h4 className="card-text">{`${main.temp.toFixed(0)}°C`}</h4>
      <div className="card-text">{weather[0].description}</div>
    </div>
  );
};

WeatherContainer.propTypes = {
    data: PropTypes.object.isRequired,
    country: PropTypes.object.isRequired
}

export default WeatherContainer;
