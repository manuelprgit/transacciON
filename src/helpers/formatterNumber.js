
const formatMoney = (number) => {
    return new Intl.NumberFormat('es-us', {
        // style: 'currency',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: 'USD', // Modenas "EUR", "USD", "MXN".
    }).format(number);
};



export {
    formatMoney
}