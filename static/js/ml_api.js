/**
 * ML API Client for AgroAssist
 * Interacts with the machine learning-powered backend API
 */

// Define API endpoints
const API_ENDPOINTS = {
    CROP_RECOMMENDATIONS: '/api/recommend_crops',
    DISEASE_DETECTION: '/api/detect_disease',
    CHATBOT: '/api/chatbot'
};

/**
 * Get crop recommendations based on soil data
 * @param {Object} soilData - Soil parameters 
 * @return {Promise} Promise resolving to crop recommendations
 */
async function getCropRecommendations(soilData) {
    try {
        const response = await fetch(API_ENDPOINTS.CROP_RECOMMENDATIONS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(soilData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get crop recommendations');
        }
        
        const data = await response.json();
        return data.recommendations;
    } catch (error) {
        console.error('Error getting crop recommendations:', error);
        return { error: error.message };
    }
}

/**
 * Detect plant disease from an image
 * @param {string|File} imageData - Either base64 image string or File object
 * @return {Promise} Promise resolving to disease detection results
 */
async function detectDisease(imageData) {
    try {
        let response;
        
        // Handle different types of image data
        if (typeof imageData === 'string') {
            // Base64 image string
            response = await fetch(API_ENDPOINTS.DISEASE_DETECTION, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image_data: imageData })
            });
        } else if (imageData instanceof File) {
            // File object
            const formData = new FormData();
            formData.append('image', imageData);
            
            response = await fetch(API_ENDPOINTS.DISEASE_DETECTION, {
                method: 'POST',
                body: formData
            });
        } else {
            throw new Error('Invalid image data format');
        }
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to detect disease');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error detecting disease:', error);
        return { error: error.message };
    }
}

/**
 * Get a response from the agricultural chatbot
 * @param {string} query - User's query or question
 * @param {Array} conversationHistory - Previous exchanges (optional)
 * @return {Promise} Promise resolving to chatbot response
 */
async function getChatbotResponse(query, conversationHistory = []) {
    try {
        const response = await fetch(API_ENDPOINTS.CHATBOT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                conversation_history: conversationHistory
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get chatbot response');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting chatbot response:', error);
        return { error: error.message };
    }
}

// Export methods
window.mlApi = {
    getCropRecommendations,
    detectDisease,
    getChatbotResponse
};