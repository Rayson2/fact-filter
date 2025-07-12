# 🧠 Fact Filter - Frontend

**Fact Filter** is an AI-powered web application that allows users to upload videos and automatically fact-check the spoken content using cutting-edge technologies like **Whisper** (for transcription), **Gemini**/**Custom NLP models** (for fact-checking), and provides a user-friendly interface to view the results.

This repository contains the **React frontend** of the project.

---

## 🚀 Features

- 🎥 Upload video files (MP4, MOV, etc.)
- 🗣️ Transcribe video/audio using **OpenAI Whisper**
- 🧠 Fact-check using:
  - **Gemini AI**
  - **Custom NLP model**
- ✅ Output results: Real / Fake / Opinion
- 📱 Responsive UI using SCSS

---

## 🏗️ Project Structure

```
fact-filter/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Static images/icons
│ ├── components/ # UI components (e.g. FileUpload, NavBar)
│ ├── hooks/ # Custom hooks (e.g. useFactCheck)
│ ├── pages/Format # Route-based components (Fact checking UI)
│ ├── styles/ # SCSS files
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point
├── .env
├── package.json
└── README.md
```



---

## 🧪 Prerequisites

- Node.js >= 18
- npm 
- Backend service running (FastAPI preferred)

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/rayson2/fact-filter.git
cd fact-filter

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 📁 Usage

1. **Upload** a video file via the UI.
2. Select the **fact-checking source**: Gemini or Custom NLP.
3. Click **Submit** to start processing.
4. View:
   - **Transcript**
   - **Fact-check result** (Real/Fake/Opinion)


---

## 🧩 Key Components

| Component        | Description                                              |
|------------------|----------------------------------------------------------|
| `FileUpload`     | Drag-and-drop video upload with validation               |
| `SourceSelector` | Choose between Gemini or Custom NLP                      |
| `FactCheckResult`| Shows results (status, description, method)              |
| `LoadingPopup`   | Displays while video is being processed                  |
| `useFactCheck`   | Hook for managing file, source, API calls                |


---

## 📦 API Endpoints

| Endpoint                 | Method | Description                                |
|--------------------------|--------|--------------------------------------------|
| `/fact-check-video`      | POST   | Accepts video file, returns fact-check     |
| `/fact-check-audio`      | POST   | Accepts audio file, returns fact-check     |
| `/fact-check-Image`       | POST   | Accepts Image file, returns fact-check       |
| `/fact-check-text`       | POST   | Accepts raw text, returns fact-check       |

---

## 🎨 Styling

- Written using **SCSS**
- Theme colors: `$primary-color: #53a1d6;`, `$secondary-color: #f0f0f0`, `$text-color: #1a1a1a`, etc.
- Fully responsive for mobile, tablet, and desktop views

---





## 📤 Deployment

Use any of these options:
- **Vercel**


### Example build & deploy:

```bash
npm run build
# then deploy dist/ folder to your hosting provider
```

---

## 🛠️ Tech Stack

- **React** (Vite or CRA)
- **SCSS**
- **Axios** (for API calls)
- **Whisper** (via backend)
- **Gemini Pro API** (via backend)
- **Custom NLP model** (Flask/FastAPI backend)
- **EmailJS** (contact form)


---

## 📌 TODO / Future Features


- [ ] Email report delivery


---

## 👨‍💻 About the Developer

- Rayson – Frontend development, integration, UI


---

## 📄 License

MIT License

---

## 🧠 Credits

- OpenAI Whisper
- Google Gemini
- ReactJS
- Vite