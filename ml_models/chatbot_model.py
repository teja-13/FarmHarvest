"""
Machine Learning Model for Agricultural Chatbot
Uses a trained natural language processing model to answer farming queries
"""
import os
import joblib
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

# Path to save the trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'trained_models', 'chatbot_model.joblib')

# Create directory if it doesn't exist
os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)

def generate_training_data():
    """Generate synthetic training data for the chatbot model."""
    # This would typically come from a database or file in a real implementation
    
    # Create a synthetic dataset of farming questions and their categories
    data = {
        'question': [
            # Soil-related queries
            "How do I test my soil?",
            "What is pH in soil?",
            "How to improve soil fertility?",
            "My soil is too acidic, what can I do?",
            "How often should I test my soil?",
            "What nutrients are essential for soil?",
            "How to increase organic matter in soil?",
            "What is the best soil for growing vegetables?",
            "How to fix clay soil?",
            "What is soil erosion and how to prevent it?",
            
            # Crop-related queries
            "When should I plant wheat?",
            "How much water does rice need?",
            "Best fertilizer for tomatoes?",
            "How to grow organic vegetables?",
            "What crops grow well in sandy soil?",
            "How to increase crop yield?",
            "What is crop rotation?",
            "How to grow maize in dry conditions?",
            "Which season is best for planting pulses?",
            "How far apart should I plant potato seeds?",
            
            # Pest and disease queries
            "How to identify plant diseases?",
            "Natural remedies for aphids?",
            "My tomato plants have yellow leaves, what's wrong?",
            "How to prevent fungal infections in crops?",
            "Safe pesticides for vegetable gardens?",
            "What are signs of pest infestation?",
            "How to control weeds organically?",
            "My rice plants have brown spots, what disease is it?",
            "How to manage pests without chemicals?",
            "What causes blight in potatoes?",
            
            # Irrigation and water management
            "How often should I water my crops?",
            "What is drip irrigation?",
            "Best time of day to water plants?",
            "How to conserve water in farming?",
            "Signs of overwatering plants?",
            "How much water does a fruit tree need?",
            "What is water stress in plants?",
            "How to set up irrigation system for a small farm?",
            "Is rainwater good for crops?",
            "How to water plants during drought?",
            
            # Fertilizer and nutrient management
            "How to make compost at home?",
            "When to apply fertilizer to crops?",
            "What is NPK in fertilizers?",
            "Organic vs chemical fertilizers?",
            "How to fix nitrogen deficiency in plants?",
            "What fertilizer is best for flowering plants?",
            "How to make liquid fertilizer?",
            "Signs of nutrient deficiency in plants?",
            "Can I use kitchen waste as fertilizer?",
            "How much fertilizer should I use?",
            
            # Harvesting and storage
            "When is the right time to harvest wheat?",
            "How to store grains long-term?",
            "Best techniques for harvesting vegetables?",
            "How to prevent post-harvest losses?",
            "How to tell if fruits are ripe?",
            "Methods for drying crops?",
            "How to store seeds for next season?",
            "What is the shelf life of harvested vegetables?",
            "How to prevent mold during storage?",
            "Should I wash vegetables before storage?"
        ],
        'category': [
            # Categories for soil-related queries
            "soil", "soil", "soil", "soil", "soil", 
            "soil", "soil", "soil", "soil", "soil",
            
            # Categories for crop-related queries
            "crops", "crops", "crops", "crops", "crops", 
            "crops", "crops", "crops", "crops", "crops",
            
            # Categories for pest and disease queries
            "pests_diseases", "pests_diseases", "pests_diseases", "pests_diseases", "pests_diseases",
            "pests_diseases", "pests_diseases", "pests_diseases", "pests_diseases", "pests_diseases",
            
            # Categories for irrigation and water management
            "irrigation", "irrigation", "irrigation", "irrigation", "irrigation",
            "irrigation", "irrigation", "irrigation", "irrigation", "irrigation",
            
            # Categories for fertilizer and nutrient management
            "fertilizer", "fertilizer", "fertilizer", "fertilizer", "fertilizer",
            "fertilizer", "fertilizer", "fertilizer", "fertilizer", "fertilizer",
            
            # Categories for harvesting and storage
            "harvesting_storage", "harvesting_storage", "harvesting_storage", "harvesting_storage", "harvesting_storage",
            "harvesting_storage", "harvesting_storage", "harvesting_storage", "harvesting_storage", "harvesting_storage"
        ]
    }
    
    return pd.DataFrame(data)

