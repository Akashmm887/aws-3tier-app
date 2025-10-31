# AWS Flask + S3 Web App ☁️

A simple cloud application demonstrating a **2-tier AWS architecture**:
- **Frontend:** Hosted on Amazon S3 (Static Website Hosting)
- **Backend:** Flask API running on an EC2 instance

---

## 🏗️ Architecture

1️⃣ **Frontend** — HTML/CSS/JS uploaded to an S3 bucket.  
2️⃣ **Backend** — Flask app on EC2 responding to API requests.  
3️⃣ **(Later)** RDS integration for database layer.

---

## 🚀 Setup Instructions

### 🧩 Backend (Flask on EC2)
```bash
sudo yum update -y
sudo yum install python3 -y
pip3 install flask flask_cors pymysql
python3 app.py
```

Then, open your browser and visit:

```
http://<your-ec2-public-ip>:5000/
```

If you see:
```
Hello from AWS EC2 Flask backend!
```
🎉 Congratulations — your backend is live!

---

### 🌐 Frontend (S3 Static Website)
1. Go to **Amazon S3** → Create Bucket  
2. Uncheck “Block all public access”  
3. Enable **Static website hosting** under Properties  
4. Upload the following files:
   - `index.html`
   - `style.css`
   - `script.js`
5. Paste the **bucket policy** to make the content public (replace with your bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::akash-cloud-frontend/*"
    }
  ]
}
```

6. Copy the **S3 static website endpoint** and open it in your browser.

You should see a button or interface that fetches data from your EC2 backend when clicked!

---

## 🧠 Key Learnings

| Concept | What I Learned |
|----------|----------------|
| **EC2 Deployment** | Launched and configured an instance using SSH |
| **Security Groups** | Opened custom port 5000 for HTTP requests |
| **Flask API Setup** | Created a Python backend responding with JSON |
| **S3 Hosting** | Configured a static website and bucket policy |
| **CORS** | Allowed communication between frontend (S3) and backend (EC2) |
| **Debugging** | Solved issues like `Permission Denied`, `Port in Use`, and `CORS errors` |

---

## 🧩 Architecture Diagram

![Architecture Diagram](architecture-diagram.png)

_The frontend (S3) communicates with the backend (EC2 Flask API).  
RDS can later be added for persistent data storage._

---

## 🐞 Common Issues & Fixes

| Issue | Root Cause | Fix |
|--------|-------------|-----|
| `Permission denied (publickey)` | Wrong or missing PEM file permissions | Run `chmod 400 key.pem` |
| `Flask module not found` | Flask not installed for the current user | Use `pip3 install flask --user` |
| `Port 5000 in use` | Previous Flask process running | Kill with `sudo lsof -i :5000` |
| `CORS policy error` | Frontend request blocked by browser | Install and configure `flask_cors` |
| `403 Forbidden on S3` | Bucket policy or public access not enabled | Add correct bucket policy |

---

## 📸 Recommended Screenshots for GitHub

Include the following in your GitHub repo to strengthen your portfolio:
- EC2 instance dashboard (running status)
- Flask output in terminal (`Running on 0.0.0.0:5000`)
- JSON data displayed in the browser
- S3 static website endpoint working with your frontend
- Architecture diagram

---

## 🧱 Future Enhancements
- Add **Amazon RDS** as a database layer (MySQL/PostgreSQL)
- Enable **HTTPS** via **ACM + Load Balancer**
- Implement **IAM roles** for secure access
- Automate deployments using **AWS CLI or Terraform**
- Containerize backend with **Docker** and deploy via **ECS**

---

## 📂 Project Structure
```
aws-2tier-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
│
├── architecture-diagram.png
└── README.md
```

---

## 👨‍💻 Author

**Akash M M**  
Cloud & DevOps Enthusiast | AWS Certified Cloud Practitioner  
[LinkedIn](www.linkedin.com/in/akashmm2004) • [GitHub](www.github.com/Akashmm887)

---

⭐ **If you liked this project, don’t forget to star the repository!**