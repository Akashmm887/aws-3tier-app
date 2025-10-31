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
```

---

### 2️⃣ Launch the Flask App
Run the Flask app using:

```bash
python3 app.py
```

You should see output like:

```
* Running on http://0.0.0.0:5000
* Debugger is active!
```

---

### 3️⃣ Configure Security Group
In the AWS Management Console:
1. Go to your **EC2 Instance → Security → Security Groups**
2. Edit **Inbound Rules**
   - Add a new rule:
     - **Type:** Custom TCP  
     - **Port:** 5000  
     - **Source:** 0.0.0.0/0 (for testing only; later restrict it to your frontend’s IP or CloudFront)
3. Save the changes.

Your Flask app should now be accessible via:
```
http://<your-ec2-public-ip>:5000/
```

---


## 🗂️ Folder Structure

```
backend/
│
├── app.py              # Flask application entry point
├── requirements.txt    # Python dependencies
└── README.md           # Backend documentation
```

---

## 🧠 Key Learnings

- Deployed a **Flask API** on an **Amazon EC2 instance**
- Learned to configure **security groups** and **network access**
- Understood **CORS configuration** for S3 → EC2 communication
- Debugged common deployment issues (port conflicts, permissions, and SSL mismatch)
- Validated communication between frontend and backend

---



## 🧱 Next Steps

- Add a **database layer** using Amazon RDS  
- Secure communication with **HTTPS (SSL)** using a load balancer or CloudFront  
- Containerize the backend using **Docker** and deploy via **ECS or Elastic Beanstalk**

---

## 👨‍💻 Author

**Akash M M**  
Cloud & DevOps Enthusiast | AWS Certified Cloud Practitioner  
[LinkedIn](www.linkedin.com/in/akashmm2004) | [GitHub](https://github.com/Akashmm887)