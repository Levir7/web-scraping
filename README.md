# 📈 Price Tracker Backend: Scraper & API

## 🌟 Visión General del Proyecto

Este proyecto es un servicio **backend** de alto rendimiento construido con **Node.js y TypeScript** que centraliza la recolección y el almacenamiento de datos de mercado en tiempo real.

**Funcionalidad:**
El servicio realiza **Web Scraping programado** de precios de materiales clave (hierro, acero, cobre) y monedas (dólar USD) y persiste estos datos en una base de datos **PostgreSQL**.

**Propósito:**
Proporcionar una fuente de datos local y optimizada. Los clientes externos pueden consumir los precios históricos y actuales conectándose directamente a la base de datos o mediante una API REST.


## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Lenguaje** | **TypeScript** | Rigurosidad, tipado estricto y escalabilidad. |
| **Runtime** | **Node.js** | Entorno de ejecución asíncrono. |
| **Librerías Scraping** | `axios`, `cheerio` (o la librería que uses) | Solicitudes HTTP y manipulación eficiente del DOM. |
| **Base de Datos** | **PostgreSQL** | Persistencia de datos históricos, consultas optimizadas. |
| **Despliegue** | **Docker & Docker Compose** | Entorno local consistente y aislado. |

## 🚀 Puesta en Marcha (Setup)

Sigue estos pasos para levantar el entorno de desarrollo con **Docker Compose** y todas sus dependencias.

### 1. Clonar el Repositorio

```bash
git clone [https://github.com/Levir7/price-tracker-backend.git](https://github.com/Levir7/web-scraping.git)
cd web-scraping
```
### 2. Configurar Variables de Entorno
```
# Ejemplo de .env
PORT=3000
DB_HOST=price_db
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=price_tracker_db
```

### 3. Ejecutar con Docker Compose la Base de Datos
```
docker-compose up --build -d
```

La aplicación será accesible en http://localhost:3000.
