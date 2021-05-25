import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import DateContainer from './DateContainer';

const DateTime = ({ country, language }) => {

    const dateInfo = country.date;
    const timeZone = dateInfo.timeZone;
    if(!language) {
        language = localStorage.getItem('language') || 'russian';
    }
    const locale = `${language.substring(0,2)}-${dateInfo.code}`;

    return (
        <div className="card mb-3">
            <div className="card-header">
                <DateContainer offset={ dateInfo.offset } />
            </div>
            <div className="card-body">
                <Clock locale={ locale } timeZone={timeZone} />
            </div>            
        </div>
    );
}

DateTime.propTypes = {
    country: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired
}

export default DateTime;
