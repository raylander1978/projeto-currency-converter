const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    
    const dollarToday = 4.89

    const convertedValue = inputCurrencyValue / dollarToday

    console.log(convertedValue)

}

convertButton.addEventListener("click", convertValues)