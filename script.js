const convertButton = document.querySelector(".convert-button") // 1º PASSO MAPEAR O BOTÃO.
const currencySelectOne = document.querySelector(".currency-select-to-convert")
const currencySelectTwo = document.querySelector(".currency-select-converted") //13º PASSO MAPEAR MOEDAS


function convertValues(){ //3º PASSO CRIAR FUNÇÃO.
    const inputCurrencyValue = document.querySelector(".input-currency").value
     // 4º PASSO BUSCAR SOMENTE O VALOR QUE VAI SER CONVERTIDO, O MESMO SE ENCONTRA NO INPUT.

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    // 7º PASSO MAPEAR VALOR EM REAL

    const currencyValueConverted = document.querySelector(".currency-value")
    //8º PASSO MAPEAR VALOR DE OUTRAS MOEDAS

    const realToday = 1.00 // 5º PASSO DEFINIR VALOR ATUAL DA NOVA MOEDA PARA FAZER A CONVERSÃO.
    const dolarToday = 4.81 // 5º PASSO DEFINIR VALOR ATUAL DA NOVA MOEDA PARA FAZER A CONVERSÃO.
    const euroToday = 5.27  // PASSO DEFINIR VALOR ATUAL DA NOVA MOEDA PARA FAZER A CONVERSÃO.
    const bitcoinToday = 122869.61  // PASSO DEFINIR VALOR ATUAL DA NOVA MOEDA PARA FAZER A CONVERSÃO.
    const libraToday = 6.15  // PASSO DEFINIR VALOR ATUAL DA NOVA MOEDA PARA FAZER A CONVERSÃO.

    const rateRealDolar = 0.20764
    const rateRealEuro = 0.19019
    const rateRealBitcoin = 0.00000821
    const rateRealLibra = 0.16321 
    const rateDolarEuro = 0.91340
    const rateDolarBitcoin = 0.000040
    const rateDolarLibra = 0.78205397
    const rateEuroDolar = 1.09412
    const rateEuroBitcoin = 0.000042
    const rateEuroLibra = 0.85522
    const rateBitcoinDolar = 25618.87
    const rateBitcoinEuro = 22921.99
    const rateBitcoinLibra = 21765.98
    const rateLibraDolar = 1.26152
    const rateLibraEuro = 1.16846
    const rateLibraBitcoin = 0.000050

    if(currencySelectOne.value == "real" && currencySelectTwo.value == "dolar"){// SE O SELECT ESTIVER EM DOLAR, ENTRE AQUI.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * rateRealDolar); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        //9º PASSO ALTERAR VALOR DE EXIBIÇÃO REAL (ABAIXO DA BANDEIRA)
        //11º PASSO INSERIR CÓDIGO DE FORMATAÇÃO DE VALOR (DOCUMENTAÇÃO)

    } else if (currencySelectOne.value == "real" && currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * rateRealEuro); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "real" && currencySelectTwo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * rateRealBitcoin); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "real" && currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * rateRealLibra); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "real" && currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "dolar" && currencySelectTwo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue); currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "dolar" && currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * rateDolarEuro); currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "dolar" && currencySelectTwo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * rateDolarBitcoin); currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "dolar" && currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * rateDolarLibra); currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "dolar" && currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday); currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "euro" && currencySelectTwo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * rateEuroDolar); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "euro" && currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "euro" && currencySelectTwo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * rateEuroBitcoin); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "euro" && currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * rateEuroLibra); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "euro" && currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "bitcoin" && currencySelectTwo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * rateBitcoinDolar); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "bitcoin" && currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * rateBitcoinEuro); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "bitcoin" && currencySelectTwo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "bitcoin" && currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * rateBitcoinLibra); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "bitcoin" && currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday); currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "libra" && currencySelectTwo.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * rateLibraDolar); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "libra" && currencySelectTwo.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * rateLibraEuro); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "libra" && currencySelectTwo.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * rateLibraBitcoin); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "libra" && currencySelectTwo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    } else if (currencySelectOne.value == "libra" && currencySelectTwo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday); currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
}

function changeCurrencyToConvert() {
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyImageToConvert = document.querySelector(".currency-img-to-convert")

    if(currencySelectOne.value == "dolar"){
        currencyNameToConvert.innerHTML = "Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.png.png"
    }

    if(currencySelectOne.value == "euro"){
        currencyNameToConvert.innerHTML = "Euro"
        currencyImageToConvert.src = "./assets/euro.png.png"
    }

    if(currencySelectOne.value == "bitcoin"){
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImageToConvert.src = "./assets/bitcoin.png.png"
    }

    if(currencySelectOne.value == "libra"){
        currencyNameToConvert.innerHTML = "Libra"
        currencyImageToConvert.src = "./assets/libra.png"
    }

    if(currencySelectOne.value == "real"){
        currencyNameToConvert.innerHTML = "Real"
        currencyImageToConvert.src = "./assets/real.png.png"
    }   

    convertValues()
}

function changeCurrencyConverted() {
    const currencyNameConverted = document.querySelector(".currency-name-converted")
    const currencyImageConverted = document.querySelector(".currency-img-converted")

    if(currencySelectTwo.value == "dolar"){
        currencyNameConverted.innerHTML = "Dólar Americano"
        currencyImageConverted.src = "./assets/dolar.png.png"
    }

    if(currencySelectTwo.value == "euro"){
        currencyNameConverted.innerHTML = "Euro"
        currencyImageConverted.src = "./assets/euro.png.png"
    }

    if(currencySelectTwo.value == "bitcoin"){
        currencyNameConverted.innerHTML = "Bitcoin"
        currencyImageConverted.src = "./assets/bitcoin.png.png"
    }

    if(currencySelectTwo.value == "libra"){
        currencyNameConverted.innerHTML = "Libra"
        currencyImageConverted.src = "./assets/libra.png"
    }

    if(currencySelectTwo.value == "real"){
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/real.png.png"
    }   

    convertValues()
}

currencySelectOne.addEventListener("change", changeCurrencyToConvert)
currencySelectTwo.addEventListener("change", changeCurrencyConverted)
convertButton.addEventListener("click", convertValues) // 2º PASSO ADICIONAR OUVINTE C/EVENTO.



