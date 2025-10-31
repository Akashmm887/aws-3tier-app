from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend is live on EC2 😎"

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello from AWS EC2 Flask backend!",
        "status": "success"
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
