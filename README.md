# 🧩 VectorShift Technical Assessment — Frontend Submission

This project is a submission for the VectorShift Frontend Technical Assessment.  
It demonstrates a **custom flow editor** built using React and React Flow, with a Python FastAPI backend to handle data persistence and submission.

---

## ✨ Key Highlights

- ✅ Dynamic node system with custom `TextNode`, `ColorNode`, and more
- ✅ Intelligent input handle generation using `{{input}}` syntax
- ✅ Auto-resizing text areas for seamless node editing
- ✅ Integrated FastAPI backend for handling node/edge data
- ✅ Deployed with **Netlify** (Frontend) and **Render** (Backend)

---

## 📦 Tech Stack

| Frontend (React)              | Backend (Python)      | Deployment         |
|-------------------------------|-----------------------|--------------------|
| React + React Flow            | FastAPI               | Netlify (Frontend) |
| Standard CSS (`BaseNode.css`) | Uvicorn (ASGI server) | Render (Backend)   |

---

## 📂 Project Structure

VectorShift/

├── frontend/ → React app with React Flow nodes

└── backend/ → FastAPI backend for API handling

---

## 🔗 Live Links

- 🚀 **Frontend (Netlify):**  https://vectornode-editor.netlify.app/
- ⚙️ **Backend (Render):**  https://vectorshift-ass.onrender.com

---

🎥 Demo Video
   https://drive.google.com/file/d/1sd1Uql0E4-gVjY2b632CApWYdji_MpnL/view?usp=sharing
   
----


📌 Notes
 - This project was developed as part of the VectorShift Frontend Technical Assessment.
 - The focus was on creating a custom node editor with dynamic inputs and output handles.
 - All node components are powered by a reusable abstraction: BaseNode.js
 - Styling is handled using standard CSS (via BaseNode.css) for simplicity and flexibility.
 - Backend receives and logs the graph’s nodes and edges as JSON.

Deployed using:

 - Netlify for frontend
 - Render for backend
 - This project demonstrates:
 - Clean React component design
 - Reusability via abstractions
 - Real-time visual editing logic
 - Full-stack integration with FastAPI
 - Deployment and project structure best practices

----


👨‍💻 Author
Sathya Arumugam

🌐 Portfolio :  https://sathy-portfolio7.netlify.app

💻 GitHub    :

📫 Email     : kuttysathya@gmail.com
