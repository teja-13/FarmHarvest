/**
 * Simple rule-based chatbot for answering farming queries
 * Uses keyword matching and predefined responses
 */

// Chatbot state
let chatbotContext = null;
let conversationHistory = [];

/**
 * Initialize the chatbot
 * @param {Object} knowledge - Knowledge base for responses
 * @param {function} onInit - Callback when initialization is complete
 */
function initChatbot(knowledge, onInit) {
    if (!knowledge || typeof knowledge !== 'object') {
        console.error('Invalid knowledge base provided to chatbot');
        return;
    }
    
    // Load the knowledge base
    chatbotContext = {
        knowledge: knowledge,
        lastQuery: null,
        lastResponse: null,
        conversationStartTime: new Date()
    };
    
    // Initialize conversation history
    conversationHistory = [{
        sender: 'bot',
        message: 'Hello! I\'m your farming assistant. How can I help you today?',
        timestamp: new Date()
    }];
    
    if (onInit && typeof onInit === 'function') {
        onInit(chatbotContext);
    }
}

/**
 * Process a user query and generate a response
 * @param {string} query - The user's question
 * @return {string|string[]} The chatbot's response
 */
function processQuery(query) {
    if (!query || !chatbotContext) {
        return "I'm sorry, I couldn't understand your question. Could you please try again?";
    }
    
    // Normalize the query
    const normalizedQuery = query.toLowerCase().trim();
    
    // Save the query to context
    chatbotContext.lastQuery = normalizedQuery;
    
    // Log to conversation history
    conversationHistory.push({
        sender: 'user',
        message: query,
        timestamp: new Date()
    });
    
    // Find the best matching response
    const response = findBestResponse(normalizedQuery);
    
    // Save the response to context
    chatbotContext.lastResponse = response;
    
    // Log to conversation history
    conversationHistory.push({
        sender: 'bot',
        message: response,
        timestamp: new Date()
    });
    
    return response;
}

/**
 * Find the best response for a query using keyword matching
 * @param {string} query - The normalized query
 * @return {string|string[]} The best matching response
 */
function findBestResponse(query) {
    const { knowledge } = chatbotContext;
    
    // Direct keyword matching
    for (const [keyword, response] of Object.entries(knowledge)) {
        if (query.includes(keyword)) {
            return response;
        }
    }
    
    // Check for specific agricultural terms
    if (isAboutSoil(query)) {
        return knowledge.soil || knowledge.default;
    }
    
    if (isAboutPests(query)) {
        return knowledge.pests || knowledge.default;
    }
    
    if (isAboutFertilizers(query)) {
        return knowledge.fertilizers || knowledge.default;
    }
    
    if (isAboutCrops(query)) {
        return knowledge.crops || knowledge.default;
    }
    
    // Default response if no match found
    return knowledge.default || "I don't have specific information about that. Please ask about soil, crops, pests, or farming practices.";
}

/**
 * Check if the query is about soil
 * @param {string} query - The normalized query
 * @return {boolean} Whether the query is about soil
 */
function isAboutSoil(query) {
    const soilTerms = ['soil', 'dirt', 'earth', 'ground', 'land', 'ph', 'fertility', 'nutrients', 'sandy', 'clay', 'loam'];
    return soilTerms.some(term => query.includes(term));
}

/**
 * Check if the query is about pests
 * @param {string} query - The normalized query
 * @return {boolean} Whether the query is about pests
 */
function isAboutPests(query) {
    const pestTerms = ['pest', 'bug', 'insect', 'disease', 'fungus', 'blight', 'rot', 'aphid', 'beetle', 'mildew', 'mold'];
    return pestTerms.some(term => query.includes(term));
}

/**
 * Check if the query is about fertilizers
 * @param {string} query - The normalized query
 * @return {boolean} Whether the query is about fertilizers
 */
function isAboutFertilizers(query) {
    const fertilizerTerms = ['fertilizer', 'fertilize', 'nutrient', 'nitrogen', 'phosphorus', 'potassium', 'npk', 'compost', 'manure'];
    return fertilizerTerms.some(term => query.includes(term));
}

/**
 * Check if the query is about crops
 * @param {string} query - The normalized query
 * @return {boolean} Whether the query is about crops
 */
function isAboutCrops(query) {
    const cropTerms = ['crop', 'plant', 'seed', 'harvest', 'grow', 'cultivate', 'yield', 'wheat', 'corn', 'rice', 'potato', 'vegetable'];
    return cropTerms.some(term => query.includes(term));
}

/**
 * Get the conversation history
 * @return {Array} The conversation history
 */
function getConversationHistory() {
    return conversationHistory;
}

/**
 * Clear the conversation history
 */
function clearConversationHistory() {
    conversationHistory = [{
        sender: 'bot',
        message: 'Hello! I\'m your farming assistant. How can I help you today?',
        timestamp: new Date()
    }];
}

/**
 * Save the conversation history to IndexedDB if available
 * @param {string} userId - The user ID to associate with the conversation
 * @return {Promise} A promise that resolves when the save is complete
 */
function saveConversationHistory(userId) {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject(new Error("IndexedDB not supported"));
            return;
        }
        
        try {
            const data = {
                userId,
                conversations: conversationHistory,
                timestamp: new Date().toISOString()
            };
            
            if (window.dbUtils && window.dbUtils.addRecord) {
                // Use the IndexedDB utility if available
                window.dbUtils.addRecord('chat_history', data)
                    .then(resolve)
                    .catch(reject);
            } else {
                // Fallback to localStorage
                const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
                chatHistory.push(data);
                localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
}

// Export functions for use in other modules
window.chatbotUtils = {
    initChatbot,
    processQuery,
    getConversationHistory,
    clearConversationHistory,
    saveConversationHistory
};
