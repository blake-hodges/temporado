function currencyConverter(amount, country) {
    // const currencyRates = {
    //     "Australia": 1.34,
    //     "Brazil": 4.69,
    //     "Canada": 1.26,
    //     "China": 6.36,
    //     "Hong Kong": 7.83,
    //     "Portugal" : 0.92,
    //     "Spain": 0.92,
    //     "Turkey": 14.605,
    //     "United States": 1
    // }
    const currencyRates = {
        "Australia": 0.74,
        "Brazil": 0.21,
        "Canada": 0.79,
        "China": 0.157,
        "Hong Kong": 0.127,
        "Portugal" : 1.08,
        "Spain": 1.08,
        "Turkey": 0.068,
        "United States": 1
    }
    let total = Math.round(Number.parseInt(amount) * currencyRates[country]);
    return total;

}

export default currencyConverter;