/**
 * Crop Recommendation Model
 * A simple decision tree model for recommending crops based on soil test results
 */

// Define model constants
const MIN_NITROGEN = 0;
const MAX_NITROGEN = 200;
const MIN_PHOSPHORUS = 0;
const MAX_PHOSPHORUS = 150;
const MIN_POTASSIUM = 0;
const MAX_POTASSIUM = 200;
const MIN_PH = 0;
const MAX_PH = 14;

/**
 * Generate crop recommendations based on soil test data
 * @param {Object} soilData - The soil test data
 * @return {Array} Array of recommended crops sorted by suitability
 */
function generateCropRecommendations(soilData) {
    if (!soilData) {
        console.error('No soil data provided for crop recommendation');
        return [];
    }
    
    // Normalize input values
    const normalizedData = {
        nitrogen: normalizeValue(soilData.nitrogen, MIN_NITROGEN, MAX_NITROGEN),
        phosphorus: normalizeValue(soilData.phosphorus, MIN_PHOSPHORUS, MAX_PHOSPHORUS),
        potassium: normalizeValue(soilData.potassium, MIN_POTASSIUM, MAX_POTASSIUM),
        ph: normalizeValue(soilData.ph, MIN_PH, MAX_PH),
        ec: soilData.ec || 0,
        organicMatter: soilData.organicMatter || 0,
        temperature: 25, // Default temperature if not provided
        humidity: 65, // Default humidity if not provided
        rainfall: 120, // Default rainfall if not provided
        soilTexture: soilData.soilTexture || 'loamy'
    };
    
    // Get all crop suitability scores
    const cropsWithScores = CROP_DATA.map(crop => {
        const score = calculateCropSuitability(normalizedData, crop);
        return {
            ...crop,
            score: Math.round(score * 100) // Convert to percentage
        };
    });
    
    // Sort by score in descending order
    return cropsWithScores.sort((a, b) => b.score - a.score);
}

/**
 * Calculate the suitability score for a crop based on soil data
 * @param {Object} normalizedData - The normalized soil data
 * @param {Object} crop - The crop to evaluate
 * @return {number} Suitability score between 0 and 1
 */
function calculateCropSuitability(normalizedData, crop) {
    // Define weights for different soil properties
    const weights = {
        nitrogen: 0.2,
        phosphorus: 0.2,
        potassium: 0.2,
        ph: 0.25,
        ec: 0.05,
        organicMatter: 0.1
    };
    
    // Calculate score for each property
    let score = 0;
    let totalWeight = 0;
    
    // Nitrogen score
    if (crop.requirements.nitrogen) {
        const nScore = 1 - Math.abs(normalizedData.nitrogen - crop.requirements.nitrogen);
        score += nScore * weights.nitrogen;
        totalWeight += weights.nitrogen;
    }
    
    // Phosphorus score
    if (crop.requirements.phosphorus) {
        const pScore = 1 - Math.abs(normalizedData.phosphorus - crop.requirements.phosphorus);
        score += pScore * weights.phosphorus;
        totalWeight += weights.phosphorus;
    }
    
    // Potassium score
    if (crop.requirements.potassium) {
        const kScore = 1 - Math.abs(normalizedData.potassium - crop.requirements.potassium);
        score += kScore * weights.potassium;
        totalWeight += weights.potassium;
    }
    
    // pH score - using a bell curve approach
    if (crop.requirements.phRange) {
        const [minPh, maxPh] = crop.requirements.phRange;
        const normMinPh = normalizeValue(minPh, MIN_PH, MAX_PH);
        const normMaxPh = normalizeValue(maxPh, MIN_PH, MAX_PH);
        
        let phScore;
        if (normalizedData.ph >= normMinPh && normalizedData.ph <= normMaxPh) {
            // Within optimal range
            phScore = 1.0;
        } else {
            // Outside optimal range, calculate distance
            const midpoint = (normMinPh + normMaxPh) / 2;
            const range = normMaxPh - normMinPh;
            const distance = Math.abs(normalizedData.ph - midpoint);
            phScore = Math.max(0, 1 - (distance / (range / 2)));
        }
        
        score += phScore * weights.ph;
        totalWeight += weights.ph;
    }
    
    // EC score
    if (crop.requirements.ecRange) {
        const [minEc, maxEc] = crop.requirements.ecRange;
        let ecScore;
        
        if (normalizedData.ec >= minEc && normalizedData.ec <= maxEc) {
            ecScore = 1.0;
        } else {
            const midpoint = (minEc + maxEc) / 2;
            const range = maxEc - minEc;
            const distance = Math.abs(normalizedData.ec - midpoint);
            ecScore = Math.max(0, 1 - (distance / (range / 2)));
        }
        
        score += ecScore * weights.ec;
        totalWeight += weights.ec;
    }
    
    // Organic matter score
    if (crop.requirements.organicMatter) {
        let omScore;
        if (normalizedData.organicMatter >= crop.requirements.organicMatter) {
            omScore = 1.0;
        } else {
            omScore = normalizedData.organicMatter / crop.requirements.organicMatter;
        }
        
        score += omScore * weights.organicMatter;
        totalWeight += weights.organicMatter;
    }
    
    // Soil texture compatibility
    if (crop.requirements.soilTextures && crop.requirements.soilTextures.length > 0) {
        const textureWeight = 0.1;
        
        // Check if current soil texture is in the preferred list
        if (crop.requirements.soilTextures.includes(normalizedData.soilTexture)) {
            score += 1.0 * textureWeight;
        } else {
            score += 0.5 * textureWeight; // Partial score for non-preferred but not incompatible
        }
        
        totalWeight += textureWeight;
    }
    
    // Normalize the final score if we have weights
    return totalWeight > 0 ? score / totalWeight : 0;
}

/**
 * Normalize a value to a 0-1 range
 * @param {number} value - The value to normalize
 * @param {number} min - The minimum possible value
 * @param {number} max - The maximum possible value
 * @return {number} Normalized value between 0 and 1
 */
function normalizeValue(value, min, max) {
    // Handle missing values with a default middle value
    if (value === undefined || value === null) {
        return 0.5;
    }
    
    // Ensure value is within bounds
    const clampedValue = Math.max(min, Math.min(max, value));
    
    // Normalize to 0-1 range
    return (clampedValue - min) / (max - min);
}

// Expose functions globally
window.cropRecommendationModel = {
    generateCropRecommendations,
    calculateCropSuitability,
    normalizeValue
};
