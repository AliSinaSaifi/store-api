# Store API

This is a simple Store API built using **Node.js**, **Express.js**, and **MongoDB**. It provides endpoints for fetching products with filtering, sorting, pagination, and numeric filters.

## 🚀 Features
- **Filtering** (e.g., by company, name, featured).
- **Sorting** (e.g., `?sort=price,-rating`).
- **Pagination** (e.g., `?page=2&limit=5`).
- **Numeric filtering** (e.g., `?numericFilters=price>30,rating>=4`).
- **Error handling** middleware.

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv (for environment variables)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/AliSinaSaifi/store-api.git
   cd store-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## 🔗 API Endpoints

### **Base URL**:  
`http://localhost:3000`

### **1️⃣ Get All Products**
- **Endpoint:** `GET /api/v1/products`
- **Query Parameters:**
  - `?name=table` → Search by name
  - `?company=ikea` → Filter by company
  - `?featured=true` → Filter featured products
  - `?sort=price,-rating` → Sort by price (ascending) and rating (descending)
  - `?fields=name,price` → Select specific fields
  - `?numericFilters=price>30,rating>=4` → Numeric filters

### **2️⃣ Get Static Products**
- **Endpoint:** `GET /api/v1/products/static`
- Returns sample products where `price > 30`.

---
🔥 **Happy Coding!** 🚀

