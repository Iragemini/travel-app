import React, { useState, useEffect } from 'react';
import WeatherContainer from './WeatherContainer';
import TranslatableText from '../../TranslatableText/TranslatableText';
import PropTypes from 'prop-types';
import config from './config.json';
import classes from './Weather.module.scss';


const Weather = ({ country, capital, language }) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);

    const urlLanguage = language.substring(0,2);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${config.appid}&units=metric&lang=${urlLanguage}`;

    async function fetchData(url) {
        try{
            const response = await fetch(url);
            const data = await response.json();
            if(!response.ok){
                setErrorMessage(data.message.toUpperCase());
                return;
            }else{
                setIsLoaded(true);
                setResult(data);
            }
        } catch (e) {
            setErrorMessage(e.toString());
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (errorMessage) {
        return <div>
            <TranslatableText
            dictionary={{
                russian: 'Ошибка',
                belarusian: 'Памылка',
                english: 'Error'
            }}
            />
            : {errorMessage}
        </div>
    } if (!isLoaded) {
        return <div>
            <TranslatableText
            dictionary={{
                russian: 'Загрузка',
                belarusian: 'Загрузка',
                english: 'Loading'
            }}
            />
            ...
        </div>
    }

    return (
      
        <div className="card weather mb-3">
            <h6 className="card-header">
                <TranslatableText
                dictionary={{
                    russian: 'Погода',
                    belarusian: "Надвор'е",
                    english: 'Weather'
                }}
                />
            </h6>
            { result
                ? <WeatherContainer data={ result } country={ country } />
                : null
            }
        </div>
    );
}

Weather.propTypes = {
    country: PropTypes.object.isRequired,
    capital: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
}

export default Weather;
