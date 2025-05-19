"""
Machine Learning Model for Crop Recommendations
Uses a trained model to recommend crops based on soil conditions
"""
import os
import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Path to save the trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'trained_models', 'crop_model.joblib')
SCALER_PATH = os.path.join(os.path.dirname(__file__), 'trained_models', 'crop_scaler.joblib')

# Create directory if it doesn't exist
os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)

# Sample training data - in a real scenario, this would be loaded from a database or CSV file
# N, P, K, temperature, humidity, ph, rainfall - target: crop
def generate_training_data():
    """Generate synthetic training data for the model."""
    # This is the training data that would typically come from a database or file
    data = {
        'N': np.random.randint(0, 140, 2200),
        'P': np.random.randint(5, 145, 2200),
        'K': np.random.randint(5, 205, 2200),
        'temperature': np.random.uniform(8.83, 43.7, 2200),
        'humidity': np.random.uniform(14.3, 99.9, 2200),
        'ph': np.random.uniform(3.5, 9.9, 2200),
        'rainfall': np.random.uniform(20.2, 298.6, 2200)
    }
    
    # Define crops and their optimal conditions
    crops = [
        'rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas', 'mothbeans',
        'mungbean', 'blackgram', 'lentil', 'pomegranate', 'banana', 'mango',
        'grapes', 'watermelon', 'muskmelon', 'apple', 'orange', 'papaya',
        'coconut', 'cotton', 'jute', 'coffee'
    ]
    
    crop_conditions = {
        'rice': {'N': (60, 120), 'P': (30, 60), 'K': (30, 60), 'temperature': (22, 30), 'humidity': (80, 95), 'ph': (5.5, 6.5), 'rainfall': (150, 300)},
        'maize': {'N': (80, 120), 'P': (40, 60), 'K': (30, 40), 'temperature': (20, 30), 'humidity': (50, 75), 'ph': (5.5, 7.0), 'rainfall': (80, 200)},
        'chickpea': {'N': (30, 50), 'P': (60, 80), 'K': (40, 60), 'temperature': (15, 25), 'humidity': (40, 60), 'ph': (6.0, 8.0), 'rainfall': (40, 100)},
        'kidneybeans': {'N': (30, 50), 'P': (60, 80), 'K': (40, 60), 'temperature': (18, 27), 'humidity': (50, 70), 'ph': (6.0, 7.5), 'rainfall': (60, 120)},
        'pigeonpeas': {'N': (20, 40), 'P': (60, 80), 'K': (30, 50), 'temperature': (20, 35), 'humidity': (60, 80), 'ph': (5.5, 7.0), 'rainfall': (60, 150)},
        'mothbeans': {'N': (20, 40), 'P': (40, 60), 'K': (20, 40), 'temperature': (25, 35), 'humidity': (30, 50), 'ph': (6.0, 7.5), 'rainfall': (30, 100)},
        'mungbean': {'N': (20, 40), 'P': (40, 60), 'K': (20, 40), 'temperature': (25, 35), 'humidity': (70, 80), 'ph': (6.0, 7.5), 'rainfall': (40, 120)},
        'blackgram': {'N': (20, 40), 'P': (40, 60), 'K': (30, 50), 'temperature': (25, 35), 'humidity': (60, 80), 'ph': (5.5, 7.0), 'rainfall': (40, 120)},
        'lentil': {'N': (20, 40), 'P': (40, 60), 'K': (20, 40), 'temperature': (15, 25), 'humidity': (50, 70), 'ph': (6.0, 7.5), 'rainfall': (40, 120)},
        'pomegranate': {'N': (20, 40), 'P': (40, 60), 'K': (40, 60), 'temperature': (20, 35), 'humidity': (40, 60), 'ph': (6.0, 7.5), 'rainfall': (40, 100)},
        'banana': {'N': (80, 120), 'P': (30, 50), 'K': (80, 120), 'temperature': (25, 35), 'humidity': (70, 90), 'ph': (5.5, 7.0), 'rainfall': (100, 200)},
        'mango': {'N': (40, 80), 'P': (30, 50), 'K': (60, 100), 'temperature': (25, 35), 'humidity': (50, 70), 'ph': (5.5, 7.5), 'rainfall': (80, 150)},
        'grapes': {'N': (40, 80), 'P': (40, 60), 'K': (60, 80), 'temperature': (15, 25), 'humidity': (50, 80), 'ph': (6.0, 7.5), 'rainfall': (40, 80)},
        'watermelon': {'N': (60, 80), 'P': (40, 60), 'K': (40, 60), 'temperature': (25, 35), 'humidity': (60, 80), 'ph': (6.0, 7.0), 'rainfall': (40, 100)},
        'muskmelon': {'N': (60, 80), 'P': (40, 60), 'K': (40, 60), 'temperature': (25, 35), 'humidity': (60, 80), 'ph': (6.0, 7.0), 'rainfall': (40, 100)},
        'apple': {'N': (40, 80), 'P': (30, 50), 'K': (60, 100), 'temperature': (15, 25), 'humidity': (60, 80), 'ph': (5.5, 7.0), 'rainfall': (80, 150)},
        'orange': {'N': (40, 80), 'P': (30, 50), 'K': (40, 80), 'temperature': (20, 30), 'humidity': (60, 80), 'ph': (5.5, 7.0), 'rainfall': (60, 120)},
        'papaya': {'N': (60, 100), 'P': (40, 60), 'K': (60, 100), 'temperature': (25, 35), 'humidity': (70, 90), 'ph': (6.0, 7.0), 'rainfall': (80, 150)},
        'coconut': {'N': (40, 80), 'P': (30, 50), 'K': (80, 120), 'temperature': (25, 35), 'humidity': (70, 90), 'ph': (5.5, 7.0), 'rainfall': (150, 250)},
        'cotton': {'N': (80, 120), 'P': (40, 60), 'K': (40, 60), 'temperature': (25, 35), 'humidity': (50, 70), 'ph': (6.0, 8.0), 'rainfall': (60, 150)},
        'jute': {'N': (80, 120), 'P': (40, 60), 'K': (40, 60), 'temperature': (25, 35), 'humidity': (70, 90), 'ph': (5.5, 7.0), 'rainfall': (120, 200)},
        'coffee': {'N': (40, 80), 'P': (30, 50), 'K': (40, 80), 'temperature': (20, 30), 'humidity': (70, 90), 'ph': (5.5, 6.5), 'rainfall': (150, 250)}
    }
    
    # Assign crops based on conditions
    crop_labels = []
    for i in range(2200):
        n, p, k = data['N'][i], data['P'][i], data['K'][i]
        temp, humid = data['temperature'][i], data['humidity'][i]
        ph, rain = data['ph'][i], data['rainfall'][i]
        
        # Find closest crop match
        crop_scores = {}
        for crop, conditions in crop_conditions.items():
            score = 0
            if n >= conditions['N'][0] and n <= conditions['N'][1]:
                score += 1
            if p >= conditions['P'][0] and p <= conditions['P'][1]:
                score += 1
            if k >= conditions['K'][0] and k <= conditions['K'][1]:
                score += 1
            if temp >= conditions['temperature'][0] and temp <= conditions['temperature'][1]:
                score += 1
            if humid >= conditions['humidity'][0] and humid <= conditions['humidity'][1]:
                score += 1
            if ph >= conditions['ph'][0] and ph <= conditions['ph'][1]:
                score += 1
            if rain >= conditions['rainfall'][0] and rain <= conditions['rainfall'][1]:
                score += 1
            
            crop_scores[crop] = score
        
        # Choose crop with highest score
        best_crop = max(crop_scores, key=crop_scores.get)
        
        # Add some randomness to make the dataset more realistic
        if np.random.random() < 0.1:  # 10% chance of picking a different crop
            other_crops = [c for c in crops if c != best_crop]
            best_crop = np.random.choice(other_crops)
            
        crop_labels.append(best_crop)
    
    data['label'] = crop_labels
    return pd.DataFrame(data)

