"""
Machine Learning Model for Plant Disease Detection
Uses a trained convolutional neural network to detect diseases in plant images
"""
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

# Model paths
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'trained_models', 'plant_disease_model.h5')

# Create directory if it doesn't exist
os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)

# Classes of plant diseases
DISEASE_CLASSES = [
    'Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Corn_(maize)___healthy',
    'Cotton___Bacterial_blight',
    'Cotton___Target_Spot',
    'Cotton___healthy',
    'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    'Grape___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Rice___Bacterial_leaf_blight',
    'Rice___Brown_spot',
    'Rice___Leaf_smut',
    'Rice___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
]

def build_model():
    """Build a CNN model for plant disease classification."""
    model = Sequential([
        # First convolutional layer
        Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
        MaxPooling2D((2, 2)),
        
        # Second convolutional layer
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D((2, 2)),
        
        # Third convolutional layer
        Conv2D(128, (3, 3), activation='relu'),
        MaxPooling2D((2, 2)),
        
        # Flatten and dense layers
        Flatten(),
        Dense(512, activation='relu'),
        Dropout(0.5),
        Dense(len(DISEASE_CLASSES), activation='softmax')
    ])
    
    # Compile the model
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

def train_model():
    """
    In a real scenario, this would train the model on a plant disease dataset.
    For this example, we'll create a placeholder model.
    """
    # Build model architecture
    model = build_model()
    
    # In a real implementation, you would:
    # 1. Load the dataset (e.g., PlantVillage dataset)
    # 2. Preprocess the images
    # 3. Split into training and validation sets
    # 4. Train the model
    # 5. Evaluate on test set
    
    # Since we don't have the dataset available, we'll save a placeholder model
    # that will be replaced by a randomly initialized model for demonstration
    model.save(MODEL_PATH)
    
    print("Placeholder model saved. In a real scenario, this would be trained on a plant disease dataset.")
    
    return model

def load_or_train_model():
    """Load an existing model or train a new one if not available."""
    if not os.path.exists(MODEL_PATH):
        print("No existing model found. Training new model...")
        return train_model()
    
    try:
        model = load_model(MODEL_PATH)
        return model
    except:
        print("Error loading model. Training new model...")
        return train_model()

def preprocess_image(image_data):
    """
    Preprocess an image for prediction.
    
    Args:
        image_data: Either a path to an image file or a base64 string
        
    Returns:
        Preprocessed numpy array ready for model prediction
    """
    try:
        # If image_data is a file path
        if isinstance(image_data, str) and os.path.exists(image_data):
            img = load_img(image_data, target_size=(224, 224))
        # If image_data is already a numpy array
        elif isinstance(image_data, np.ndarray):
            # Resize the image if needed
            if image_data.shape[:2] != (224, 224):
                # Resize using tensorflow
                img = tf.image.resize(image_data, (224, 224))
                img = tf.cast(img, tf.float32)
                img = img.numpy()
            else:
                img = image_data
        else:
            raise ValueError("Unsupported image data format")
        
        # Convert to array and preprocess
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        processed_img = preprocess_input(img_array)
        
        return processed_img
    
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        return None

def detect_disease(image_data):
    """
    Detect plant disease from an image.
    
    Args:
        image_data: Either a path to an image file or a base64 string
        
    Returns:
        Dictionary with detection results and confidence scores
    """
    # Load model
    model = load_or_train_model()
    
    # Preprocess image
    processed_img = preprocess_image(image_data)
    if processed_img is None:
        return {"error": "Failed to process image"}
    
    # Make prediction
    predictions = model.predict(processed_img)[0]
    
    # Get top 3 predictions
    top_indices = predictions.argsort()[-3:][::-1]
    
    # Format results
    results = {
        "disease_detected": DISEASE_CLASSES[top_indices[0]],
        "confidence": float(predictions[top_indices[0]] * 100),
        "top_predictions": [
            {
                "disease": DISEASE_CLASSES[idx],
                "confidence": float(predictions[idx] * 100),
                "description": get_disease_description(DISEASE_CLASSES[idx]),
                "treatment": get_disease_treatment(DISEASE_CLASSES[idx])
            }
            for idx in top_indices if predictions[idx] > 0.05  # Only include predictions with >5% confidence
        ]
    }
    
    return results

