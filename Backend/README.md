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

### 4️⃣ Common Errors & Fixes

| Error | Cause | Fix |
|-------|--------|-----|
| `Port 5000 already in use` | Another Flask process is running | Kill the old process using `sudo lsof -i :5000` and `sudo kill <PID>` |
| `Permission Denied` | Missing execute permissions on file | Run `chmod +x app.py` or correct file permissions |
| `SSL_ERROR_RX_RECORD_TOO_LONG` | Accessing via HTTPS when only HTTP is configured | Use `http://` instead of `https://` |
| `CORS Policy Error` | Frontend on S3 can’t call backend | Install Flask-CORS and add it to the app |
| `Public Access Denied` | EC2 security group not configured | Add inbound rule for port 5000 |

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

## 📸 Recommended Screenshots for GitHub

You can include the following images:
1. EC2 Instance dashboard showing running Flask app  
2. Flask output in the terminal (`Running on 0.0.0.0:5000`)  
3. Browser showing JSON response from the EC2 public IP  
4. Security group inbound rule configuration (port 5000 open)

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