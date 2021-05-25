import React from 'react';
import PropTypes from 'prop-types';
import TranslatableText from '../../TranslatableText/TranslatableText';
import days from './JSON/days.json';
import months from './JSON/months.json';
import formatDate from './utils/formatDate';

const DateContainer = ({ offset }) => {

    const date = formatDate(Number.parseInt(offset));
    const current = date.getDate();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div>
            <h6 className="card-text">
            <TranslatableText
                dictionary={{
                    russian: days[day].ru,
                    belarusian: days[day].be,
                    english: days[day].en
                }}
            />
            </h6>
            <h6 className="card-text">
                { `${current} ` }
                <TranslatableText
                    dictionary={{
                        russian: months[month].ru,
                        belarusian: months[month].be,
                        english: months[month].en
                    }}
                />
                { `, ${year} ` }
            </h6>
        </div>
    );
}

DateContainer.propTypes = {
    offset: PropTypes.string.isRequired
}

export default DateContainer;
