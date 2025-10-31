# AWS Flask + S3 Web App ☁️

A simple cloud application demonstrating a 2-tier AWS architecture:
- **Frontend:** Hosted on Amazon S3 (Static Website Hosting)
- **Backend:** Flask API running on an EC2 instance

---

## 🏗️ Architecture

1️⃣ **Frontend** — HTML/CSS/JS uploaded to an S3 bucket.  
2️⃣ **Backend** — Flask app on EC2 responding to API requests.  
3️⃣ **(Later)** RDS integration for database layer.

---

## 🚀 Setup Instructions

### Backend (Flask on EC2)
```bash
sudo apt update
sudo apt install python3-pip
pip3 install flask flask_cors
python3 app.py
