"""
Routes for machine learning-powered features in AgroAssist
"""
import os
import json
import sys
import importlib.util
from flask import Blueprint, request, jsonify, current_app
from werkzeug.utils import secure_filename

# Create a class for handling ML operations
class MLControllerProxy:
    """Proxy class to simulate ML functionality until models are trained."""
    
    @staticmethod
    def get_crop_recommendations(soil_data):
        """Get crop recommendations based on soil data."""
        # Placeholder recommendations until ML model is fully trained
        recommendations = [
            {
                'name': 'rice',
                'score': 95,
                'description': 'A cereal grain that is the most important staple food for a large part of the world population.',
                'image': 'https://pixabay.com/get/g564c9ce37e679a2bfedb365dfac837af20df0cf3cb001d31d519b72f4c238a573b1e7d1b0f0df97bb3e313f8cf61a21138566e67138820fe461b8cea5bb91a44_1280.jpg',
                'process': {
                    'seedSelection': 'Select varieties suited to your region and growing method (lowland or upland). Consider disease resistance and grain quality traits.',
                    'landPreparation': 'For lowland rice, plow and puddle the soil to create a fine, level seedbed with a hardpan beneath. For upland rice, prepare a well-drained seedbed.',
                    'planting': 'For transplanted rice, raise seedlings for 20-30 days before transplanting. For direct seeding, sow pre-germinated seeds onto prepared fields. Plant spacing is typically 20 x 20 cm.',
                    'irrigation': 'Maintain 2-5 cm water depth during vegetative stage. Drain field for 7-10 days at maximum tillering. Flood again during reproductive stage. Drain 2-3 weeks before harvest.',
                    'fertilization': 'Apply nitrogen in 3 splits: at planting, active tillering, and panicle initiation. Apply all phosphorus at planting and potassium in 2 splits.',
                    'pestControl': 'Monitor for stem borers, plant hoppers, and leaf folders. Use integrated pest management practices including resistant varieties.',
                    'diseaseManagement': 'Watch for blast, bacterial leaf blight, and sheath blight. Use resistant varieties and proper water management to reduce disease pressure.',
                    'harvesting': 'Harvest when 80-85% of grains are straw-colored. Moisture content should be around 20-25%. Dry to 14% moisture for storage.'
                }
            },
            {
                'name': 'maize',
                'score': 88,
                'description': 'A cereal grain first domesticated in Mexico and now grown globally for food, feed, and fuel.',
                'image': 'https://pixabay.com/get/g2acaab70ccf39605b45327c286f70942d36a65166167733d1bb84c75583b3127ab071d5e8dcab7d8bc41c1e64a3196e4529724eeff4db3c62e8c48fb5361870d_1280.jpg',
                'process': {
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
        ]
        
        # Sort by compatibility with provided soil data
        n = soil_data.get('N', 0)
        p = soil_data.get('P', 0)
        k = soil_data.get('K', 0)
        ph = soil_data.get('ph', 7.0)
        
        # Adjust scores based on soil parameters
        if 60 <= n <= 120 and 30 <= p <= 60 and 30 <= k <= 60 and 5.0 <= ph <= 6.5:
            # Ideal for rice
            recommendations[0]['score'] = 95
            recommendations[1]['score'] = 88
        elif 80 <= n <= 120 and 40 <= p <= 60 and 30 <= k <= 40 and 5.8 <= ph <= 7.0:
            # Ideal for corn
            recommendations[0]['score'] = 85
            recommendations[1]['score'] = 98
        
        # Sort by score
        recommendations.sort(key=lambda x: x['score'], reverse=True)
        
        return recommendations
    
    @staticmethod
    def detect_plant_disease(image_data):
        """Detect disease in a plant image."""
        # Placeholder detection result until ML model is fully trained
        return {
            "disease_detected": "Tomato___Late_blight",
            "confidence": 92.5,
            "top_predictions": [
                {
                    "disease": "Tomato___Late_blight",
                    "confidence": 92.5,
                    "description": "Late blight in tomatoes appears as irregularly shaped, water-soaked lesions that rapidly enlarge to form brown or black areas, with white mold in humid conditions.",
                    "treatment": "Apply fungicides preventatively during cool, wet conditions. Use resistant varieties. Improve air circulation. Remove volunteer plants. Destroy infected plant material."
                },
                {
                    "disease": "Tomato___Early_blight",
                    "confidence": 5.2,
                    "description": "Early blight in tomatoes shows as dark, target-like spots on lower leaves that gradually enlarge and may cause leaf drop.",
                    "treatment": "Apply fungicides preventatively. Practice crop rotation. Improve air circulation by proper spacing and staking. Remove lower infected leaves. Mulch to prevent soil splash."
                }
            ]
        }
    
    @staticmethod
    def process_image_file(file):
        """Process an uploaded image file."""
        # In the real implementation, this would convert the image to a format suitable for ML
        return file
    
    @staticmethod
    def get_chatbot_response(query, conversation_history=None):
        """Get a response from the agricultural chatbot."""
        # Placeholder responses based on query keywords
        if 'soil' in query.lower():
            return {"response": "Soil health is fundamental to successful farming. Regular soil testing helps you understand pH levels and nutrient content. Most crops prefer soil with pH between 6.0-7.0. Adding organic matter like compost improves soil structure, water retention, and nutrient availability."}
        elif 'pest' in query.lower() or 'disease' in query.lower():
            return {"response": "Preventing pests and diseases starts with proper crop rotation, resistant varieties, and good sanitation. Integrated Pest Management (IPM) combines biological controls, cultural practices, and judicious use of pesticides. Always identify the specific pest or disease before treatment."}
        elif 'water' in query.lower() or 'irrigation' in query.lower():
            return {"response": "Efficient irrigation is critical for crop success. Most crops need 1-1.5 inches of water weekly. Drip irrigation can reduce water usage by up to 60%. Water early in the morning to minimize evaporation and disease. Look for signs of wilting or leaf curling to identify water stress."}
        elif 'fertilizer' in query.lower() or 'nutrient' in query.lower():
            return {"response": "Balanced fertilization is key to crop health. The three primary nutrients are nitrogen (N) for leaf growth, phosphorus (P) for roots and flowers, and potassium (K) for overall plant health. Apply fertilizers based on soil test results, and consider splitting applications to improve efficiency."}
        else:
            return {"response": "I can help with your farming questions. Ask about soil health, pest management, irrigation techniques, fertilizer recommendations, or crop-specific information. What would you like to know more about?"}

# Use the proxy class
MLController = MLControllerProxy

# Create a Blueprint for ML routes
ml_routes = Blueprint('ml_routes', __name__)

@ml_routes.route('/api/recommend_crops', methods=['POST'])
def recommend_crops():
    """API endpoint for crop recommendations based on soil data."""
    try:
        # Get soil data from request
        soil_data = request.json
        
        if not soil_data:
            return jsonify({"error": "No soil data provided"}), 400
        
        # Get crop recommendations
        recommendations = MLController.get_crop_recommendations(soil_data)
        
        return jsonify({"recommendations": recommendations})
    
    except Exception as e:
        current_app.logger.error(f"Error in crop recommendation: {str(e)}")
        return jsonify({"error": str(e)}), 500

@ml_routes.route('/api/detect_disease', methods=['POST'])
def detect_disease():
    """API endpoint for plant disease detection from images."""
    try:
        # Check if request has image file
        if 'image' in request.files:
            file = request.files['image']
            
            if file.filename == '':
                return jsonify({"error": "No selected file"}), 400
            
            if file:
                # Process image file
                img_array = MLController.process_image_file(file)
                if img_array is None:
                    return jsonify({"error": "Failed to process image"}), 400
                
                # Detect disease
                results = MLController.detect_plant_disease(img_array)
                return jsonify(results)
        
        # Check if request has base64 image
        elif request.json and 'image_data' in request.json:
            image_data = request.json['image_data']
            
            # Detect disease
            results = MLController.detect_plant_disease(image_data)
            return jsonify(results)
        
        else:
            return jsonify({"error": "No image provided"}), 400
    
    except Exception as e:
        current_app.logger.error(f"Error in disease detection: {str(e)}")
        return jsonify({"error": str(e)}), 500

@ml_routes.route('/api/chatbot', methods=['POST'])
def chatbot():
    """API endpoint for agricultural chatbot."""
    try:
        data = request.json
        
        if not data or 'query' not in data:
            return jsonify({"error": "No query provided"}), 400
        
        query = data['query']
        conversation_history = data.get('conversation_history', [])
        
        # Get response from chatbot
        response = MLController.get_chatbot_response(query, conversation_history)
        
        return jsonify(response)
    
    except Exception as e:
        current_app.logger.error(f"Error in chatbot: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Additional routes for ML model training or status can be added here