# 🔗 URL Shortener

A full-stack URL shortener built with **React, TypeScript, Express, PostgreSQL, and Prisma**.

The application allows users to create short, shareable URLs and provides analytics to understand how those links are being used.

## ✨ Features

### 🔐 Authentication

* User registration and login
* JWT-based authentication
* Protected routes
* Secure password handling

### 🔗 URL Shortening

* Create short URLs from long URLs
* Generate unique short codes
* Redirect users to the original URL
* Manage created short URLs

### 📊 Analytics

Track how your shortened URLs are performing with:

* Total click count
* Unique visitor estimation
* Clicks over time
* Browser analytics
* Operating system analytics
* Device analytics
* Geographic analytics
* Referrer/source analytics
* Detailed click records

### 🛡️ Privacy

* Raw IP addresses are not stored
* IP addresses are hashed before being persisted
* Analytics data is associated with shortened URLs

---

## 🏗️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* TypeScript
* JWT

### Database

* PostgreSQL
* Prisma ORM

### Development Tools

* Git
* GitHub
* Postman / Thunder Client

---

## 🧠 How It Works

The application follows a simple request flow.

```text
User
 │
 │ Creates long URL
 ▼
React Frontend
 │
 │ POST /api/urls
 ▼
Express API
 │
 │ Generate short code
 ▼
PostgreSQL
 │
 │ Store URL
 ▼
Short URL Created
 │
 │
 ▼
https://your-domain.com/abc123
```

When someone visits the shortened URL:

```text
User
 │
 │ GET /abc123
 ▼
Express Redirect Service
 │
 ├── Find URL
 │
 ├── Collect request metadata
 │
 ├── Store click analytics
 │
 └── Redirect
 │
 ▼
Original URL
```

---

## 📈 Analytics Architecture

Every time a shortened URL is accessed, the application can collect information such as:

```text
Click
 │
 ├── Browser
 ├── Operating System
 ├── Device
 ├── Country
 ├── City
 ├── Referrer
 ├── IP Hash
 └── Timestamp
```

The collected data is then aggregated to provide analytics such as:

```text
Summary
├── Total Clicks
├── Unique Visitors
├── Top Browser
└── Top Device

Analytics
├── Clicks Over Time
├── Browser Distribution
├── Device Distribution
├── OS Distribution
├── Geographic Distribution
└── Referrer Distribution
```

---

## 🗄️ Data Model

The core application consists of shortened URLs and click analytics.

### ShortUrl

```text
ShortUrl
├── id
├── originalUrl
├── shortCode
├── userId
└── createdAt
```

### Click

```text
Click
├── id
├── browser
├── os
├── device
├── country
├── city
├── referer
├── ipHash
├── urlId
└── createdAt
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* PostgreSQL

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-url-shortener.git
```

```bash
cd your-url-shortener
```

---

### 2. Install dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the backend directory.

```env
DATABASE_URL="your_postgresql_connection_string"

JWT_SECRET="your_jwt_secret"

IP_HASH_SECRET="your_ip_hash_secret"

PORT=5000
```

Never commit your `.env` file to GitHub.

Add it to `.gitignore`:

```gitignore
.env
```

---

### 4. Set up Prisma

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

---

### 5. Start the backend

```bash
npm run dev
```

---

### 6. Start the frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

The application should now be available through your Vite development server.

---

## 🔌 API Overview

### Authentication

```http
POST /api/auth/register
```

Register a new user.

```http
POST /api/auth/login
```

Authenticate an existing user.

---

### URL Management

```http
POST /api/urls
```

Create a shortened URL.

```http
GET /api/urls
```

Get URLs created by the authenticated user.

```http
GET /api/urls/:id
```

Get a specific shortened URL.

```http
DELETE /api/urls/:id
```

Delete a shortened URL.

---

### Redirect

```http
GET /:shortCode
```

Redirects the user to the original URL and records the click.

Example:

```text
https://your-domain.com/abc123
```


## 📁 Project Structure

```text
url-shortener/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.ts
|   |   └── server.ts   
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   │
│   └── package.json
│
└── README.md
```

---

## 🔒 Security Considerations

The application follows several security practices:

* JWT authentication for protected API routes
* Passwords are stored using secure hashing
* Raw IP addresses are not persisted
* IP-based analytics use hashed identifiers
* Environment variables are used for secrets
* Protected resources require authentication
* User ownership should be verified before accessing or modifying URLs

---

## 🔮 Future Improvements

Planned improvements include:

* [ ] Custom aliases for shortened URLs
* [ ] URL expiration
* [ ] QR code generation
* [ ] Advanced date-range analytics
* [ ] Real-time analytics
* [ ] Geographic map visualization
* [ ] Improved bot detection
* [ ] Rate limiting
* [ ] Redis caching
* [ ] Click analytics export
* [ ] API documentation
* [ ] Production deployment
* [ ] Custom domains

---

## 🎯 Project Goals

This project was built to understand and implement real-world backend concepts including:

* REST API design
* Authentication and authorization
* Database design
* Prisma ORM
* PostgreSQL
* URL redirection
* Request metadata collection
* Analytics aggregation
* Privacy-conscious IP tracking
* Full-stack TypeScript development

---

## 📌 Status

🚧 **Currently in development**

The core URL shortening, redirection, click tracking, and analytics functionality is being actively developed.
