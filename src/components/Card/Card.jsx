import React from 'react';
import TranslatableText from '../TranslatableText';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Card.module.scss';

const Card = ({country}) => {
  return (
    <li className={`${classes.card} card mb-3`}>
      <Link to={`/${country.name.en.toLowerCase()}`}>
        <img
          className={`${classes.image} d-block user-select-none`}
          src={country.img.card}
          alt={country.name.en}
        />
        <div className="card-body">
          <h5 className="card-title">
            <TranslatableText
              dictionary={{
                russian: country.name.ru,
                belarusian: country.name.be,
                english: country.name.en
              }}
            />
          </h5>
          <h6 className="card-subtitle text-muted">
            <TranslatableText
              dictionary={{
                russian: `столица: ${country.capital.ru}`,
                belarusian: `сталіца: ${country.capital.be}`,
                english: `capital: ${country.capital.en}`
              }}
            />
          </h6>
        </div>
      </Link>
    </li>
  );
};

Card.propTypes = {
  country: PropTypes.object.isRequired
}

export default Card;
