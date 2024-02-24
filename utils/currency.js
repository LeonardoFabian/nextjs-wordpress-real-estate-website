export const mapCurrencyCode = (code) => {
    const currencyMap = {
        USD: "USD$",
        DOP: "RD$",
        EUR: "€"
    }

    return `${currencyMap[code]}` || "$";
}