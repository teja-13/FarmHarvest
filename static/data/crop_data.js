/**
 * Crop data for the recommendation system
 * Contains information about various crops and their requirements
 */

// Define the crop data
const CROP_DATA = [
    {
        name: "Wheat",
        description: "A cereal grain cultivated worldwide and one of the most important staple foods.",
        image: "https://pixabay.com/get/gcd54fdc85eaf0e45df89cf5aec90010a61e011471b00306cc26025aae50f160700036184e1c4733d03de4163b02b1757564e30c582b09cd9862c6728958a112f_1280.jpg",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.4, // Normalized value (0-1)
            phRange: [5.5, 7.5],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey", "silty"]
        },
        process: {
            seedSelection: "Choose high-quality, disease-resistant wheat varieties suitable for your region. Common varieties include Hard Red Winter Wheat, Soft Red Winter Wheat, or Spring Wheat.",
            landPreparation: "Plow to a depth of 6-8 inches and prepare a fine seedbed. Remove weeds and level the field. Apply base fertilizer according to soil test recommendations.",
            planting: "Plant seeds at a depth of 1-1.5 inches with row spacing of 6-7 inches. Seed rate should be 100-125 kg/ha. Best planting time is early autumn for winter wheat or early spring for spring wheat.",
            irrigation: "Ensure adequate moisture at planting. Critical irrigation stages are tillering, jointing, flowering, and grain filling. Avoid waterlogging.",
            fertilization: "Apply nitrogen in split doses: 30% at planting, 40% at tillering, and 30% at heading. Apply all phosphorus and potassium at planting.",
            pestControl: "Monitor for aphids, armyworms, and weevils. Use appropriate insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for rust, powdery mildew, and Fusarium head blight. Apply fungicides preventatively during heading and flowering stages if disease pressure is high.",
            harvesting: "Harvest when grain moisture content is 13-14%. Combine harvester settings should be adjusted to minimize grain damage and losses."
        }
    },
    {
        name: "Maize (Corn)",
        description: "A cereal grain first domesticated in Mexico and now grown globally for food, feed, and fuel.",
        image: "https://pixabay.com/get/g2acaab70ccf39605b45327c286f70942d36a65166167733d1bb84c75583b3127ab071d5e8dcab7d8bc41c1e64a3196e4529724eeff4db3c62e8c48fb5361870d_1280.jpg",
        requirements: {
            nitrogen: 0.7, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [5.8, 7.0],
            ecRange: [0, 3.5],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"]
        },
        process: {
            seedSelection: "Select hybrid varieties suited to your region and purpose (grain or silage). Consider disease resistance and maturity days.",
            landPreparation: "Deep plow to 8-10 inches and create a well-pulverized seedbed. Remove crop residues or incorporate them well. Apply lime if pH is below 5.8.",
            planting: "Plant seeds 1.5-2 inches deep with row spacing of 30 inches and plant spacing of 8-10 inches. Seed rate should be 20-25 kg/ha. Plant when soil temperature reaches 50-55°F (10-13°C).",
            irrigation: "Critical watering periods are during tasseling, silking, and grain filling. Maintain adequate soil moisture without waterlogging.",
            fertilization: "Apply 30% nitrogen, all phosphorus and potassium at planting. Side-dress remaining nitrogen when plants are knee-high. Total N requirement is 150-180 kg/ha.",
            pestControl: "Monitor for corn borers, armyworms, and rootworms. Apply insecticides when threshold levels are reached or use Bt corn varieties.",
            diseaseManagement: "Watch for northern corn leaf blight, gray leaf spot, and stalk rots. Use resistant varieties and crop rotation to minimize disease pressure.",
            harvesting: "Harvest for grain when kernels show black layer formation and moisture is 23-25%. Harvest for silage at 65-70% moisture when kernels are at dough stage."
        }
    },
    {
        name: "Rice",
        description: "A cereal grain that is the most widely consumed staple food for a large part of the world's population.",
        image: "https://pixabay.com/get/g564c9ce37e679a2bfedb365dfac837af20df0cf3cb001d31d519b72f4c238a573b1e7d1b0f0df97bb3e313f8cf61a21138566e67138820fe461b8cea5bb91a44_1280.jpg",
        requirements: {
            nitrogen: 0.8, // Normalized value (0-1)
            phosphorus: 0.4, // Normalized value (0-1)
            potassium: 0.5, // Normalized value (0-1)
            phRange: [5.0, 6.5],
            ecRange: [0, 3],
            organicMatter: 2.5,
            soilTextures: ["clayey", "silty"]
        },
        process: {
            seedSelection: "Select varieties suited to your region and growing method (lowland or upland). Consider disease resistance and grain quality traits.",
            landPreparation: "For lowland rice, plow and puddle the soil to create a fine, level seedbed with a hardpan beneath. For upland rice, prepare a well-drained seedbed.",
            planting: "For transplanted rice, raise seedlings for 20-30 days before transplanting. For direct seeding, sow pre-germinated seeds onto prepared fields. Plant spacing is typically 20 x 20 cm.",
            irrigation: "Maintain 2-5 cm water depth during vegetative stage. Drain field for 7-10 days at maximum tillering. Flood again during reproductive stage. Drain 2-3 weeks before harvest.",
            fertilization: "Apply nitrogen in 3 splits: at planting, active tillering, and panicle initiation. Apply all phosphorus at planting and potassium in 2 splits.",
            pestControl: "Monitor for stem borers, plant hoppers, and leaf folders. Use integrated pest management practices including resistant varieties.",
            diseaseManagement: "Watch for blast, bacterial leaf blight, and sheath blight. Use resistant varieties and proper water management to reduce disease pressure.",
            harvesting: "Harvest when 80-85% of grains are straw-colored. Moisture content should be around 20-25%. Dry to 14% moisture for storage."
        }
    },
    {
        name: "Soybeans",
        description: "A legume native to East Asia, widely grown for its edible bean and oil production.",
        image: "https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg",
        requirements: {
            nitrogen: 0.3, // Lower N requirement due to N fixation
            phosphorus: 0.6, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [6.0, 7.0],
            ecRange: [0, 5],
            organicMatter: 2,
            soilTextures: ["loamy", "silty", "clayey"]
        },
        process: {
            seedSelection: "Choose varieties appropriate for your latitude and growing season length. Consider disease resistance packages and maturity groups.",
            landPreparation: "Till to a depth of 6-8 inches and prepare a smooth seedbed. Ensure good drainage. Apply lime if pH is below 6.0.",
            planting: "Plant seeds 1-1.5 inches deep with row spacing of 15-30 inches. Seed rate should be 80-100 kg/ha. Plant when soil temperature is at least 55°F (13°C).",
            irrigation: "Critical water needs are during flowering and pod filling. Maintain consistent soil moisture during reproductive stages.",
            fertilization: "Soybeans require less nitrogen due to nitrogen fixation. Apply phosphorus and potassium according to soil test. A starter fertilizer with low N may benefit early growth.",
            pestControl: "Monitor for soybean aphids, bean leaf beetles, and stink bugs. Apply insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for sudden death syndrome, white mold, and soybean cyst nematode. Use resistant varieties and crop rotation to manage diseases.",
            harvesting: "Harvest when seed moisture is 13-15%. Combine when pods are brown and seeds rattle in the pods. Adjust combine settings to minimize seed damage."
        }
    },
    {
        name: "Potatoes",
        description: "A starchy tuber of the plant Solanum tuberosum, a root vegetable native to the Americas.",
        image: "https://pixabay.com/get/g5c3de924a541b23e6b40d0c2227998ebd98a2f0eb4322f03d43deac05634b4fadd6291325588049fcdc68a5ab760f64b793d1c10849d23f0dfb28b149beca176_1280.jpg",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.8, // Potatoes need high K
            phRange: [5.0, 6.5],
            ecRange: [0, 4],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"]
        },
        process: {
            seedSelection: "Use certified disease-free seed potatoes. Cut large tubers into pieces with at least 2-3 eyes each. Allow cut surfaces to heal for 1-2 days before planting.",
            landPreparation: "Plow deeply (8-10 inches) and prepare a loose, friable seedbed. Incorporate organic matter to improve soil structure. Apply lime if pH is below 5.0.",
            planting: "Plant seed pieces 3-4 inches deep with row spacing of 30-36 inches and seed spacing of 9-12 inches. Plant when soil temperature is at least 45°F (7°C).",
            irrigation: "Maintain consistent soil moisture, especially during tuber initiation and bulking. Avoid water stress that can lead to misshapen tubers.",
            fertilization: "Apply nitrogen in split applications: at planting and at hilling. High potassium is essential for potato quality. Apply 120-150 kg/ha N, 100-120 kg/ha P, and 150-180 kg/ha K.",
            pestControl: "Monitor for Colorado potato beetles, aphids, and leafhoppers. Use appropriate insecticides and consider row covers for early season protection.",
            diseaseManagement: "Watch for late blight, early blight, and scab. Use fungicides preventatively during wet periods. Maintain good air circulation by proper spacing.",
            harvesting: "Harvest after vines have died naturally or been killed. Dig carefully to avoid damaging tubers. Allow harvested potatoes to cure at 50-60°F (10-15°C) with high humidity for 10-14 days."
        }
    },
    {
        name: "Cotton",
        description: "A soft, fluffy staple fiber that grows in a protective case around the seeds of the cotton plant.",
        image: "https://pixabay.com/get/g15376b072d7e6c8bda571d3ac2a2ee248a05dc2daa38e987bd2473d7fb0fcf6982f5d634c4eefb6377f07e4bab8aa9b6ba611b5e3afbc10db7c0b1b51f35ac03_1280.jpg",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [5.8, 8.0],
            ecRange: [0, 7.7],
            organicMatter: 1.5,
            soilTextures: ["loamy", "clayey"]
        },
        process: {
            seedSelection: "Choose varieties adapted to your region with appropriate maturity class. Consider disease resistance, fiber quality, and yield potential.",
            landPreparation: "Deep plow and prepare a fine, firm seedbed. Remove crop residues from previous season. Apply pre-plant fertilizers based on soil test.",
            planting: "Plant seeds 1-1.5 inches deep with row spacing of 30-40 inches. Seeding rate varies by region and variety. Plant when soil temperature exceeds 60°F (16°C).",
            irrigation: "Critical irrigation periods are during squaring, flowering, and boll development. Use precise irrigation scheduling to avoid water stress.",
            fertilization: "Apply nitrogen in split applications: at planting, at squaring, and at early flowering. Total N requirement is 100-150 kg/ha depending on yield goal.",
            pestControl: "Monitor for bollworms, aphids, and thrips. Use integrated pest management and consider Bt cotton varieties where available.",
            diseaseManagement: "Watch for Verticillium wilt, bacterial blight, and boll rot. Use resistant varieties and proper crop rotation.",
            harvesting: "Harvest when 60-70% of bolls are open. Defoliate plants 10-14 days before harvest if using mechanical pickers. Ensure proper moisture content for storage."
        }
    },
    {
        name: "Sugarcane",
        description: "A tropical and subtropical perennial grass that is primarily grown for its sweet, juicy stems.",
        image: "https://pixabay.com/get/g07ee8d5b109134b2390b2243d5b16054fef8e7aeccdbfece3cebf24440b520d959ea80ddeed8aa217776f924571a26264f8c244e40965a6dc005ae0e3edaba19_1280.jpg",
        requirements: {
            nitrogen: 0.7, // Normalized value (0-1)
            phosphorus: 0.4, // Normalized value (0-1)
            potassium: 0.7, // Normalized value (0-1)
            phRange: [6.0, 7.5],
            ecRange: [0, 6],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey"]
        },
        process: {
            seedSelection: "Select disease-free seed canes from 6-9 month old nursery. Choose varieties suitable for your region and harvest season.",
            landPreparation: "Deep plow to 12-16 inches. Prepare raised beds in areas with high water table. Add organic matter to improve soil structure.",
            planting: "Plant 2-3 bud setts in furrows 4-6 inches deep with row spacing of 3-5 feet. Plant horizontally in dry areas and at 45° angle in humid areas.",
            irrigation: "Critical irrigation periods are establishment, tillering, and grand growth phases. Maintain adequate soil moisture throughout growth cycle.",
            fertilization: "Apply nitrogen in 2-3 splits with first application at 30-45 days after planting. Apply all phosphorus at planting and potassium in 1-2 splits.",
            pestControl: "Monitor for stem borers, white grubs, and termites. Use appropriate insecticides and cultural practices for control.",
            diseaseManagement: "Watch for red rot, smut, and ratoon stunting disease. Use disease-free planting material and resistant varieties.",
            harvesting: "Harvest when sugar content is highest, typically 10-12 months after planting for plant cane. Cut stalks at ground level and remove tops and leaves."
        }
    },
    {
        name: "Tomatoes",
        description: "An edible berry of the plant Solanum lycopersicum, commonly grown for culinary purposes.",
        image: "https://pixabay.com/get/gbccf62cfb00a3c26df6c8d2a73c7e9c8a4bf0dc78ef9b50df50a1e1cdd09c52c28bf9d3d8a8bdc60dbd6580ffc5aef5c_1280.jpg",
        requirements: {
            nitrogen: 0.5, // Normalized value (0-1)
            phosphorus: 0.6, // Normalized value (0-1)
            potassium: 0.7, // Normalized value (0-1)
            phRange: [6.0, 6.8],
            ecRange: [0, 2.5],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"]
        },
        process: {
            seedSelection: "Choose varieties suited to your climate and growing purpose (fresh market or processing). Consider disease resistance and growth habit (determinate or indeterminate).",
            landPreparation: "Prepare a well-drained seedbed with good tilth. Incorporate compost or well-rotted manure. Apply lime if pH is below 6.0.",
            planting: "Start seeds indoors 6-8 weeks before last frost. Transplant when soil temperature reaches 60°F (16°C). Space plants 18-36 inches apart depending on variety.",
            irrigation: "Maintain consistent soil moisture. Water deeply but infrequently. Use drip irrigation to keep foliage dry and reduce disease.",
            fertilization: "Apply balanced fertilizer at planting. Side-dress with nitrogen when first fruits are marble-sized. Avoid excessive N which promotes vegetative growth.",
            pestControl: "Monitor for tomato hornworms, whiteflies, and aphids. Use biological controls when possible and rotate insecticides to prevent resistance.",
            diseaseManagement: "Watch for early blight, late blight, and fusarium wilt. Use resistant varieties, proper spacing, and fungicides if necessary.",
            harvesting: "Harvest when fruits are firm and fully colored. Pick in morning when temperatures are cool. For best flavor, vine-ripen rather than harvest green."
        }
    }
];

// Make the data available globally
window.CROP_DATA = CROP_DATA;
