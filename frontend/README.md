# 🌐 AWS Frontend - Static Website Hosted on S3

This is the **frontend layer** of my AWS 2-tier cloud application project.  
It’s a simple static website hosted on **Amazon S3** that interacts with a Flask backend running on **Amazon EC2**.  

The goal of this part was to understand how a frontend hosted on S3 can securely communicate with a backend API on EC2 using HTTP requests.

---

## ⚙️ Tech Stack

| Component | Technology Used |
|------------|----------------|
| **Structure** | HTML5 |
| **Styling** | CSS3 |
| **Interactivity / Backend Calls** | JavaScript (Fetch API) |
| **Hosting** | Amazon S3 (Static Website Hosting) |

---

## 🚀 Deployment Steps

### 1️⃣ Create an S3 Bucket
- Go to **Amazon S3** → Create Bucket  
- Bucket name: `akash-cloud-frontend`  
- Region: `eu-north-1`  
- **Uncheck “Block all public access”**  
- Create the bucket  

### 2️⃣ Enable Static Website Hosting
- Go to **Properties → Static website hosting**  
- Choose: **Use this bucket to host a website**  
- Set `index.html` as both the index and error document  

### 3️⃣ Upload Files
Upload the following files to your S3 bucket:
- `index.html`
- `style.css`
- `script.js`

Make sure all files are in the **root directory** of the bucket (not inside folders).

---

### 4️⃣ Set Permissions
1. Go to the **Permissions** tab → Add the following **Bucket Policy** (replace your-bucket-name with your actual bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}