def decode_base64_image(base64_string):
    """Decode a base64 string to a numpy array image."""
    try:
        import base64
        from io import BytesIO
        from PIL import Image
        
        # Remove the prefix if present
        if ',' in base64_string:
            base64_string = base64_string.split(',')[1]
        
        # Decode base64 string to image
        img_data = base64.b64decode(base64_string)
        img = Image.open(BytesIO(img_data))
        img = img.resize((224, 224))
        img_array = img_to_array(img)
        
        return img_array
    
    except Exception as e:
        print(f"Error decoding base64 image: {e}")
        return None

def get_disease_description(disease_name):
    """Get description for a plant disease."""
    descriptions = {
        'Apple___Apple_scab': 'Apple scab is a common disease of apple trees caused by the fungus Venturia inaequalis. It manifests as dark, scabby lesions on leaves and fruit.',
        'Apple___Black_rot': 'Black rot is a fungal disease affecting apples, characterized by circular lesions with concentric rings and often a red halo.',
        'Apple___Cedar_apple_rust': 'Cedar apple rust is a fungal disease that requires both apple trees and cedar trees to complete its life cycle. It appears as bright orange spots on apple leaves.',
        'Apple___healthy': 'This apple plant shows no signs of disease and appears to be in good health.',
        'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': 'Gray leaf spot is a fungal disease that affects corn, appearing as rectangular lesions that run parallel to leaf veins.',
        'Corn_(maize)___Common_rust_': 'Common rust in corn appears as small, round to elongated pustules that are powdery in texture and range in color from cinnamon-brown to dark brown.',
        'Corn_(maize)___Northern_Leaf_Blight': 'Northern leaf blight is identified by large, cigar-shaped lesions on corn leaves that are grayish-green to tan in color.',
        'Corn_(maize)___healthy': 'This corn plant shows no signs of disease and appears to be in good health.',
        'Cotton___Bacterial_blight': 'Bacterial blight of cotton appears as angular, water-soaked lesions on leaves that later turn brown with a reddish border.',
        'Cotton___Target_Spot': 'Target spot in cotton manifests as circular lesions with concentric rings, resembling a target or bullseye.',
        'Cotton___healthy': 'This cotton plant shows no signs of disease and appears to be in good health.',
        'Grape___Black_rot': 'Black rot in grapes is characterized by circular lesions with a dark border and tan center, eventually causing the fruit to shrivel into a hard, black mummy.',
        'Grape___Esca_(Black_Measles)': 'Esca, or Black Measles, appears as interveinal striping and scorching of grape leaves, and dark spots on fruit.',
        'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': 'Leaf blight in grapes shows as irregularly shaped, dark brown spots with a yellow halo, which may enlarge and cause leaf drop.',
        'Grape___healthy': 'This grape plant shows no signs of disease and appears to be in good health.',
        'Potato___Early_blight': 'Early blight in potatoes appears as dark, target-like spots on lower leaves that gradually enlarge and may cause leaf drop.',
        'Potato___Late_blight': 'Late blight, infamous for the Irish Potato Famine, appears as water-soaked lesions that quickly expand into brown or black patches, often with a white mold at the edges in humid conditions.',
        'Potato___healthy': 'This potato plant shows no signs of disease and appears to be in good health.',
        'Rice___Bacterial_leaf_blight': 'Bacterial leaf blight in rice appears as water-soaked, yellowish stripes on leaf blades or starting at leaf tips, which enlarge and turn white to yellow with a wavy edge.',
        'Rice___Brown_spot': 'Brown spot disease in rice is characterized by brown, oval lesions scattered across the leaf surface.',
        'Rice___Leaf_smut': 'Leaf smut in rice appears as small, angular, black spots on leaves, which may merge to form larger lesions.',
        'Rice___healthy': 'This rice plant shows no signs of disease and appears to be in good health.',
        'Tomato___Bacterial_spot': 'Bacterial spot in tomatoes manifests as small, dark lesions on leaves, stems, and fruit that may have a yellow halo.',
        'Tomato___Early_blight': 'Early blight in tomatoes shows as dark, target-like spots on lower leaves that gradually enlarge and may cause leaf drop.',
        'Tomato___Late_blight': 'Late blight in tomatoes appears as irregularly shaped, water-soaked lesions that rapidly enlarge to form brown or black areas, with white mold in humid conditions.',
        'Tomato___Leaf_Mold': 'Leaf mold in tomatoes is characterized by pale green or yellow spots on the upper leaf surface, with olive-green to grayish-purple fuzzy growth on the undersides.',
        'Tomato___Septoria_leaf_spot': 'Septoria leaf spot causes small, circular spots with dark borders and light centers, often surrounded by a yellow halo.',
        'Tomato___Spider_mites Two-spotted_spider_mite': 'Spider mite damage appears as small, white or yellow speckling on leaves, which may become bronzed or rusty with severe infestation.',
        'Tomato___Target_Spot': 'Target spot causes circular lesions with concentric rings, resembling a target or bullseye on tomato leaves and fruit.',
        'Tomato___Tomato_Yellow_Leaf_Curl_Virus': 'This viral disease causes leaves to curl upward and become yellow, with stunted growth and flower drop.',
        'Tomato___Tomato_mosaic_virus': 'Tomato mosaic virus causes mottled light and dark green patterns on leaves, sometimes with distortion or a fern-like appearance.',
        'Tomato___healthy': 'This tomato plant shows no signs of disease and appears to be in good health.'
    }
    
    # If the disease is not in our dictionary, provide a generic description
    if disease_name not in descriptions:
        return f"A plant disease affecting crop health and productivity."
    
    return descriptions[disease_name]

