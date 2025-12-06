# 📈 Web Scraping Backend: Scraper & API

## 🌟 Project Overview

This project is a high-performance **backend service** built with **Node.js and TypeScript** that centralizes the real-time collection and storage of market data.

**Functionality:**
The service performs **scheduled Web Scraping** of key material prices (iron, steel, copper) and currencies (USD dollar) and persists this data in a **PostgreSQL** database.

**Purpose:**
To provide a local and optimized data source. External clients can consume historical and current pricing by connecting directly to the database or via a REST API.

![Diagram showing a Node.js scraper extracting data and storing it in PostgreSQL, ready to be queried by clients.](https://placehold.co/800x200/png?text=Architecture+of+the+Price+Tracker+-+Scraper+and+PostgreSQL)

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Language** | **TypeScript** | Strict typing, type safety, and scalability. |
| **Runtime** | **Node.js** | Asynchronous execution environment. |
| **Scraping Libraries** | `axios`, `cheerio` (or your chosen library) | HTTP requests and efficient DOM manipulation. |
| **Database** | **PostgreSQL** | Historical data persistence and optimized queries. |
| **Deployment** | **Docker & Docker Compose** | Consistent and isolated local environment. |

## 🚀 Setup & Installation

Follow these steps to bring up the development environment using **Docker Compose** and all its dependencies.

### 1. Clone the Repository

```bash
git clone [https://github.com/Levir7/web-scraping.git](https://github.com/Levir7/web-scraping.git)
cd web-scraping
```
### 2. Configure Environment Variables
```
# example of .env
PORT=3000
DB_HOST=price_db
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=price_db
```

### 3. Run with Docker Compose
```
docker-compose up --build -d
```

The application will be accessible at http://localhost:3000.
