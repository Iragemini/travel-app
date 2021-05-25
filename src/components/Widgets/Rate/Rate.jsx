import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from '../../Select';
import TranslatableText from '../../TranslatableText';
import classes from './Rate.module.scss';
import config from './config.json';
import defOptions from './utils/options';

const Rate = ({ currency, language }) => {
    
    let savedCurrency = "rub";
    let savedLanguage = "russian";
    if(localStorage.getItem('currency')) {
        savedCurrency = localStorage.getItem('currency');
    }
    if(localStorage.getItem('language')) {
        savedLanguage = localStorage.getItem('language');
    }
    const [selectedCurrency, setSelectedCurrency] = useState(savedCurrency);
    const [resultValue, setResultValue] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [result, setResult] = useState(null);
    
    const apiID = config.appid;
    const url = `https://v6.exchangerate-api.com/v6/${apiID}/latest/${currency.value}`;
    
    const resultOptions = defOptions(language);
    const options = resultOptions.options;
    const text = resultOptions.text;

    useEffect(() => {
        if (localStorage.getItem('currency') === null) {
            localStorage.setItem('currency', 'rub');
            setSelectedCurrency('rub');
        } else {
            setSelectedCurrency(localStorage.getItem('currency'));
        }
    }, []);


    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            setErrorMessage(null);
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(!didCancel){
                    if(!response.ok){
                        setErrorMessage(data.message.toUpperCase());
                        return;
                    }else{
                        const dataObj = data.conversion_rates;
                        let value = "";
                        if(dataObj) {
                            value = dataObj[selectedCurrency.toUpperCase()];
                        }
                        setResult(dataObj);
                        setResultValue(value);
                        setIsLoaded(true);
                    }
                }
            } catch (e) {
                if(!didCancel) {
                    setErrorMessage(e.toString());
                }
            }
        }
        fetchData();
        return () => {
            didCancel = true;
        };
    }, [url]);

    const updateCurrency = (e) => {
        const target = e.target.value;
        localStorage.setItem("currency", target);
        setSelectedCurrency(target);
        if(result) {
            setResultValue(result[target.toUpperCase()]);
        }
    }

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
        <div className="card">
            <h6 className="card-header">
                <TranslatableText
                dictionary={{
                    russian: `Курс валюты`,
                    belarusian: `Курс валюты`,
                    english: `Currancy rate`
                }}
                />
            </h6>
            <div className="card-body">
                <form>
                    <fieldset>
                        <div className="form-group">
                            <small className="form-text text-muted">{text.value}</small>
                            <input 
                                type="text" 
                                className={`${classes.input} form-control`} 
                                readOnly={true}
                                value={currency.value}
                            />
                            <small className="form-text text-muted">
                                *
                                <TranslatableText
                                    dictionary={{
                                        russian: currency.ru,
                                        belarusian: currency.be,
                                        english: currency.en
                                    }}
                                />
                            </small>
                        </div>
                        <div className="form-group">
                            <small className="form-text text-muted">{text.WantValue}</small>
                            <Select func={updateCurrency} selected={selectedCurrency} options={options} type={"rate"} />
                        </div>
                            <div className="form-group">
                            <input type="text" className="form-control"  id="resultValue" value={resultValue} readOnly={true} />
                        </div>
                    </fieldset>
                </form>
            </div>            
        </div>
    );
}

Rate.propTypes = {
    currency: PropTypes.objectOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired
}

export default Rate;