def train_model():
    """Train a machine learning model for crop recommendation."""
    # Get training data
    df = generate_training_data()
    
    # Split features and target
    X = df.drop('label', axis=1)
    y = df['label']
    
    # Split train and test data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # Train the model
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train_scaled, y_train)
    
    # Evaluate the model
    y_pred = model.predict(X_test_scaled)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model accuracy: {accuracy:.4f}")
    
    # Save the model and scaler
    joblib.dump(model, MODEL_PATH)
    joblib.dump(scaler, SCALER_PATH)
    
    return model, scaler

def load_model():
    """Load the trained model and scaler."""
    if not os.path.exists(MODEL_PATH) or not os.path.exists(SCALER_PATH):
        print("Training new model...")
        return train_model()
    
    try:
        model = joblib.load(MODEL_PATH)
        scaler = joblib.load(SCALER_PATH)
        return model, scaler
    except:
        print("Error loading model, training new one...")
        return train_model()

def predict_crop(soil_data):
    """
    Predict the most suitable crop based on soil and climate data.
    
    Args:
        soil_data: Dictionary containing N, P, K, temperature, humidity, ph, rainfall values
        
    Returns:
        List of dictionaries with crop recommendations and confidence scores
    """
    model, scaler = load_model()
    
    # Ensure all required features are present
    required_features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
    for feature in required_features:
        if feature not in soil_data:
            soil_data[feature] = 0  # Default value if missing
    
    # Prepare input data
    input_data = pd.DataFrame([soil_data])
    input_scaled = scaler.transform(input_data[required_features])
    
    # Get prediction probabilities
    crop_probabilities = model.predict_proba(input_scaled)[0]
    crop_names = model.classes_
    
    # Create recommendation list sorted by probability
    recommendations = []
    for crop, probability in sorted(zip(crop_names, crop_probabilities), key=lambda x: x[1], reverse=True):
        confidence = int(probability * 100)
        if confidence > 0:  # Only include crops with some probability
            recommendations.append({
                'name': crop,
                'score': confidence,
                'description': get_crop_description(crop),
                'image': get_crop_image(crop),
                'process': get_crop_process(crop)
            })
    
    return recommendations[:5]  # Return top 5 recommendations

