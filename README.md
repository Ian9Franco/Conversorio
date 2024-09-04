# Currency Converter

## Descripción

Esta aplicación convierte entre diferentes monedas utilizando un backend Flask y una interfaz de usuario en HTML/JavaScript.

## Estructura del Proyecto

- `backend/`: Código fuente del servidor Flask.
- `frontend/`: Archivos estáticos de la interfaz de usuario (HTML, CSS, JavaScript).

## Instalación

1. Clona el repositorio:

    ```bash
    git clone <URL del repositorio>
    cd my_project
    ```

2. Configura el entorno virtual y las dependencias:

    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # En Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

3. Configura las variables de entorno (si es necesario) en el archivo `.env`.

4. Ejecuta el servidor Flask:

    ```bash
    python app.py
    ```

5. Abre `frontend/index.html` en tu navegador para ver la interfaz de usuario.

## Uso

1. Selecciona la moneda de origen y la moneda de destino.
2. Introduce el monto a convertir.
3. La aplicación mostrará el monto convertido.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
