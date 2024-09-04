// Objeto para almacenar los elementos de entrada
const inputs = {
    ars: document.getElementById('ars'),
    usd: document.getElementById('usd'),
    eur: document.getElementById('eur'),
    rub: document.getElementById('rub'),
    brl: document.getElementById('brl'),
    pen: document.getElementById('pen'),
    bob: document.getElementById('bob'),
    cad: document.getElementById('cad'),
    uyu: document.getElementById('uyu'),
    pyg: document.getElementById('pyg'),
    clp: document.getElementById('clp'),
    sar: document.getElementById('sar'),
    aud: document.getElementById('aud'),
    nzd: document.getElementById('nzd'),
    cny: document.getElementById('cny'),
    mxn: document.getElementById('mxn')
};

// URL base de la API
const API_URL = 'http://localhost:5000/convert';

// Función para realizar la conversión
async function convertCurrency(fromCurrency, amount) {
    // Iterar sobre todas las monedas
    for (const toCurrency in inputs) {
        if (fromCurrency !== toCurrency) {
            try {
                // Realizar la solicitud a la API
                const response = await fetch(`${API_URL}?from_currency=${fromCurrency}&to_currency=${toCurrency}&amount=${amount}`);
                const data = await response.json();

                // Actualizar el valor del input correspondiente
                inputs[toCurrency].value = data.converted_amount.toFixed(2);
            } catch (error) {
                console.error('Error en la conversión:', error);
            }
        }
    }
}

// Agregar event listeners a los inputs
for (const currency in inputs) {
    inputs[currency].addEventListener('input', async (event) => {
        const amount = event.target.value;
        if (amount) {
            await convertCurrency(currency.toUpperCase(), amount);
        } else {
            // Si el input está vacío, limpiar los otros inputs
            for (const otherCurrency in inputs) {
                if (otherCurrency !== currency) {
                    inputs[otherCurrency].value = '';
                }
            }
        }
    });
}