def get_crop_image(crop_name):
    """Get image URL for a crop."""
    images = {
        'rice': 'https://pixabay.com/get/g564c9ce37e679a2bfedb365dfac837af20df0cf3cb001d31d519b72f4c238a573b1e7d1b0f0df97bb3e313f8cf61a21138566e67138820fe461b8cea5bb91a44_1280.jpg',
        'maize': 'https://pixabay.com/get/g2acaab70ccf39605b45327c286f70942d36a65166167733d1bb84c75583b3127ab071d5e8dcab7d8bc41c1e64a3196e4529724eeff4db3c62e8c48fb5361870d_1280.jpg',
        'chickpea': 'https://pixabay.com/get/g0ced5fa0ed5b3b63f5584c2bf9e3fbb7c7aa6de8a9f2cf5ad30f073c5c93ff2c6a1fe66a4acc2d2a1f2979aee98c5f53_1280.jpg',
        'kidneybeans': 'https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg',
        'pigeonpeas': 'https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg',
        'mothbeans': 'https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg',
        'mungbean': 'https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg',
        'blackgram': 'https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg',
        'lentil': 'https://pixabay.com/get/g1d01e3c7a0022e73c10af7d9d65a57a23e3dbfa1c34f7e47fe10bb2f50ce8a88e3e4471fe34c4e0c9b0d65d2b8f631bd_1280.jpg',
        'pomegranate': 'https://pixabay.com/get/gb9f42c53fb3c5d6b1b0e4ae27e57880f18356df06975c0e1c5f1ca5b5ac96a6ad6fe21e88fb99c9ca0e12a2a7e8fa433_1280.jpg',
        'banana': 'https://pixabay.com/get/ga81d5bb8a7c36d3f4d54a9e4fe1a0cc94f70bfad3ef2fa55e7f8cd54d92d6c5ef26d42c7de2b7e4c47c32afc5a43ed55_1280.jpg',
        'mango': 'https://pixabay.com/get/g6eca20e0ef65c8d6aa54d1b8f5e1d6d26c4b9fd82e0e05b0aad48f81bdc5c7f4ac1f2f8fa29fc52a3b20df1f539ceb67b84f43275e71d1c7ca65e9c47a2e9a4c_1280.jpg',
        'grapes': 'https://pixabay.com/get/g8290bb7ab1ed5bc4cad8dd689a2c9e3ae1bcc36f94a0b4c0f7c4bc6f9bad94c5a22c2b5a84b0b4c0b4de6b2eac4767f8eba1b0883df3b99beda91a0c0edb2d35_1280.jpg',
        'watermelon': 'https://pixabay.com/get/gca3839f84e2b6ff69d39ae4c6e8c4e4f4c654f4d4a27b31f9eea1c76bb40c10dc1ca06b21b835dbd94a4a26b46cba37bb87ab20a0a7dace5063a6ec8b5bbcc3b_1280.jpg',
        'muskmelon': 'https://pixabay.com/get/g45057ef92f0d14abf1bf5ee76b00f7e82e6b48172eda3dbdad4a1bca3fa3b1d0b0cb12e25a87c057c1f45911e47ab9e693f6d58dd1ed0bcd89f4c1c08be75761_1280.jpg',
        'apple': 'https://pixabay.com/get/g3d71fa9f4a2b97f79ea2d8fadd0ee0d53c97a2b9b7c2a7caf3c51e80683ce2e78a1df09fef7fb6a85a2e80fe4a9060d3c7a6f10647e4f99bfe70dd3df6a6ac50_1280.jpg',
        'orange': 'https://pixabay.com/get/g7c8f4b4e1c4e29ea5935d7c2c2a84fb1cca88f59b3c17dea359fc26dc7307a0cdf80f46f7e69fdfb18dc4ef10f3ffbd4e96b4cbecefc11f3e2b731d09df4ce9f_1280.jpg',
        'papaya': 'https://pixabay.com/get/g3e8c2d7d9db3d9e7faabc7e09eede10c5213adb8a13d72b1cfa5fc19ce05da0c62ef83bcbcbfd6339be553db3b0f8b0a0ffc290a232d4fcfdd25b2e5f50af9c9_1280.jpg',
        'coconut': 'https://pixabay.com/get/g1f823ca23c359d0e2cd6d4a7de8ca0c4b40a76d1359b3c9c343a89b3dbed17c0aa70c4e40e32f7e9b8d19c5b0ab78bdb30d6c7f06af52e598f2fa9aac4b1d9ca_1280.jpg',
        'cotton': 'https://pixabay.com/get/g15376b072d7e6c8bda571d3ac2a2ee248a05dc2daa38e987bd2473d7fb0fcf6982f5d634c4eefb6377f07e4bab8aa9b6ba611b5e3afbc10db7c0b1b51f35ac03_1280.jpg',
        'jute': 'https://pixabay.com/get/gc9ae4a53f0a923d2a42c0b51dba78b10e85f0d11359f11d8a89e33be8dd50f8deab2da94d28ca3ce40fa3d25989ada96c8e52d2cfce4c64d6c4d45ec11ad04e2_1280.jpg',
        'coffee': 'https://pixabay.com/get/g8b08d6e56e7d1b4e999cce53e2ec3f38c4778c3f538db2e4a2ac17b39a75a01cbf1ccfd1ecb64714e1e5e4c1b5ebb1bb25eca5bbc50dcabfa3347e66e4ef6ecf_1280.jpg'
    }
    return images.get(crop_name, 'https://pixabay.com/get/g94c6235f738b162d56138204a65aee8bd9cd64cc71187c9bcf71b6fd8f0bbd94e6d6a367c159d56749146f09041667237f697f71a9f497c1855adb06c2300e63_1280.jpg')