def generate_responses():
    """Generate responses for different categories of questions."""
    responses = {
        "soil": [
            "Soil testing can be done using a home test kit or by sending samples to a lab. A basic soil test measures pH, nitrogen, phosphorus, and potassium levels, which are essential for plant growth. Consider testing your soil at least once every 2-3 years, or when starting a new garden area.",
            "Soil pH is a measure of soil acidity or alkalinity on a scale from 0-14, with 7 being neutral. Most plants thrive in slightly acidic to neutral soil (pH 6.0-7.0). You can adjust soil pH by adding lime to raise it or sulfur to lower it. Always test before amending.",
            "To improve soil fertility, incorporate organic matter like compost, aged manure, or cover crops. This enhances soil structure, increases nutrient content, improves water retention, and supports beneficial soil organisms. Regular additions of organic matter are the foundation of healthy soil.",
            "The three primary nutrients in soil are nitrogen (N), phosphorus (P), and potassium (K). Nitrogen promotes leaf growth, phosphorus supports root and flower development, and potassium enhances overall plant health and disease resistance. Secondary nutrients include calcium, magnesium, and sulfur."
        ],
        "crops": [
            "Choosing the right crop variety for your region depends on your climate, soil type, and growing season length. Look for varieties that are adapted to your specific conditions and resistant to local pests and diseases. Consult your local agricultural extension office for recommendations.",
            "Crop rotation involves changing the type of crops grown in a particular area each season or year. This practice helps prevent soil nutrient depletion, reduces pest and disease buildup, and can improve soil structure. A simple rotation might alternate between legumes, leaf crops, and root crops.",
            "For successful planting, prepare your soil well by removing weeds and incorporating organic matter. Plant at the appropriate depth (usually 2-3 times the seed diameter) and follow spacing recommendations for your specific crop. Consider soil temperature requirements for germination.",
            "Most vegetable crops need 1-1.5 inches of water per week, either from rainfall or irrigation. Water deeply and less frequently to encourage deep root growth. Morning watering is best to reduce evaporation and fungal disease issues. Adjust based on your soil type and weather conditions."
        ],
        "pests_diseases": [
            "Early identification of plant diseases is crucial for effective management. Look for symptoms like unusual spots, wilting, yellowing, or distorted growth. Take photos and compare with disease guides or consult local extension services. Many diseases can be prevented with proper spacing, watering practices, and resistant varieties.",
            "Integrated Pest Management (IPM) combines biological, cultural, physical, and chemical tools to minimize economic, health, and environmental risks. Start with the least toxic approaches: encourage beneficial insects, use physical barriers, practice crop rotation, and only use chemical controls as a last resort.",
            "For organic pest control, try companion planting with pest-repellent plants like marigolds or basil. Introduce beneficial insects such as ladybugs or praying mantises. Neem oil, insecticidal soaps, and diatomaceous earth are effective organic treatments for many common pests.",
            "Yellow leaves can indicate several issues: nutrient deficiencies (especially nitrogen), overwatering, underwatering, or diseases. Check the pattern of yellowing - entire plant, new growth, or older leaves - to help diagnose the problem. Also examine for any spots, unusual growth, or pests on the undersides of leaves."
        ],
        "irrigation": [
            "Drip irrigation delivers water directly to plant roots through tubes with small emitters. This system is highly efficient, reducing water usage by up to 60% compared to sprinkler systems. It minimizes weed growth, prevents leaf diseases by keeping foliage dry, and can be automated with timers.",
            "Signs of overwatering include yellowing leaves, wilting despite wet soil, soft stems, fungal growth, and root rot. To remedy overwatered plants, reduce watering frequency, improve drainage by adding organic matter or raising beds, and consider transplanting if root rot has developed.",
            "Water conservation techniques in farming include drip irrigation, mulching to reduce evaporation, collecting rainwater, watering early morning or evening to reduce evaporation, grouping plants with similar water needs, and using soil moisture sensors or weather-based irrigation controllers.",
            "Plants need more water during hot, dry, or windy conditions and less during cool, humid, or rainy periods. Most established plants prefer deep, infrequent watering rather than frequent shallow watering. Check soil moisture 1-2 inches below the surface to determine if watering is needed."
        ],
        "fertilizer": [
            "Compost is made by decomposing organic materials like kitchen scraps, yard waste, and manure. Start with a balance of green (nitrogen-rich) and brown (carbon-rich) materials in layers. Turn the pile regularly for aeration and keep it slightly moist. Good compost is dark, crumbly, and earthy-smelling.",
            "NPK stands for Nitrogen, Phosphorus, and Potassium, the three primary nutrients in fertilizers. The numbers on fertilizer packages (like 10-10-10) represent the percentage of each nutrient by weight. Choose the appropriate NPK ratio based on your soil test results and crop needs.",
            "Signs of nutrient deficiency include yellowing leaves (nitrogen), purple stems (phosphorus), or brown leaf edges (potassium). Different deficiencies affect different parts of the plant. A soil test is the best way to confirm specific deficiencies before applying amendments.",
            "Generally, apply fertilizers during the active growing season. For annual crops, incorporate a balanced fertilizer before planting, then side-dress as needed during growth. For perennials, apply in early spring as growth begins. Always follow package directions for rates and timing."
        ],
        "harvesting_storage": [
            "Harvest timing varies by crop but generally: grains are ready when kernels are hard and moisture content is low; fruits when they reach appropriate color and firmness; and vegetables at their peak size before becoming tough or bitter. Morning harvesting is often best for freshness.",
            "For long-term grain storage, ensure moisture content is below 12-13%, clean thoroughly, and store in airtight containers in a cool, dry place. Use food-grade diatomaceous earth or oxygen absorbers for insect control. Regularly check for moisture or pest problems.",
            "To prevent post-harvest losses, handle produce carefully to avoid bruising, cool quickly after harvest to remove field heat, store at appropriate temperature and humidity for each crop type, and ensure good air circulation. Different crops have different optimal storage conditions.",
            "For seed saving, choose fully mature fruits/vegetables from healthy, productive plants. Clean seeds and dry thoroughly before storing in paper envelopes or glass jars in a cool, dry place. Label with variety name and date. Most seeds remain viable for 2-5 years if properly stored."
        ]
    }
    return responses

