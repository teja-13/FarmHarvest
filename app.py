import os
import logging
import json
from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session, send_file
from flask_login import LoginManager, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import uuid
import io
from models import User

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_secret_key")

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# User loader for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    # Load user from JSON file
    try:
        with open('users.json', 'r') as f:
            users = json.load(f)
            for user in users:
                if user['id'] == user_id:
                    return User(user['id'], user['username'], user['email'], user['password_hash'])
    except (FileNotFoundError, json.JSONDecodeError):
        pass
    return None

# Ensure users.json exists
def init_users_file():
    try:
        with open('users.json', 'r') as f:
            json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        with open('users.json', 'w') as f:
            json.dump([], f)

init_users_file()

# Routes
@app.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        try:
            with open('users.json', 'r') as f:
                users = json.load(f)
                for user_data in users:
                    if user_data['username'] == username:
                        user = User(
                            user_data['id'], 
                            user_data['username'], 
                            user_data['email'], 
                            user_data['password_hash']
                        )
                        if check_password_hash(user.password_hash, password):
                            login_user(user)
                            flash('Logged in successfully!', 'success')
                            return redirect(url_for('dashboard'))
                
                flash('Invalid username or password', 'danger')
        except (FileNotFoundError, json.JSONDecodeError):
            flash('User database error', 'danger')
        
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        
        if password != confirm_password:
            flash('Passwords do not match!', 'danger')
            return render_template('register.html')
        
        try:
            with open('users.json', 'r') as f:
                users = json.load(f)
                
                # Check if username or email already exists
                for user in users:
                    if user['username'] == username:
                        flash('Username already exists!', 'danger')
                        return render_template('register.html')
                    if user['email'] == email:
                        flash('Email already exists!', 'danger')
                        return render_template('register.html')
                
                # Create new user
                user_id = str(uuid.uuid4())
                new_user = {
                    'id': user_id,
                    'username': username,
                    'email': email,
                    'password_hash': generate_password_hash(password)
                }
                users.append(new_user)
                
                with open('users.json', 'w') as f:
                    json.dump(users, f, indent=4)
                
                user = User(user_id, username, email, new_user['password_hash'])
                login_user(user)
                flash('Account created successfully!', 'success')
                return redirect(url_for('dashboard'))
                
        except (FileNotFoundError, json.JSONDecodeError):
            # Create new users file if it doesn't exist
            with open('users.json', 'w') as f:
                user_id = str(uuid.uuid4())
                new_user = {
                    'id': user_id,
                    'username': username,
                    'email': email,
                    'password_hash': generate_password_hash(password)
                }
                json.dump([new_user], f, indent=4)
                
                user = User(user_id, username, email, new_user['password_hash'])
                login_user(user)
                flash('Account created successfully!', 'success')
                return redirect(url_for('dashboard'))
        
    return render_template('register.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Logged out successfully!', 'success')
    return redirect(url_for('login'))

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/soil-test')
@login_required
def soil_test():
    return render_template('soil_test.html')

@app.route('/crop-recommendations')
@login_required
def crop_recommendations():
    return render_template('crop_recommendations.html')

@app.route('/disease-detection')
@login_required
def disease_detection():
    return render_template('disease_detection.html')

@app.route('/chatbot')
@login_required
def chatbot():
    return render_template('chatbot.html')

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')

@app.route('/generate-pdf', methods=['POST'])
@login_required
def generate_pdf():
    try:
        data = request.json
        # In a real app, we would generate PDF here
        # For now, we'll just return a success response
        # The actual PDF generation will be handled client-side
        return jsonify({"status": "success"}), 200
    except Exception as e:
        app.logger.error(f"Error generating PDF: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

# Error handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('layout.html', error="Page not found"), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('layout.html', error="Internal server error"), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
