
/**
 * It takes a number, converts it to a string, and adds a dollar sign to the beginning of the string
 * @param value - The value to be formatted.
 * @returns a string with the value of the parameter passed in, formatted as a currency.
 */
function moneyFormat(value) {

    const localeNumber = value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    const formattedValue = `$${localeNumber}`;

    return formattedValue;
};


const value1 = moneyFormat(19.99);
console.log(value1); // $19.99


const value2 = moneyFormat(250);
console.log(value2); // $250.00


const value3 = moneyFormat(9500.95);
console.log(value3); // $9,500.95
