// URL de la API de tasas de cambio externa
const EXTERNAL_API_URL = 'https://v6.exchangerate-api.com/v6/87c53620b61a8a85f3232a88/latest'; // Reemplaza con tu clave

// Función para obtener la tasa de cambio desde la API externa
async function getConversionRate(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${EXTERNAL_API_URL}/${fromCurrency}`);
        const data = await response.json();
        if (data.result !== 'success') {
            console.error('Error al obtener la tasa de cambio:', data.error);
            return null;
        }
        return data.conversion_rates[toCurrency]; // La tasa de cambio para 1 unidad de `fromCurrency`
    } catch (error) {
        console.error('Error en la solicitud:', error);
        return null;
    }
}

// Función de conversión utilizando la API externa
async function convertCurrencyBackup(fromCurrency, toCurrency, amount) {
    if (fromCurrency === toCurrency) {
        return amount;
    }
    const rate = await getConversionRate(fromCurrency, toCurrency);
    if (rate === null) {
        return 'Error'; // O alguna otra forma de manejar errores
    }
    return amount * rate;
}

// Lógica para actualizar el resultado en la página
document.getElementById('amount').addEventListener('input', async () => {
    const from = document.getElementById('from_currency').value;
    const to = document.getElementById('to_currency').value;
    const amount = document.getElementById('amount').value;
    if (amount && from && to) {
        const convertedAmount = await convertCurrencyBackup(from, to, amount);
        document.getElementById('converted_amount').value = convertedAmount.toFixed(2);
    } else {
        document.getElementById('converted_amount').value = '';
    }
});