def train_model():
    """Train a machine learning model for the chatbot."""
    # Get training data
    df = generate_training_data()
    
    # Split features and target
    X = df['question']
    y = df['category']
    
    # Split train and test data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Create a pipeline with TF-IDF vectorizer and classifier
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(ngram_range=(1, 2), stop_words='english')),
        ('classifier', RandomForestClassifier(n_estimators=100, random_state=42))
    ])
    
    # Train the model
    pipeline.fit(X_train, y_train)
    
    # Evaluate the model
    y_pred = pipeline.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model accuracy: {accuracy:.4f}")
    
    # Save the model
    joblib.dump(pipeline, MODEL_PATH)
    
    return pipeline

def load_model():
    """Load the trained model."""
    if not os.path.exists(MODEL_PATH):
        print("Training new model...")
        return train_model()
    
    try:
        model = joblib.load(MODEL_PATH)
        return model
    except:
        print("Error loading model, training new one...")
        return train_model()

def get_response(question):
    """
    Get a response to a farming question using the trained model.
    
    Args:
        question: User's query about farming
        
    Returns:
        String response to the query
    """
    model = load_model()
    responses = generate_responses()
    
    # Predict the category of the question
    predicted_category = model.predict([question])[0]
    
    # Select a relevant response from the category
    category_responses = responses.get(predicted_category, ["I'm not sure about that. Please try asking something about soil, crops, pests, irrigation, fertilizers, or harvesting."])
    
    # In a more sophisticated implementation, we would use a more advanced matching algorithm
    # For now, just return a random response from the category
    return np.random.choice(category_responses)

def generate_contextual_response(question, conversation_history=None):
    """
    Generate a more contextual response based on the conversation history.
    
    Args:
        question: User's current query
        conversation_history: List of previous questions and answers
        
    Returns:
        String response to the query
    """
    # Basic response from the model
    basic_response = get_response(question)
    
    # If no conversation history, just return the basic response
    if not conversation_history or len(conversation_history) == 0:
        return basic_response
    
    # Check if the question is a follow-up to a previous topic
    # In a real implementation, this would be more sophisticated with advanced NLP
    follow_up_phrases = ["what about", "how about", "and", "also", "what if", "then", "after that"]
    is_follow_up = any(phrase in question.lower() for phrase in follow_up_phrases)
    
    if is_follow_up:
        # Get the last response topic and provide more information on it
        # This is a simple approach; in reality, you'd use more advanced context tracking
        last_question = conversation_history[-1][0]
        last_response = conversation_history[-1][1]
        
        # Simple enhancement - add a bridging statement
        return f"Following up on your question about {last_question.split()[1:4]}... {basic_response}"
    
    return basic_response

# Train the model if this file is run directly
if __name__ == "__main__":
    train_model()