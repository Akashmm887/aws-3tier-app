# 🧩 Backend - Flask API (EC2)

This directory contains the backend logic of the AWS 2-tier web app.  
The Flask API runs on an **EC2 instance** and provides data to the frontend hosted on S3.

---

## ⚙️ Tech Stack
- **Python 3.9+**
- **Flask** for backend server
- **Flask-CORS** for enabling cross-origin requests from S3
- **PyMySQL** (future integration for RDS)

---

## 🚀 How to Run on EC2

### 1️⃣ Install Dependencies
```bash
sudo yum update -y
sudo yum install python3 -y
pip3 install -r requirements.txt
