<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 📈 AI Stock Analyst

AI Stock Analyst is an AI-powered web application that provides intelligent stock analysis and recommendation insights using Google’s Gemini AI and real-time market data.

The project allows users to enter a stock symbol and receive:

A concise company overview

## Key strengths and risks

- An AI-generated recommendation percentage

- A clear Buy / Hold / Avoid verdict

⚠️ This project is built for educational and analytical purposes only.

## 🚀 Key Features

- 🔍 Stock analysis by entering a stock symbol (e.g., AAPL, TCS.NS)

- 📊 Real-time financial data integration

- 🤖 AI-powered reasoning using Google Gemini

- 📈 Structured, easy-to-read insights

- 🌐 Modern web interface

- 🔐 Secure API key usage via environment variables

## 🧠 How the Project Works

- User enters a stock symbol

- The application fetches financial data

- The data is analyzed by Gemini AI

- AI generates a structured analysis including:

## Company overview

- Strengths

- Weaknesses

- Risks

- Recommendation percentage

- Final verdict

## 🛠️ Tech Stack

- ### Frontend & Backend: Next.js (Node.js)

- ### AI Model: Google Gemini

- ### Stock Data: Yahoo Finance

- ### Language: JavaScript / TypeScript

- ### Environment Management: .env.local

## 📦 Project Structure (High-Level)
```
Ai-Stock-Analyst/
│
├── app/              # Application pages
├── components/       # UI components
├── public/           # Static assets
├── package.json      # Project configuration
├── README.md         # Project documentation
└── .env.local        # Environment variables (local only)
```
## 🔑 Environment Setup

Create a file named .env.local in the root directory:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

This ensures:

- Secure API usage

- Clean separation of configuration

- Easy deployment

▶️ Run the Project Locally
- Prerequisites

Node.js (LTS version)

- Steps
```
npm install
npm run dev
```

- Open in browser:
```
http://localhost:3000
```
🧪 Example Usage

Input:
```
AAPL
```

Output:
```
Company overview

Strengths & risks

AI recommendation percentage

Verdict: Buy / Hold / Avoid
```

- ## 🌍 Deployment

This project can be easily deployed on platforms such as:

- Vercel

- Netlify

Any Node.js-compatible hosting

Simply add the GEMINI_API_KEY as an environment variable on the platform.

## 🎯 Project Highlights

- Uses Google Gemini for reasoning-based analysis

- Clean and explainable AI outputs

- Real-world financial use case

## Suitable for:

- Hackathons

- Academic projects

- AI/ML portfolios

## 📌 Disclaimer

This application is intended only for learning and demonstration purposes.
It does not provide financial or investment advice.

## 👤 Author

Tousif Azim & Shreejita Biswas
GitHub: [Tousif18](https://github.com/Tousif18)
      & [Shreejita](https://github.com/Shreejita-Biswas)
