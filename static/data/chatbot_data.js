/**
 * Knowledge base for the farming assistant chatbot
 * Contains predefined responses for common farming questions
 */

// Define the chatbot knowledge base
const CHATBOT_KNOWLEDGE = {
    "soil fertility": [
        "To improve soil fertility naturally, you can:",
        "1. Add compost or well-rotted manure",
        "2. Plant cover crops like clover or vetch",
        "3. Use crop rotation with legumes",
        "4. Apply natural minerals like rock phosphate",
        "5. Mulch with organic materials",
        "6. Minimize soil disturbance to protect soil biology"
    ],
    "crop rotation": [
        "Best practices for crop rotation include:",
        "1. Rotate between plant families, not just different crops",
        "2. Include legumes in your rotation to fix nitrogen",
        "3. Alternate between deep and shallow-rooted crops",
        "4. Plan 3-4 year rotations for best pest/disease management",
        "5. Consider nutrient needs in your rotation sequence",
        "6. Include cover crops between main crops when possible"
    ],
    "weed management": [
        "To manage weeds without herbicides:",
        "1. Use mulch to suppress weed growth",
        "2. Implement timely cultivation and hand weeding",
        "3. Plant cover crops to compete with weeds",
        "4. Use stale seedbed technique",
        "5. Maintain proper crop spacing to shade out weeds",
        "6. Consider flame weeding for row crops"
    ],
    "planting time": [
        "Planting times vary by crop and region, but general guidelines for common crops:",
        "- Wheat: Fall planting for winter wheat, early spring for spring wheat",
        "- Corn: When soil temperatures reach 50-55°F (10-13°C)",
        "- Soybeans: When soil temperatures reach 60°F (15.5°C)",
        "- Potatoes: 2-3 weeks before last frost date",
        "- Rice: Spring when temperatures are consistently above 65°F (18°C)"
    ],
    "nutrient deficiencies": [
        "Common plant nutrient deficiency symptoms:",
        "- Nitrogen: Yellowing of older leaves, stunted growth",
        "- Phosphorus: Purple discoloration, stunted roots",
        "- Potassium: Brown leaf edges, weak stems",
        "- Calcium: Distorted new growth, blossom end rot",
        "- Magnesium: Yellowing between leaf veins",
        "- Iron: Yellowing of young leaves with green veins"
    ],
    "irrigation": [
        "Effective irrigation practices include:",
        "1. Water deeply and less frequently to encourage deep root growth",
        "2. Irrigate early in the morning to reduce evaporation",
        "3. Use drip irrigation when possible to conserve water",
        "4. Monitor soil moisture with sensors or manual methods",
        "5. Adjust watering based on crop growth stage",
        "6. Consider rainfall in your irrigation schedule"
    ],
    "composting": [
        "For successful composting:",
        "1. Balance 'browns' (carbon) and 'greens' (nitrogen) in a ratio of about 3:1",
        "2. Keep compost pile moist but not soggy",
        "3. Turn regularly to provide oxygen",
        "4. Ensure proper particle size for faster decomposition",
        "5. Keep pile size between 3x3x3 feet to 5x5x5 feet",
        "6. Avoid meat, dairy, and oily foods in compost"
    ],
    "organic farming": [
        "Key principles of organic farming:",
        "1. Avoid synthetic fertilizers and pesticides",
        "2. Build soil health through organic matter additions",
        "3. Implement biological pest control methods",
        "4. Use diverse crop rotations",
        "5. Maintain buffer zones to prevent contamination",
        "6. Promote biodiversity on and around the farm"
    ],
    "pest control": [
        "Integrated pest management strategies include:",
        "1. Identify pests correctly before taking action",
        "2. Monitor pest populations regularly",
        "3. Establish threshold levels for intervention",
        "4. Use cultural practices to prevent pest problems",
        "5. Employ biological controls when possible",
        "6. Use targeted pesticides as a last resort",
        "7. Evaluate the effectiveness of control methods"
    ],
    "plant diseases": [
        "To manage plant diseases effectively:",
        "1. Start with disease-free seeds and plants",
        "2. Choose disease-resistant varieties",
        "3. Improve air circulation between plants",
        "4. Avoid wetting foliage when watering",
        "5. Practice crop rotation to break disease cycles",
        "6. Remove and destroy infected plant material",
        "7. Apply appropriate fungicides or bactericides when necessary"
    ],
    "soil testing": [
        "For effective soil testing:",
        "1. Sample soil at 6-8 inch depth for most crops",
        "2. Collect multiple samples across the field and mix them",
        "3. Test at the same time each year for consistent results",
        "4. Test for pH, major nutrients (N, P, K), secondary nutrients and micronutrients",
        "5. Consider organic matter and CEC (Cation Exchange Capacity)",
        "6. Adjust fertilizer applications based on test results",
        "7. Retest every 2-3 years to track changes"
    ],
    "cover crops": [
        "Benefits and management of cover crops:",
        "1. Prevent soil erosion and compaction",
        "2. Add organic matter to soil",
        "3. Fix nitrogen (legumes) or scavenge nutrients",
        "4. Suppress weeds and break pest cycles",
        "5. Improve soil structure and water infiltration",
        "6. Terminate 2-3 weeks before planting main crop",
        "7. Consider roller-crimping, mowing, or shallow incorporation"
    ],
    "seed saving": [
        "Tips for successful seed saving:",
        "1. Select seeds from your healthiest, most productive plants",
        "2. Be aware of cross-pollination in certain crops",
        "3. Allow seeds to fully mature on the plant",
        "4. Clean seeds thoroughly after collection",
        "5. Dry seeds completely before storage",
        "6. Store in cool, dry conditions in airtight containers",
        "7. Label seeds with variety and collection date"
    ],
    "sustainable farming": [
        "Principles of sustainable farming include:",
        "1. Conservation of soil and water resources",
        "2. Minimizing use of non-renewable resources",
        "3. Building soil health and biodiversity",
        "4. Implementing integrated pest management",
        "5. Diversifying crops and income streams",
        "6. Supporting local food systems",
        "7. Reducing greenhouse gas emissions"
    ],
    "greenhouse farming": [
        "Tips for successful greenhouse farming:",
        "1. Ensure proper ventilation and temperature control",
        "2. Monitor humidity levels to prevent disease",
        "3. Use appropriate growing media for your crops",
        "4. Implement drip irrigation for water efficiency",
        "5. Consider supplemental lighting in low-light seasons",
        "6. Practice regular scouting for pests and diseases",
        "7. Plan crop rotations even in greenhouse settings"
    ],
    "farming tools": [
        "Essential farming tools for small-scale operations:",
        "1. Quality hand tools (spades, forks, hoes, rakes)",
        "2. Wheelbarrow or garden cart",
        "3. Irrigation equipment appropriate for your scale",
        "4. Broadfork for aeration without disrupting soil layers",
        "5. Seeders for efficient planting",
        "6. Harvest knives and containers",
        "7. Basic soil testing kit"
    ],
    "soil": [
        "Soil is the foundation of agriculture. Here are some key facts:",
        "1. Healthy soil contains minerals, organic matter, air, water and living organisms",
        "2. The ideal agricultural soil is about 45% minerals, 5% organic matter, 25% water, and 25% air",
        "3. Soil pH affects nutrient availability to plants",
        "4. Soil texture (sand, silt, clay proportions) influences drainage and nutrient holding capacity",
        "5. Building soil organic matter improves almost all soil properties",
        "6. Avoid compaction by limiting traffic on wet soils",
        "7. Minimize tillage to protect soil structure and biology"
    ],
    "fertilizers": [
        "Understanding fertilizers for crop production:",
        "1. Macronutrients (N-P-K) are needed in larger quantities",
        "2. Micronutrients are needed in small amounts but are essential",
        "3. Organic fertilizers release nutrients slowly and build soil",
        "4. Synthetic fertilizers provide nutrients immediately but don't build soil",
        "5. Apply fertilizers based on soil tests and crop needs",
        "6. Split applications can improve nutrient use efficiency",
        "7. Consider foliar feeding for quick correction of deficiencies"
    ],
    "crops": [
        "General principles for successful crop production:",
        "1. Select varieties adapted to your climate and soil",
        "2. Prepare soil properly before planting",
        "3. Plant at the right time and depth",
        "4. Maintain appropriate plant spacing",
        "5. Provide adequate water and nutrients",
        "6. Monitor and manage pests, diseases, and weeds",
        "7. Harvest at optimal maturity for best quality"
    ],
    "default": [
        "I don't have specific information about that topic. Here are some general farming best practices:",
        "1. Test your soil regularly to understand its needs",
        "2. Practice crop rotation to break pest cycles",
        "3. Incorporate organic matter to improve soil health",
        "4. Use integrated pest management (IPM) principles",
        "5. Conserve water through efficient irrigation",
        "6. Keep detailed records of your farming practices",
        "7. Learn from local successful farmers and agricultural extensions"
    ]
};

// Make the knowledge base available globally
window.CHATBOT_KNOWLEDGE = CHATBOT_KNOWLEDGE;