def get_crop_process(crop_name):
    """Get growing process for a crop."""
    processes = {
        'rice': {
            'seedSelection': 'Select varieties suited to your region and growing method (lowland or upland). Consider disease resistance and grain quality traits.',
            'landPreparation': 'For lowland rice, plow and puddle the soil to create a fine, level seedbed with a hardpan beneath. For upland rice, prepare a well-drained seedbed.',
            'planting': 'For transplanted rice, raise seedlings for 20-30 days before transplanting. For direct seeding, sow pre-germinated seeds onto prepared fields. Plant spacing is typically 20 x 20 cm.',
            'irrigation': 'Maintain 2-5 cm water depth during vegetative stage. Drain field for 7-10 days at maximum tillering. Flood again during reproductive stage. Drain 2-3 weeks before harvest.',
            'fertilization': 'Apply nitrogen in 3 splits: at planting, active tillering, and panicle initiation. Apply all phosphorus at planting and potassium in 2 splits.',
            'pestControl': 'Monitor for stem borers, plant hoppers, and leaf folders. Use integrated pest management practices including resistant varieties.',
            'diseaseManagement': 'Watch for blast, bacterial leaf blight, and sheath blight. Use resistant varieties and proper water management to reduce disease pressure.',
            'harvesting': 'Harvest when 80-85% of grains are straw-colored. Moisture content should be around 20-25%. Dry to 14% moisture for storage.'
        },
        'maize': {
            'seedSelection': 'Select hybrid varieties suited to your region and purpose (grain or silage). Consider disease resistance and maturity days.',
            'landPreparation': 'Deep plow to 8-10 inches and create a well-pulverized seedbed. Remove crop residues or incorporate them well. Apply lime if pH is below 5.8.',
            'planting': 'Plant seeds 1.5-2 inches deep with row spacing of 30 inches and plant spacing of 8-10 inches. Seed rate should be 20-25 kg/ha. Plant when soil temperature reaches 50-55°F (10-13°C).',
            'irrigation': 'Critical watering periods are during tasseling, silking, and grain filling. Maintain adequate soil moisture without waterlogging.',
            'fertilization': 'Apply 30% nitrogen, all phosphorus and potassium at planting. Side-dress remaining nitrogen when plants are knee-high. Total N requirement is 150-180 kg/ha.',
            'pestControl': 'Monitor for corn borers, armyworms, and rootworms. Apply insecticides when threshold levels are reached or use Bt corn varieties.',
            'diseaseManagement': 'Watch for northern corn leaf blight, gray leaf spot, and stalk rots. Use resistant varieties and crop rotation to minimize disease pressure.',
            'harvesting': 'Harvest for grain when kernels show black layer formation and moisture is 23-25%. Harvest for silage at 65-70% moisture when kernels are at dough stage.'
        }
    }
    
    # Return a generic growing process if the specific crop isn't in our database
    default_process = {
        'seedSelection': 'Select high-quality, disease-resistant varieties suited to your local climate and soil conditions.',
        'landPreparation': 'Prepare soil by plowing and creating a fine seedbed. Remove weeds and incorporate organic matter if available.',
        'planting': 'Plant at the appropriate depth and spacing for your crop. Consider seasonal timing based on local climate patterns.',
        'irrigation': 'Maintain consistent soil moisture, especially during critical growth stages. Avoid both waterlogging and drought stress.',
        'fertilization': 'Apply balanced fertilizer based on soil test results. Consider split applications for nitrogen to maximize efficiency.',
        'pestControl': 'Monitor regularly for pests and apply integrated pest management strategies. Use chemical controls only when necessary.',
        'diseaseManagement': 'Practice preventative measures like crop rotation and proper spacing. Monitor for early signs of disease and treat promptly.',
        'harvesting': 'Harvest at optimal maturity for your intended use. Ensure proper drying and storage conditions to maintain quality.'
    }
    
    return processes.get(crop_name, default_process)

