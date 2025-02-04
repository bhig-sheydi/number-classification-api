# Number Classification API

## 📌 Overview
The **Number Classification API** is a simple Express.js-based API that classifies numbers based on predefined rules. This API allows users to send numbers and receive classifications, such as even, odd, prime, or composite.

---

## 🚀 Features
- Classifies numbers as **even**, **odd**, **prime**, or **composite**.
- Fast and lightweight API built with **Express.js**.
- CORS enabled for cross-origin requests.
- Uses **Axios** for external API calls (if needed).

---

## 🛠 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/bhig-sheydi/number-classification-api.git
cd number-classification-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Server
```sh
node server.js
```

The API will run on `https://number-classification-api.vercel.app` by default.

---

## 📡 API Endpoints

### 1️⃣ **Classify a Number**
#### ➡️ `GET /api/classify-number`

**Request Body (JSON):**
```json
{
  "number": 7
}
```

**Response:**
```json
{
  "number": 7,
  "classification": "prime"
}
```

#### Possible Classifications:
- `even`
- `odd`
- `prime`
- `composite`

---

## ⚙️ Technologies Used
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **CORS** – Handles cross-origin requests
- **Axios** – (If used for external data fetching)

---

## 📌 Folder Structure
```
number-classification-api/
│── routes/
│   ├── classifyRoute.js  # Handles number classification logic
│── server.js              # Main server file
│── package.json          # Dependencies and scripts
│── README.md             # API Documentation
```

---

## 📬 Contributing
Feel free to fork this repository and contribute! Pull requests are welcome.

---



---



