from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Clave de API para ExchangeRate-API (reemplazar con tu propia clave)
API_KEY = '87c53620b61a8a85f3232a88'

# Diccionario de códigos de moneda
CURRENCIES = {
    'ARS': 'Peso Argentino',
    'USD': 'Dólar Estadounidense',
    'EUR': 'Euro',
    'RUB': 'Rublo Ruso',
    'BRL': 'Real Brasileño',
    'PEN': 'Nuevo Sol Peruano',
    'BOB': 'Boliviano',
    'CAD': 'Dólar Canadiense',
    'UYU': 'Peso Uruguayo',
    'PYG': 'Guaraní Paraguayo',
    'CLP': 'Peso Chileno',
    'SAR': 'Riyal Saudí',
    'AUD': 'Dólar Australiano',
    'NZD': 'Dólar Neozelandés',
    'CNY': 'Yuan Chino',
    'MXN': 'Peso Mexicano'
}

@app.route('/convert', methods=['GET'])
def convert_currency():
    """
    Endpoint para convertir moneda.
    Parámetros de consulta esperados: from_currency, to_currency, amount
    """
    # Obtener parámetros de la solicitud
    from_currency = request.args.get('from_currency')
    to_currency = request.args.get('to_currency')
    amount = float(request.args.get('amount', 0))

    # Verificar que las monedas sean válidas
    if from_currency not in CURRENCIES or to_currency not in CURRENCIES:
        return jsonify({'error': 'Moneda no válida'}), 400

    # Obtener tasas de cambio actualizadas
    rates = get_exchange_rates(from_currency)

    # Calcular la conversión
    if from_currency == to_currency:
        converted_amount = amount
    else:
        converted_amount = amount * rates[to_currency]

    # Preparar la respuesta
    response = {
        'from_currency': from_currency,
        'to_currency': to_currency,
        'amount': amount,
        'converted_amount': round(converted_amount, 2)
    }

    return jsonify(response)

def get_exchange_rates(base_currency):
    """
    Obtiene las tasas de cambio actualizadas desde ExchangeRate-API.
    """
    url = f'https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{base_currency}'
    response = requests.get(url)
    data = response.json()
    
    if data['result'] == 'success':
        return data['conversion_rates']
    else:
        raise Exception('Error al obtener tasas de cambio')

if __name__ == '__main__':
    app.run(debug=True)
