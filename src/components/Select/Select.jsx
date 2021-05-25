import React from 'react';
import PropTypes from 'prop-types';

import classes from './Select.module.scss';

const Select = ({ func, selected, options, type }) => {
  let style = classes.select;
  if (type === "rate") {
    style = classes.selectRate;
  }
  return (
    <select
      className={`${style} form-control ml-5`}
      value={selected}
      onChange={(e) => func(e)}
    >
      {
        options.map((option, index) => 
        <option key={index} value={option.OptValue}>
          {
            `${option.value} ${option.name}`
          }
        </option>)
      }
    </select>
  );
};

Select.propTypes = {
  func: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string
}

Select.defaultProps = {
  type: ""
}

export default Select;