def get_crop_description(crop_name):
    """Get description for a crop."""
    descriptions = {
        'rice': 'A cereal grain that is the most important staple food for a large part of the world's population.',
        'maize': 'A cereal grain first domesticated in Mexico and now grown globally for food, feed, and fuel.',
        'chickpea': 'A legume rich in protein, commonly used in Indian subcontinent and Mediterranean cuisines.',
        'kidneybeans': 'A variety of common bean with large, kidney-shaped seeds and valued for its protein content.',
        'pigeonpeas': 'A perennial legume known for its drought resistance and soil enrichment properties.',
        'mothbeans': 'A drought-resistant legume grown primarily in arid and semi-arid regions.',
        'mungbean': 'A small, green bean used in Asian cuisine, especially for sprouting.',
        'blackgram': 'A bean grown in the Indian subcontinent, rich in protein and used in various dishes.',
        'lentil': 'Small, lens-shaped legumes that cook quickly and are a nutritional powerhouse.',
        'pomegranate': 'A fruit-bearing deciduous shrub with red, juicy arils rich in antioxidants.',
        'banana': 'A widely consumed fruit known for its high potassium content and natural sweetness.',
        'mango': 'A juicy stone fruit rich in vitamins and known as the "king of fruits" in many regions.',
        'grapes': 'Small, sweet berries that grow in clusters on vines, used for wine, juice, and fresh consumption.',
        'watermelon': 'A large, sweet fruit with high water content, perfect for hot summer days.',
        'muskmelon': 'A sweet, aromatic fruit related to cantaloupe, with orange flesh and a netted rind.',
        'apple': 'A crisp, sweet fruit grown on deciduous trees, rich in fiber and antioxidants.',
        'orange': 'A citrus fruit rich in vitamin C, with a bright color and refreshing, tangy flavor.',
        'papaya': 'A tropical fruit with soft, orange flesh, rich in papain enzyme and vitamins.',
        'coconut': 'A tropical fruit with a hard shell containing white flesh and liquid, used in various cuisines.',
        'cotton': 'A soft, fluffy staple fiber that grows in a protective case around the seeds of cotton plants.',
        'jute': 'A long, soft, shiny vegetable fiber used for making burlap, hessian, or gunny cloth.',
        'coffee': 'A brewed drink prepared from roasted coffee beans, the seeds of berries from certain coffee species.'
    }
    return descriptions.get(crop_name, f"{crop_name.capitalize()} - A crop suitable for your soil conditions.")

# Train the model if this file is run directly
if __name__ == "__main__":
    train_model()