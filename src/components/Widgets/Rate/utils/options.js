export default function defOptions ( language ) {
    let result = {
        options: null,
        text: null
    };
    let options = [];
    let text = [];
    switch(language) {
        case "russian":
            options = [
                {"OptValue": "rub", "name": "Российский рубль", "value": "RUB"},
                {"OptValue": "usd", "name": "Доллар США", "value": "USD"},
                {"OptValue": "eur", "name": "Евро", "value": "EUR"}
            ];
            text = {"value": "Имеющаяся валюта", "WantValue": "Нужная валюта"};
            break;
        case "belarusian":
            options = [
                {"OptValue": "rub", "name": "Расійскі рубель", "value": "RUB"},
                {"OptValue": "usd", "name": "Даляр ЗША", "value": "USD"},
                {"OptValue": "eur", "name": "Еўра", "value": "EUR"}
            ];
            text = {"value": "Наяўная валюта", "WantValue": "Патрэбная валюта"};
            break;
        case "english":
            options = [
                {"OptValue": "rub", "name": "Russian Rouble", "value": "RUB"},
                {"OptValue": "usd", "name": "US Dollar", "value": "USD"},
                {"OptValue": "eur", "name": "Euro", "value": "EUR"}
            ];
            text = {"value": "Currency I Have", "WantValue": "Currency I Want"};
            break;
        default: 
            options = [
                {"OptValue": "rub", "name": "Российский рубль", "value": "RUB"},
                {"OptValue": "usd", "name": "Доллар США", "value": "USD"},
                {"OptValue": "eur", "name": "Евро", "value": "EUR"}
            ];
            text = {"value": "Имеющаяся валюта", "WantValue": "Нужная валюта"};
            break;
    }
    result.options = options;
    result.text = text;
    return result;
}