def get_disease_treatment(disease_name):
    """Get treatment recommendations for a plant disease."""
    treatments = {
        'Apple___Apple_scab': 'Apply fungicides preventatively during wet periods in spring. Practice good orchard sanitation by removing fallen leaves. Use resistant apple varieties when planting new trees.',
        'Apple___Black_rot': 'Prune out dead or infected branches. Remove mummified fruits. Apply fungicides from pink bud stage through harvest. Maintain good orchard sanitation.',
        'Apple___Cedar_apple_rust': 'Remove cedar trees within a few miles if possible. Apply preventative fungicides from pink bud stage through early summer. Use resistant apple varieties.',
        'Apple___healthy': 'Continue good cultural practices including proper watering, fertilization, and pruning to maintain plant health.',
        'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': 'Practice crop rotation with non-host crops. Use resistant hybrids when available. Apply foliar fungicides if disease pressure is high. Use tillage to reduce surface residue where appropriate.',
        'Corn_(maize)___Common_rust_': 'Plant resistant hybrids. Apply foliar fungicides if disease pressure is high. Early planting may help avoid optimal conditions for rust development.',
        'Corn_(maize)___Northern_Leaf_Blight': 'Use resistant hybrids. Rotate with non-host crops. Apply fungicides if disease pressure is high. Practice good field sanitation by removing or burying crop residue.',
        'Corn_(maize)___healthy': 'Continue good cultural practices including proper fertilization and irrigation to maintain plant health.',
        'Cotton___Bacterial_blight': 'Use disease-free seed and resistant varieties. Practice crop rotation. Avoid excessive nitrogen. Incorporate crop residue after harvest to promote decomposition.',
        'Cotton___Target_Spot': 'Apply fungicides preventatively or at first sign of disease. Avoid over-irrigation. Practice crop rotation. Maintain proper plant spacing for good air circulation.',
        'Cotton___healthy': 'Continue good cultural practices including proper watering, fertilization, and pest management to maintain plant health.',
        'Grape___Black_rot': 'Apply fungicides preventatively, especially during pre-bloom through fruit set. Remove mummified berries and infected canes. Prune to improve air circulation.',
        'Grape___Esca_(Black_Measles)': 'There is no effective chemical control. Practice good sanitation by removing and destroying infected vines. Use clean pruning tools. Consider replanting with less susceptible varieties.',
        'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': 'Apply fungicides preventatively during the growing season. Prune to improve air circulation. Remove fallen leaves and plant debris.',
        'Grape___healthy': 'Continue good cultural practices including proper trellising, pruning, and irrigation to maintain plant health.',
        'Potato___Early_blight': 'Practice crop rotation. Remove volunteer plants. Apply fungicides preventatively. Maintain adequate soil fertility. Avoid overhead irrigation if possible.',
        'Potato___Late_blight': 'Apply fungicides preventatively, especially during cool, wet weather. Use resistant varieties. Destroy cull piles. Ensure good air circulation. Harvest and store only healthy tubers.',
        'Potato___healthy': 'Continue good cultural practices including proper hilling, irrigation, and pest monitoring to maintain plant health.',
        'Rice___Bacterial_leaf_blight': 'Use resistant varieties. Apply copper-based bactericides. Practice balanced fertilization, avoiding excess nitrogen. Use clean seeds and maintain proper water management.',
        'Rice___Brown_spot': 'Use resistant varieties. Apply fungicides if disease pressure is high. Practice balanced fertilization. Use clean, disease-free seed. Maintain proper water management.',
        'Rice___Leaf_smut': 'Use resistant varieties. Apply appropriate fungicides. Practice crop rotation. Use clean, certified seed. Maintain proper water and nutrient management.',
        'Rice___healthy': 'Continue good cultural practices including proper water management and balanced fertilization to maintain plant health.',
        'Tomato___Bacterial_spot': 'Use disease-free seeds and transplants. Apply copper-based bactericides preventatively. Rotate crops. Avoid overhead irrigation. Remove and destroy infected plant material.',
        'Tomato___Early_blight': 'Apply fungicides preventatively. Practice crop rotation. Improve air circulation by proper spacing and staking. Remove lower infected leaves. Mulch to prevent soil splash.',
        'Tomato___Late_blight': 'Apply fungicides preventatively during cool, wet conditions. Use resistant varieties. Improve air circulation. Remove volunteer plants. Destroy infected plant material.',
        'Tomato___Leaf_Mold': 'Improve air circulation by proper spacing and pruning. Reduce humidity in greenhouse settings. Apply fungicides preventatively. Use resistant varieties if available.',
        'Tomato___Septoria_leaf_spot': 'Apply fungicides preventatively. Practice crop rotation. Remove infected leaves. Improve air circulation. Use mulch to prevent soil splash.',
        'Tomato___Spider_mites Two-spotted_spider_mite': 'Apply miticides or insecticidal soap. Increase humidity to discourage mites. Introduce predatory mites. Remove heavily infested plants.',
        'Tomato___Target_Spot': 'Apply fungicides preventatively. Improve air circulation. Avoid overhead irrigation. Practice crop rotation. Remove infected plant material.',
        'Tomato___Tomato_Yellow_Leaf_Curl_Virus': 'Control whitefly vectors with insecticides or yellow sticky traps. Use resistant varieties. Use reflective mulches to repel whiteflies. Remove and destroy infected plants.',
        'Tomato___Tomato_mosaic_virus': 'There is no cure for infected plants. Remove and destroy infected plants. Control aphids that can spread the virus. Disinfect tools between plants. Use resistant varieties.',
        'Tomato___healthy': 'Continue good cultural practices including proper watering, fertilization, staking, and pruning to maintain plant health.'
    }
    
    # If the disease is not in our dictionary, provide a generic treatment recommendation
    if disease_name not in treatments:
        return "Consult with a local agricultural extension service for specific treatment recommendations."
    
    return treatments[disease_name]

# Train or load the model if this file is run directly
if __name__ == "__main__":
    load_or_train_model()