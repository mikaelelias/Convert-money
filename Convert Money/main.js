const convert_button = document.querySelector(".btn_convert");
const currencySelectInitial = document.querySelector(".currency-select-initial");
const currencySelectSecond = document.querySelector(".currency-select-second");


function convertValues() {
    const input_CurrencyValue = document.querySelector(".input_currency").value;
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.91
    const euroToday = 5.26
    const libraToday = 6.00
    const bitcoin = 182.008

    if (currencySelectSecond.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input_CurrencyValue / dolarToday)
    }

    if (currencySelectSecond.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input_CurrencyValue / euroToday)
    }

    if (currencySelectSecond.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input_CurrencyValue / libraToday)
    }
    
    if (currencySelectSecond.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(input_CurrencyValue / bitcoin)
    }
    

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input_CurrencyValue)
}

function changeCurrent() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelectSecond.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png"
    }
    
    if (currencySelectSecond.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelectSecond.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    
    if (currencySelectSecond.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelectSecond.addEventListener("change", changeCurrent)
convert_button.addEventListener("click", convertValues);
