import React, { useState, useEffect } from 'react';
import classes from './DateTime.module.scss';
import PropTypes from 'prop-types';

const Clock = ({ locale, timeZone }) => {
    const [time, setTime] = useState(new Date());
    
    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h4 className={`${classes['clock']} card-text`}>
          {time.toLocaleTimeString(locale, { timeZone })}
        </h4>
    );
}

Clock.propTypes = {
    locale: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired
}

export default Clock;
