/**
 * Crop data for the recommendation system
 * Contains comprehensive information about various crops and their detailed growing requirements
 */

// Define the crop data
const CROP_DATA = [
    // CEREAL CROPS
    {
        name: "Wheat",
        description: "A cereal grain cultivated worldwide and one of the most important staple foods.",
        image: "https://pixabay.com/get/gcd54fdc85eaf0e45df89cf5aec90010a61e011471b00306cc26025aae50f160700036184e1c4733d03de4163b02b1757564e30c582b09cd9862c6728958a112f_1280.jpg",
        category: "Cereal",
        climate: "Temperate to subtropical",
        growingSeason: "Winter wheat: Fall planting, summer harvest; Spring wheat: Spring planting, late summer harvest",
        yieldPotential: "3-6 tons/hectare",
        nutritionalValue: "Rich in carbohydrates, moderate protein (8-15%), B vitamins, and minerals",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.4, // Normalized value (0-1)
            phRange: [5.5, 7.5],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey", "silty"],
            temperature: {
                germination: "12-25°C",
                growth: "15-24°C",
                optimal: "18-22°C"
            },
            waterRequirement: "450-650 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose high-quality, disease-resistant wheat varieties suitable for your region. Common varieties include Hard Red Winter Wheat, Soft Red Winter Wheat, or Spring Wheat. Consider regional adaptation, disease resistance, yield potential, and end-use quality.",
            landPreparation: "Plow to a depth of 6-8 inches and prepare a fine seedbed. Remove weeds and level the field. Apply base fertilizer according to soil test recommendations. Ensure good drainage and remove previous crop residues or incorporate them well before planting.",
            planting: "Plant seeds at a depth of 1-1.5 inches with row spacing of 6-7 inches. Seed rate should be 100-125 kg/ha. Best planting time is early autumn for winter wheat or early spring for spring wheat. Ensure good seed-to-soil contact by using proper seeding equipment.",
            irrigation: "Ensure adequate moisture at planting. Critical irrigation stages are tillering, jointing, flowering, and grain filling. Avoid waterlogging. Apply 25-30 mm water at critical growth stages if natural precipitation is insufficient.",
            fertilization: "Apply nitrogen in split doses: 30% at planting, 40% at tillering, and 30% at heading. Apply all phosphorus and potassium at planting. Total requirements: 100-150 kg N/ha, 50-60 kg P/ha, and 60-80 kg K/ha depending on soil fertility and yield goals.",
            pestControl: "Monitor for aphids, armyworms, and weevils. Use appropriate insecticides when threshold levels are reached. Implement integrated pest management, including crop rotation, timely planting, and biological controls when possible.",
            diseaseManagement: "Watch for rust, powdery mildew, and Fusarium head blight. Apply fungicides preventatively during heading and flowering stages if disease pressure is high. Use resistant varieties and crop rotation as primary prevention strategies.",
            harvesting: "Harvest when grain moisture content is 13-14%. Combine harvester settings should be adjusted to minimize grain damage and losses. Optimal harvesting timing is when kernels are hard (not easily dented by fingernail) and straw is yellow.",
            storage: "Store at moisture content below 13% in clean, dry, and insect-free conditions. Monitor regularly for temperature increases and insect infestations. Proper storage facilities should control temperature and humidity to maintain quality.",
            cropRotation: "Rotate with legumes, oilseeds, or other non-cereal crops to break disease and pest cycles. Avoid planting after corn or other cereals to reduce Fusarium risk."
        },
        varieties: [
            {
                name: "Hard Red Winter Wheat",
                description: "High protein content, grown in cold climates, planted in fall and harvested in summer",
                adaptability: "Great Plains of North America, similar temperate regions"
            },
            {
                name: "Soft Red Winter Wheat",
                description: "Lower protein, softer texture, used for pastries and cakes",
                adaptability: "Eastern and Southern United States, humid regions"
            },
            {
                name: "Hard Red Spring Wheat",
                description: "High protein, planted in spring and harvested in late summer",
                adaptability: "Northern Great Plains, Canada, northern climates"
            },
            {
                name: "Soft White Wheat",
                description: "Low protein, light-colored, used for pastries and Asian noodles",
                adaptability: "Pacific Northwest, irrigated areas"
            },
            {
                name: "Durum Wheat",
                description: "Very hard, high protein wheat used for pasta and semolina products",
                adaptability: "Arid regions with hot days and cool nights"
            }
        ]
    },
    {
        name: "Maize (Corn)",
        description: "A cereal grain first domesticated in Mexico and now grown globally for food, feed, and fuel.",
        image: "https://pixabay.com/get/g2acaab70ccf39605b45327c286f70942d36a65166167733d1bb84c75583b3127ab071d5e8dcab7d8bc41c1e64a3196e4529724eeff4db3c62e8c48fb5361870d_1280.jpg",
        category: "Cereal",
        climate: "Tropical to temperate",
        growingSeason: "Spring planting, late summer/fall harvest",
        yieldPotential: "5-12 tons/hectare",
        nutritionalValue: "High in carbohydrates, moderate protein (9-10%), dietary fiber, and essential minerals",
        requirements: {
            nitrogen: 0.7, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [5.8, 7.0],
            ecRange: [0, 3.5],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"],
            temperature: {
                germination: "18-30°C",
                growth: "20-30°C",
                optimal: "25-28°C"
            },
            waterRequirement: "500-800 mm throughout growing season"
        },
        process: {
            seedSelection: "Select hybrid varieties suited to your region and purpose (grain or silage). Consider disease resistance and maturity days. Choose varieties with traits appropriate for end use: sweetness for fresh consumption, starch content for industrial use, or protein content for animal feed.",
            landPreparation: "Deep plow to 8-10 inches and create a well-pulverized seedbed. Remove crop residues or incorporate them well. Apply lime if pH is below 5.8. Create furrows in areas with water scarcity and ensure good drainage in high-rainfall areas.",
            planting: "Plant seeds 1.5-2 inches deep with row spacing of 30 inches and plant spacing of 8-10 inches. Seed rate should be 20-25 kg/ha. Plant when soil temperature reaches 50-55°F (10-13°C). For optimum emergence, soil temperature should be above 10°C consistently for several days.",
            irrigation: "Critical watering periods are during tasseling, silking, and grain filling. Maintain adequate soil moisture without waterlogging. Water requirement is highest during the reproductive phase; stress during this period can reduce yield by 40-50%.",
            fertilization: "Apply 30% nitrogen, all phosphorus and potassium at planting. Side-dress remaining nitrogen when plants are knee-high. Total N requirement is 150-180 kg/ha. Consider micronutrients like zinc and sulfur, especially in high-yielding varieties.",
            pestControl: "Monitor for corn borers, armyworms, and rootworms. Apply insecticides when threshold levels are reached or use Bt corn varieties. Implement cultural practices such as crop rotation and timely planting to reduce pest pressure.",
            diseaseManagement: "Watch for northern corn leaf blight, gray leaf spot, and stalk rots. Use resistant varieties and crop rotation to minimize disease pressure. Apply fungicides at early tasseling stage if disease pressure is high or weather conditions favor disease development.",
            harvesting: "Harvest for grain when kernels show black layer formation and moisture is 23-25%. Harvest for silage at 65-70% moisture when kernels are at dough stage. Adjust combine settings based on crop condition and yield to minimize losses.",
            storage: "Dry grain to 13-14% moisture for long-term storage. Ensure storage facilities are clean, cool, dry, and protected from pests. Monitor grain temperature regularly to detect hot spots that might indicate insect activity or mold development.",
            cropRotation: "Rotate with legumes, small grains, or other non-related crops to break pest cycles and improve soil health. Avoid continuous corn if possible, as it increases disease and pest pressure."
        },
        varieties: [
            {
                name: "Dent Corn",
                description: "Field corn used primarily for animal feed and industrial products, characterized by a dent in the kernel",
                adaptability: "Widely grown in temperate regions"
            },
            {
                name: "Flint Corn",
                description: "Hard outer layer, more resistant to spoilage and pests, often used for cornmeal",
                adaptability: "Central and South America, regions with high humidity"
            },
            {
                name: "Sweet Corn",
                description: "Higher sugar content, harvested immature for fresh consumption",
                adaptability: "Temperate regions with good irrigation"
            },
            {
                name: "Popcorn",
                description: "Special type that expands when heated, hard moisture-sealed hull",
                adaptability: "Similar to dent corn regions but requires specific growing conditions"
            },
            {
                name: "Flour Corn",
                description: "Soft starch content, easily ground into flour",
                adaptability: "Traditional crop in Native American agriculture, adaptable to various regions"
            }
        ]
    },
    {
        name: "Rice",
        description: "A cereal grain that is the most widely consumed staple food for a large part of the world's population.",
        image: "https://pixabay.com/get/g564c9ce37e679a2bfedb365dfac837af20df0cf3cb001d31d519b72f4c238a573b1e7d1b0f0df97bb3e313f8cf61a21138566e67138820fe461b8cea5bb91a44_1280.jpg",
        category: "Cereal",
        climate: "Tropical to subtropical",
        growingSeason: "Varies by region: wet season planting is common in tropical areas",
        yieldPotential: "3-10 tons/hectare depending on system and variety",
        nutritionalValue: "High in carbohydrates, moderate protein (7-8%), low fat, source of B vitamins",
        requirements: {
            nitrogen: 0.8, // Normalized value (0-1)
            phosphorus: 0.4, // Normalized value (0-1)
            potassium: 0.5, // Normalized value (0-1)
            phRange: [5.0, 6.5],
            ecRange: [0, 3],
            organicMatter: 2.5,
            soilTextures: ["clayey", "silty"],
            temperature: {
                germination: "20-35°C",
                growth: "20-35°C",
                optimal: "25-30°C"
            },
            waterRequirement: "1000-1500 mm throughout growing season for lowland rice"
        },
        process: {
            seedSelection: "Select varieties suited to your region and growing method (lowland or upland). Consider disease resistance and grain quality traits. Choose varieties based on cooking quality, fragrance, and market preferences in your region.",
            landPreparation: "For lowland rice, plow and puddle the soil to create a fine, level seedbed with a hardpan beneath. For upland rice, prepare a well-drained seedbed. Incorporate organic matter and level the field precisely for water management in paddy cultivation.",
            planting: "For transplanted rice, raise seedlings for 20-30 days before transplanting. For direct seeding, sow pre-germinated seeds onto prepared fields. Plant spacing is typically 20 x 20 cm. Direct seeding requires 60-80 kg/ha of seeds while transplanting requires 40-50 kg/ha.",
            irrigation: "Maintain 2-5 cm water depth during vegetative stage. Drain field for 7-10 days at maximum tillering. Flood again during reproductive stage. Drain 2-3 weeks before harvest. Critical stages for water are panicle initiation, flowering, and early grain filling.",
            fertilization: "Apply nitrogen in 3 splits: at planting, active tillering, and panicle initiation. Apply all phosphorus at planting and potassium in 2 splits. Total requirements: 100-150 kg N/ha, 30-60 kg P/ha, and 60-100 kg K/ha depending on variety and target yield.",
            pestControl: "Monitor for stem borers, plant hoppers, and leaf folders. Use integrated pest management practices including resistant varieties. Consider biological controls like ducks in rice paddies where appropriate.",
            diseaseManagement: "Watch for blast, bacterial leaf blight, and sheath blight. Use resistant varieties and proper water management to reduce disease pressure. Apply fungicides preventatively if disease history exists in the area or conditions favor disease development.",
            harvesting: "Harvest when 80-85% of grains are straw-colored. Moisture content should be around 20-25%. Dry to 14% moisture for storage. In mechanized systems, adjust combine harvester settings to minimize grain breakage.",
            storage: "Store at 12-14% moisture in clean, dry conditions. Protect from rodents and insects. Use hermetic storage where possible to control insect pests without chemicals.",
            cropRotation: "In areas with seasonal cultivation, rotate with legumes, vegetables, or fish farming. In intensive systems, practice proper stubble management between consecutive rice crops."
        },
        varieties: [
            {
                name: "Indica Rice",
                description: "Long, slender grains that remain separate after cooking, common in tropical regions",
                adaptability: "Lowland tropical areas, particularly Southeast Asia"
            },
            {
                name: "Japonica Rice",
                description: "Short to medium grains, sticky when cooked, higher tolerance to cooler temperatures",
                adaptability: "Temperate East Asia, California, Mediterranean regions"
            },
            {
                name: "Basmati Rice",
                description: "Long-grain aromatic rice with distinct flavor",
                adaptability: "Northern India, Pakistan, similar climates with proper irrigation"
            },
            {
                name: "Jasmine Rice",
                description: "Aromatic long-grain rice with soft, slightly sticky texture when cooked",
                adaptability: "Thailand and Southeast Asia"
            },
            {
                name: "Glutinous Rice",
                description: "Very sticky when cooked, used for desserts and specialty dishes",
                adaptability: "Southeast Asia, especially in upland areas"
            }
        ]
    },
    // LEGUMES AND PULSES
    {
        name: "Soybeans",
        description: "A legume native to East Asia, widely grown for its edible bean and oil production.",
        image: "https://pixabay.com/get/g9da06a235b05b14ff32df2e8270e44594d2f3b3fa9f1b338a3ccd3cc87467a0f0d17a7b872160496e21b6cca974b54073fdf3a79595d6b5810072766eb06393e_1280.jpg",
        category: "Legume",
        climate: "Temperate to subtropical",
        growingSeason: "Spring planting, fall harvest in temperate regions",
        yieldPotential: "2-5 tons/hectare",
        nutritionalValue: "High protein (36-40%), high oil (18-20%), dietary fiber, and micronutrients",
        requirements: {
            nitrogen: 0.3, // Lower N requirement due to N fixation
            phosphorus: 0.6, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [6.0, 7.0],
            ecRange: [0, 5],
            organicMatter: 2,
            soilTextures: ["loamy", "silty", "clayey"],
            temperature: {
                germination: "15-30°C",
                growth: "20-30°C",
                optimal: "25-28°C"
            },
            waterRequirement: "450-700 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties appropriate for your latitude and growing season length. Consider disease resistance packages and maturity groups. Select varieties based on end-use: high protein for food, high oil for crushing, or specialized traits for specific markets.",
            landPreparation: "Till to a depth of 6-8 inches and prepare a smooth seedbed. Ensure good drainage. Apply lime if pH is below 6.0. Remove compaction layers that might restrict root development and reduce nodulation.",
            planting: "Plant seeds 1-1.5 inches deep with row spacing of 15-30 inches. Seed rate should be 80-100 kg/ha. Plant when soil temperature is at least 55°F (13°C). Inoculate seeds with appropriate Bradyrhizobium japonicum strains if soybeans haven't been grown in the field for several years.",
            irrigation: "Critical water needs are during flowering and pod filling. Maintain consistent soil moisture during reproductive stages. Water stress during flowering and pod fill can reduce yields by 20-40%.",
            fertilization: "Soybeans require less nitrogen due to nitrogen fixation. Apply phosphorus and potassium according to soil test. A starter fertilizer with low N may benefit early growth. Consider micronutrients, especially molybdenum, which is essential for nitrogen fixation.",
            pestControl: "Monitor for soybean aphids, bean leaf beetles, and stink bugs. Apply insecticides when threshold levels are reached. Scout regularly for insect pests, especially during flowering and pod development stages.",
            diseaseManagement: "Watch for sudden death syndrome, white mold, and soybean cyst nematode. Use resistant varieties and crop rotation to manage diseases. For areas with high disease pressure, consider preventative fungicide applications at beginning bloom and early pod development.",
            harvesting: "Harvest when seed moisture is 13-15%. Combine when pods are brown and seeds rattle in the pods. Adjust combine settings to minimize seed damage. Harvest promptly when ready to avoid field losses from pod shattering.",
            storage: "Store at 12-13% moisture in clean, dry conditions. Monitor regularly for heating and insect activity. Use cool, dry storage conditions to maintain quality and prevent mold growth.",
            cropRotation: "Rotate with non-legume crops such as corn, wheat, or sorghum. Avoid planting after other legumes. A three to four-year rotation away from soybeans is ideal for managing soil-borne diseases."
        },
        varieties: [
            {
                name: "Conventional Soybeans",
                description: "Traditional varieties without specific genetic modifications, widely grown for general purposes",
                adaptability: "Vary by maturity group, suitable for different latitudes"
            },
            {
                name: "High-Protein Soybeans",
                description: "Specialized varieties with higher protein content for food products like tofu and soymilk",
                adaptability: "Similar to conventional soybeans but may have more specific climate requirements"
            },
            {
                name: "High-Oil Soybeans",
                description: "Varieties bred for higher oil content for vegetable oil production",
                adaptability: "Perform best in regions with longer growing seasons"
            },
            {
                name: "Vegetable Soybeans (Edamame)",
                description: "Harvested immature for direct human consumption as a vegetable",
                adaptability: "Require specific management for vegetable-quality production"
            },
            {
                name: "Natto Soybeans",
                description: "Small-seeded varieties used for production of natto, a traditional Japanese food",
                adaptability: "Specific varieties grown primarily for export to Asian markets"
            }
        ]
    },
    {
        name: "Chickpeas (Garbanzo Beans)",
        description: "A nutrient-dense legume crop with high protein content, widely used in Mediterranean and Middle Eastern cuisines.",
        image: "https://pixabay.com/get/g0ced5fa0ed5b3b63f5584c2bf9e3fbb7c7aa6de8a9f2cf5ad30f073c5c93ff2c6a1fe66a4acc2d2a1f2979aee98c5f53_1280.jpg",
        category: "Legume",
        climate: "Semi-arid to subtropical",
        growingSeason: "Winter crop in subtropical regions, spring/summer crop in temperate areas",
        yieldPotential: "1-2.5 tons/hectare",
        nutritionalValue: "High protein (20-30%), dietary fiber, folate, iron, phosphorus, and complex carbohydrates",
        requirements: {
            nitrogen: 0.3, // Lower due to N fixation
            phosphorus: 0.6,
            potassium: 0.5,
            phRange: [6.0, 7.5],
            ecRange: [0, 6],
            organicMatter: 1.5,
            soilTextures: ["loamy", "sandy loam"],
            temperature: {
                germination: "15-25°C",
                growth: "18-26°C",
                optimal: "21-24°C"
            },
            waterRequirement: "400-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties appropriate for your region (Desi or Kabuli types). Consider disease resistance, especially for Ascochyta blight and Fusarium wilt.",
            landPreparation: "Prepare a well-drained seedbed with moderate tilth. Chickpeas prefer soils with good drainage and moderate fertility.",
            planting: "Plant seeds 3-5 cm deep with row spacing of 30-45 cm. Seed rate is typically 70-100 kg/ha. Inoculate with appropriate Rhizobium if chickpeas are new to the field.",
            irrigation: "Critical irrigation periods are at pre-flowering and pod filling stages. Chickpeas are moderately drought-tolerant but yield better with adequate moisture.",
            fertilization: "Apply starter nitrogen (15-20 kg N/ha) and recommended rates of phosphorus (20-40 kg P/ha) and potassium based on soil tests.",
            pestControl: "Monitor for pod borers, aphids, and leaf miners. Apply insecticides when economic thresholds are reached.",
            diseaseManagement: "Watch for Ascochyta blight, Fusarium wilt, and Botrytis gray mold. Use resistant varieties and fungicide applications in humid conditions.",
            harvesting: "Harvest when plants are mature and most pods are dry. Moisture content should be 15-18% for machine harvest.",
            storage: "Store at 12% moisture in clean, dry conditions protected from insects and rodents.",
            cropRotation: "Rotate with cereals or other non-legume crops. Avoid planting after other legumes or crops susceptible to similar diseases."
        },
        varieties: [
            {
                name: "Kabuli Chickpeas",
                description: "Large, cream-colored seeds used in Mediterranean and Middle Eastern cuisines",
                adaptability: "Areas with longer growing seasons and moderate temperatures"
            },
            {
                name: "Desi Chickpeas",
                description: "Smaller, darker seeds with higher fiber content, commonly used in Indian subcontinent",
                adaptability: "More drought-tolerant, suitable for semi-arid regions"
            }
        ]
    },
    {
        name: "Lentils",
        description: "Small, lens-shaped legumes that are a nutritional powerhouse and cook quickly.",
        image: "https://pixabay.com/get/g1d01e3c7a0022e73c10af7d9d65a57a23e3dbfa1c34f7e47fe10bb2f50ce8a88e3e4471fe34c4e0c9b0d65d2b8f631bd_1280.jpg",
        category: "Legume",
        climate: "Cool temperate to subtropical",
        growingSeason: "Winter crop in subtropical regions, spring crop in temperate areas",
        yieldPotential: "1-3 tons/hectare",
        nutritionalValue: "High protein (25%), dietary fiber, folate, iron, and complex carbohydrates",
        requirements: {
            nitrogen: 0.2, // Low due to N fixation
            phosphorus: 0.5,
            potassium: 0.4,
            phRange: [6.0, 8.0],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "sandy loam", "silty"],
            temperature: {
                germination: "15-25°C",
                growth: "15-25°C",
                optimal: "18-24°C"
            },
            waterRequirement: "350-500 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties appropriate for your region and market (red, green, or specialty types). Consider disease resistance packages.",
            landPreparation: "Prepare a firm, level seedbed. Lentils prefer well-drained soils with good moisture-holding capacity.",
            planting: "Plant seeds 2.5-4 cm deep with row spacing of 15-30 cm. Seed rate is typically 80-110 kg/ha depending on seed size.",
            irrigation: "Lentils are relatively drought-tolerant but benefit from irrigation at flowering and pod filling stages.",
            fertilization: "Apply minimal starter nitrogen and recommended rates of phosphorus and potassium based on soil tests.",
            pestControl: "Monitor for aphids, weevils, and pod borers. Use integrated pest management strategies.",
            diseaseManagement: "Watch for Ascochyta blight, Sclerotinia white mold, and root rots. Maintain proper crop rotation and use resistant varieties.",
            harvesting: "Harvest when plants are mature and pods are dry but before excessive shattering. Swathing before combining is common in some regions.",
            storage: "Store at 13% moisture or less in clean, dry conditions.",
            cropRotation: "Rotate with cereals or other non-legume crops. Avoid planting after other legumes."
        },
        varieties: [
            {
                name: "Red Lentils",
                description: "Small, split lentils that cook quickly and break down in cooking",
                adaptability: "Widely adaptable, grown extensively in semi-arid regions"
            },
            {
                name: "Green Lentils",
                description: "Larger lentils that hold their shape when cooked",
                adaptability: "Temperate regions with moderate rainfall"
            },
            {
                name: "Black (Beluga) Lentils",
                description: "Small, black lentils with rich flavor that hold shape when cooked",
                adaptability: "Similar to green lentils, require good moisture"
            },
            {
                name: "French (Puy) Lentils",
                description: "Small, dark green to bluish-black lentils with distinctive flavor",
                adaptability: "Originally from volcanic soils, adapt to well-drained soils in various regions"
            }
        ]
    },
    // ROOT CROPS
    {
        name: "Potatoes",
        description: "A starchy tuber of the plant Solanum tuberosum, a root vegetable native to the Americas.",
        image: "https://pixabay.com/get/g5c3de924a541b23e6b40d0c2227998ebd98a2f0eb4322f03d43deac05634b4fadd6291325588049fcdc68a5ab760f64b793d1c10849d23f0dfb28b149beca176_1280.jpg",
        category: "Root/Tuber",
        climate: "Cool temperate to subtropical",
        growingSeason: "Spring planting, summer/fall harvest in temperate regions",
        yieldPotential: "25-50 tons/hectare",
        nutritionalValue: "Primarily carbohydrates, vitamin C, potassium, and dietary fiber",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.8, // Potatoes need high K
            phRange: [5.0, 6.5],
            ecRange: [0, 4],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"],
            temperature: {
                germination: "7-30°C",
                growth: "15-25°C",
                optimal: "18-22°C"
            },
            waterRequirement: "500-700 mm throughout growing season"
        },
        process: {
            seedSelection: "Use certified disease-free seed potatoes. Cut large tubers into pieces with at least 2-3 eyes each. Allow cut surfaces to heal for 1-2 days before planting. Select varieties suited to intended use (table, processing, storage) and regional diseases.",
            landPreparation: "Plow deeply (8-10 inches) and prepare a loose, friable seedbed. Incorporate organic matter to improve soil structure. Apply lime if pH is below 5.0. Form raised beds in heavier soils or areas with high rainfall to improve drainage.",
            planting: "Plant seed pieces 3-4 inches deep with row spacing of 30-36 inches and seed spacing of 9-12 inches. Plant when soil temperature is at least 45°F (7°C). Space seed pieces 20-30 cm apart within rows and 70-90 cm between rows. Planting depth varies with soil conditions: shallower in heavy, cool soils; deeper in light, warm soils.",
            irrigation: "Maintain consistent soil moisture, especially during tuber initiation and bulking. Avoid water stress that can lead to misshapen tubers. Most critical periods are during tuber initiation (beginning about 60 days after planting) and throughout tuber growth.",
            fertilization: "Apply nitrogen in split applications: at planting and at hilling. High potassium is essential for potato quality. Apply 120-150 kg/ha N, 100-120 kg/ha P, and 150-180 kg/ha K. Base specific rates on soil tests and yield goals. Consider micronutrients, especially zinc and manganese in deficient soils.",
            pestControl: "Monitor for Colorado potato beetles, aphids, and leafhoppers. Use appropriate insecticides and consider row covers for early season protection. Implement integrated pest management including crop rotation, trap crops, and biological controls when possible.",
            diseaseManagement: "Watch for late blight, early blight, and scab. Use fungicides preventatively during wet periods. Maintain good air circulation by proper spacing. Follow a regular fungicide spray schedule during periods of high disease risk, especially in humid regions.",
            harvesting: "Harvest after vines have died naturally or been killed. Dig carefully to avoid damaging tubers. Allow harvested potatoes to cure at 50-60°F (10-15°C) with high humidity for 10-14 days. Kill vines 2-3 weeks before harvest to allow skin to set for better storage quality.",
            storage: "Store table potatoes at 4-6°C with 90-95% relative humidity. Processing potatoes require warmer temperatures (7-10°C) to prevent sugar accumulation. Keep in dark conditions to prevent greening.",
            cropRotation: "Use a minimum 3-year rotation away from potatoes and other solanaceous crops (tomatoes, peppers, eggplant). Ideal rotation crops include grains, legumes, and grass forages."
        },
        varieties: [
            {
                name: "Russet Potatoes",
                description: "Large, oblong potatoes with russet skin and white flesh, good for baking and frying",
                adaptability: "Cool regions with moderate rainfall, sandy loam soils"
            },
            {
                name: "Red Potatoes",
                description: "Smaller, round potatoes with red skin and white flesh, waxy texture good for boiling and roasting",
                adaptability: "Widely adaptable, perform well in warmer potato-growing regions"
            },
            {
                name: "White Potatoes",
                description: "All-purpose potatoes with white skin and flesh, medium starch content",
                adaptability: "Similar to russets but more adaptable to various conditions"
            },
            {
                name: "Yellow/Gold Potatoes",
                description: "Yellow flesh with buttery flavor, medium starch content",
                adaptability: "Similar to white potatoes, widely grown in Europe and increasingly in North America"
            },
            {
                name: "Purple/Blue Potatoes",
                description: "Colorful skin and flesh with high antioxidant content, specialty market",
                adaptability: "Similar to red potatoes, novelty varieties in many regions"
            }
        ]
    },
    {
        name: "Sweet Potatoes",
        description: "A starchy, sweet-tasting root vegetable from the morning glory family, rich in nutrients.",
        image: "https://pixabay.com/get/g88c60b0aa6fa724e2db3c34339adc08ef90cdbd06c26d5b7a1cbbaa50b1cd9ae7b2ecfd27b80dc95adac1aa0ea48ad16_1280.jpg",
        category: "Root/Tuber",
        climate: "Tropical to subtropical",
        growingSeason: "Requires 3-5 frost-free months, planted after all danger of frost has passed",
        yieldPotential: "15-40 tons/hectare",
        nutritionalValue: "Rich in complex carbohydrates, dietary fiber, beta-carotene (vitamin A), vitamin C, and potassium",
        requirements: {
            nitrogen: 0.4, // Moderate N requirement
            phosphorus: 0.5,
            potassium: 0.7,
            phRange: [5.5, 6.5],
            ecRange: [0, 3],
            organicMatter: 2,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "20-30°C",
                growth: "20-30°C",
                optimal: "24-27°C"
            },
            waterRequirement: "500-750 mm throughout growing season"
        },
        process: {
            seedSelection: "Use vine cuttings (slips) from disease-free sources. Different varieties are suited for different uses and markets.",
            landPreparation: "Prepare raised beds with good drainage. Sweet potatoes prefer loose, friable soil with moderate fertility.",
            planting: "Plant slips 30 cm apart in rows 90-120 cm apart. Plant after soil temperatures reach 65°F (18°C) consistently.",
            irrigation: "Provide consistent moisture during establishment and root development. Reduce irrigation as harvest approaches.",
            fertilization: "Apply moderate nitrogen (50-60 kg N/ha), phosphorus, and potassium based on soil tests. Excessive nitrogen promotes vine growth at the expense of root development.",
            pestControl: "Monitor for sweet potato weevils, wireworms, and flea beetles. Use crop rotation and clean planting material.",
            diseaseManagement: "Watch for scurf, soil rot, and various viral diseases. Use disease-free planting material and crop rotation.",
            harvesting: "Harvest before soil temperatures drop below 55°F (13°C). Cut vines before digging roots. Handle carefully to avoid damage.",
            storage: "Cure at 29-32°C with 85-90% humidity for 4-7 days, then store at 13-16°C with high humidity.",
            cropRotation: "Rotate with grains, legumes, or other unrelated crops. Avoid following or preceding other root crops."
        },
        varieties: [
            {
                name: "Orange-fleshed Sweet Potatoes",
                description: "High in beta-carotene, moist texture when cooked",
                adaptability: "Widely grown globally, especially in warmer regions"
            },
            {
                name: "White/Cream-fleshed Sweet Potatoes",
                description: "Drier, less sweet texture, popular in tropical regions",
                adaptability: "Tropical and subtropical regions"
            },
            {
                name: "Purple-fleshed Sweet Potatoes",
                description: "High in anthocyanins, specialty and health food markets",
                adaptability: "Similar to orange varieties, growing in popularity"
            }
        ]
    },
    {
        name: "Cassava (Manioc)",
        description: "A woody shrub native to South America grown for its starchy tuberous root, a major source of carbohydrates in tropical regions.",
        image: "https://pixabay.com/get/g94aa7aea23cee31fc6a78d3ca05eec4e4a13fea6e5a0fe38b63c3e2f4f0702e095c6ad6cae69b9adf7d7a2f7eaafd6a7_1280.jpg",
        category: "Root/Tuber",
        climate: "Tropical to subtropical",
        growingSeason: "8-24 months depending on region and use",
        yieldPotential: "10-40 tons/hectare",
        nutritionalValue: "High in carbohydrates, moderate fiber, some vitamin C and minerals",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.4,
            potassium: 0.7,
            phRange: [5.5, 6.5],
            ecRange: [0, 4],
            organicMatter: 1.5,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "25-35°C",
                growth: "25-35°C",
                optimal: "25-29°C"
            },
            waterRequirement: "1000-1500 mm annually, but highly drought-tolerant once established"
        },
        process: {
            seedSelection: "Use healthy stem cuttings (20-30 cm long) from mature plants (8-12 months old). Select varieties based on purpose (sweet varieties for direct consumption, bitter varieties for processing).",
            landPreparation: "Prepare soil with moderate tillage. Cassava can grow in poor soils but responds well to good soil preparation.",
            planting: "Plant stem cuttings horizontally, vertically, or at an angle, 5-10 cm deep. Space plants 1m x 1m for most production systems.",
            irrigation: "Cassava is drought-tolerant but yields better with adequate rainfall during the first 3-5 months after planting.",
            fertilization: "Apply moderate fertilizer based on soil fertility. Typical rates are 50-100 kg N/ha, 40-80 kg P/ha, and 50-100 kg K/ha.",
            pestControl: "Monitor for cassava mealybugs, green mites, and whiteflies. Use pest-resistant varieties and biological control when available.",
            diseaseManagement: "Watch for cassava mosaic virus, brown streak disease, and bacterial blight. Use disease-free planting material.",
            harvesting: "Harvest roots 8-24 months after planting depending on variety and use. Sweet varieties are typically harvested earlier than bitter varieties for processing.",
            storage: "Fresh cassava roots deteriorate quickly after harvest. Process immediately or use preservation methods like waxing or freezing.",
            cropRotation: "Rotate with legumes to improve soil fertility. Avoid consecutive plantings in the same field."
        },
        varieties: [
            {
                name: "Sweet Cassava",
                description: "Lower cyanogenic glycoside content, suitable for direct consumption after cooking",
                adaptability: "Widely grown in home gardens and for fresh markets"
            },
            {
                name: "Bitter Cassava",
                description: "Higher cyanogenic glycoside content, requires processing to remove toxins, higher yields",
                adaptability: "Grown for industrial processing and in areas with higher pest pressure"
            }
        ]
    },
    // FIBER CROPS
    {
        name: "Cotton",
        description: "A soft, fluffy staple fiber that grows in a protective case around the seeds of the cotton plant.",
        image: "https://pixabay.com/get/g15376b072d7e6c8bda571d3ac2a2ee248a05dc2daa38e987bd2473d7fb0fcf6982f5d634c4eefb6377f07e4bab8aa9b6ba611b5e3afbc10db7c0b1b51f35ac03_1280.jpg",
        category: "Fiber",
        climate: "Subtropical to tropical",
        growingSeason: "150-180 days from planting to harvest",
        yieldPotential: "2-5 bales/hectare (1 bale = 480 lbs or 218 kg of lint)",
        nutritionalValue: "Cottonseed is high in protein and oil, used for livestock feed and cooking oil",
        requirements: {
            nitrogen: 0.6, // Normalized value (0-1)
            phosphorus: 0.5, // Normalized value (0-1)
            potassium: 0.6, // Normalized value (0-1)
            phRange: [5.8, 8.0],
            ecRange: [0, 7.7],
            organicMatter: 1.5,
            soilTextures: ["loamy", "clayey"],
            temperature: {
                germination: "15-30°C",
                growth: "20-30°C",
                optimal: "25-30°C"
            },
            waterRequirement: "700-1300 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties adapted to your region with appropriate maturity class. Consider disease resistance, fiber quality, and yield potential. Varieties differ in fiber length, strength, and micronaire (fineness), which affect their market value and end-use.",
            landPreparation: "Deep plow and prepare a fine, firm seedbed. Remove crop residues from previous season. Apply pre-plant fertilizers based on soil test. Create slightly raised beds in areas with higher rainfall to improve drainage and prevent waterlogging.",
            planting: "Plant seeds 1-1.5 inches deep with row spacing of 30-40 inches. Seeding rate varies by region and variety. Plant when soil temperature exceeds 60°F (16°C). Optimal soil temperature for rapid germination is 18-30°C. Consider precision planting for uniform stand establishment.",
            irrigation: "Critical irrigation periods are during squaring, flowering, and boll development. Use precise irrigation scheduling to avoid water stress. Deficit irrigation during early vegetative growth may promote deeper rooting, while adequate moisture during reproductive stages is essential for yield.",
            fertilization: "Apply nitrogen in split applications: at planting, at squaring, and at early flowering. Total N requirement is 100-150 kg/ha depending on yield goal. Add 50-80 kg P/ha and 80-120 kg K/ha based on soil tests and yield goals. Consider foliar applications of potassium during boll development.",
            pestControl: "Monitor for bollworms, aphids, and thrips. Use integrated pest management and consider Bt cotton varieties where available. Establish economic thresholds for pest management decisions and use selective insecticides to preserve beneficial insects.",
            diseaseManagement: "Watch for Verticillium wilt, bacterial blight, and boll rot. Use resistant varieties and proper crop rotation. Fungicide applications may be necessary in areas with high disease pressure, especially during periods of wet weather.",
            harvesting: "Harvest when 60-70% of bolls are open. Defoliate plants 10-14 days before harvest if using mechanical pickers. Ensure proper moisture content for storage. Timing of defoliation and harvest is critical for fiber quality; avoid harvesting during high humidity or wet conditions.",
            storage: "Store harvested cotton at appropriate moisture levels to prevent heating and discoloration. Module storage should be on well-drained sites with proper covering to protect from weather.",
            cropRotation: "Rotate with corn, sorghum, or small grains to break pest and disease cycles. A minimum 2-year rotation away from cotton is recommended in areas with high disease pressure."
        },
        varieties: [
            {
                name: "Upland Cotton",
                description: "Most widely grown type worldwide, accounting for over 90% of production",
                adaptability: "Broad adaptation to cotton-growing regions globally"
            },
            {
                name: "Pima Cotton (Extra-Long Staple)",
                description: "Longer, finer fibers used for premium textiles",
                adaptability: "Warm regions with long growing seasons like Egypt, Peru, and southwestern US"
            },
            {
                name: "Organic Cotton",
                description: "Grown without synthetic chemicals, increasing in demand for sustainable textiles",
                adaptability: "Similar to conventional cotton but requires more intensive management"
            },
            {
                name: "Colored Cotton",
                description: "Naturally colored fibers in shades of brown, green, or red",
                adaptability: "Specialty production, similar requirements to upland cotton"
            }
        ]
    },
    // SUGAR CROPS
    {
        name: "Sugarcane",
        description: "A tropical and subtropical perennial grass that is primarily grown for its sweet, juicy stems.",
        image: "https://pixabay.com/get/g07ee8d5b109134b2390b2243d5b16054fef8e7aeccdbfece3cebf24440b520d959ea80ddeed8aa217776f924571a26264f8c244e40965a6dc005ae0e3edaba19_1280.jpg",
        category: "Sugar",
        climate: "Tropical to subtropical",
        growingSeason: "9-24 months depending on region",
        yieldPotential: "60-150 tons/hectare of cane (6-15 tons sugar)",
        nutritionalValue: "High in simple carbohydrates (sucrose), some minerals",
        requirements: {
            nitrogen: 0.7, // Normalized value (0-1)
            phosphorus: 0.4, // Normalized value (0-1)
            potassium: 0.7, // Normalized value (0-1)
            phRange: [6.0, 7.5],
            ecRange: [0, 6],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey"],
            temperature: {
                germination: "25-35°C",
                growth: "20-35°C",
                optimal: "27-30°C"
            },
            waterRequirement: "1500-2500 mm annually"
        },
        process: {
            seedSelection: "Select disease-free seed canes from 6-9 month old nursery. Choose varieties suitable for your region and harvest season. Consider factors such as sugar content, disease resistance, and ratoon performance (ability to regrow after harvest).",
            landPreparation: "Deep plow to 12-16 inches. Prepare raised beds in areas with high water table. Add organic matter to improve soil structure. For large-scale plantations, consider laser leveling for optimal irrigation and drainage management.",
            planting: "Plant 2-3 bud setts in furrows 4-6 inches deep with row spacing of 3-5 feet. Plant horizontally in dry areas and at 45° angle in humid areas. Plant density varies from 25,000-35,000 setts per hectare depending on variety and region.",
            irrigation: "Critical irrigation periods are establishment, tillering, and grand growth phases. Maintain adequate soil moisture throughout growth cycle. Implement efficient irrigation systems like drip or sprinkler where water is limited. Water requirements are highest during the grand growth phase.",
            fertilization: "Apply nitrogen in 2-3 splits with first application at 30-45 days after planting. Apply all phosphorus at planting and potassium in 1-2 splits. Typical rates are 150-250 kg N/ha, 60-100 kg P/ha, and 150-250 kg K/ha for plant cane, with reduced rates for ratoon crops.",
            pestControl: "Monitor for stem borers, white grubs, and termites. Use appropriate insecticides and cultural practices for control. Implement integrated pest management including biological controls where possible.",
            diseaseManagement: "Watch for red rot, smut, and ratoon stunting disease. Use disease-free planting material and resistant varieties. Hot water treatment of planting material at 50°C for 2-3 hours can control many diseases.",
            harvesting: "Harvest when sugar content is highest, typically 10-12 months after planting for plant cane. Cut stalks at ground level and remove tops and leaves. Time harvest to coincide with peak sugar accumulation, usually during the dry season when growth slows.",
            storage: "Process harvested cane within 24-48 hours to minimize sugar losses. Transport to processing facilities as quickly as possible.",
            cropRotation: "After several ratoon cycles (typically 2-5), rotate with legumes like soybeans or cover crops to improve soil fertility and break pest cycles."
        },
        varieties: [
            {
                name: "Commercial Hybrid Varieties",
                description: "Bred for high sugar content, disease resistance, and regional adaptation",
                adaptability: "Specific to different growing regions worldwide"
            },
            {
                name: "Early Maturing Varieties",
                description: "Reach maturity in 9-10 months, suitable for areas with limited growing season",
                adaptability: "Subtropical regions with distinct seasons"
            },
            {
                name: "Mid-late Maturing Varieties",
                description: "Mature in 11-16 months, higher yielding in suitable climates",
                adaptability: "Tropical regions with year-round growing conditions"
            },
            {
                name: "Jaggery Varieties",
                description: "Selected for qualities suitable for traditional sugar production (jaggery/gur)",
                adaptability: "Common in South Asia and parts of Africa"
            }
        ]
    },
    {
        name: "Sugar Beet",
        description: "A root vegetable with high sugar content, grown in temperate regions as an alternative to sugarcane.",
        image: "https://pixabay.com/get/g095e3d4f00dce3d3b4abbd9c48c34d5c1de58e05ee6ba44f1f9cda21bed54d6d5f35f9f27f93f0a74bba22ba6b2dfb5af33cb7e909a99d6a5b1bbcdebc7e6f8c_1280.jpg",
        category: "Sugar",
        climate: "Temperate",
        growingSeason: "5-6 months",
        yieldPotential: "40-80 tons/hectare of roots (8-14 tons sugar)",
        nutritionalValue: "High in sucrose, some fiber and minerals",
        requirements: {
            nitrogen: 0.6,
            phosphorus: 0.5,
            potassium: 0.7,
            phRange: [6.5, 8.0],
            ecRange: [0, 7],
            organicMatter: 2,
            soilTextures: ["loamy", "silty", "clayey"],
            temperature: {
                germination: "5-25°C",
                growth: "15-25°C",
                optimal: "18-22°C"
            },
            waterRequirement: "500-800 mm throughout growing season"
        },
        process: {
            seedSelection: "Select monogerm varieties with disease resistance suitable for your region. Consider bolting resistance for early plantings.",
            landPreparation: "Deep plow in fall or early spring. Prepare a fine, firm seedbed. Sugar beets require good soil structure for optimal root development.",
            planting: "Plant seeds 2-3 cm deep with final plant spacing of 20-25 cm in rows 45-60 cm apart. Precision planting is essential for optimal stand establishment.",
            irrigation: "Maintain consistent soil moisture, especially during establishment and root development. Irrigation is critical during dry periods.",
            fertilization: "Apply nitrogen carefully—excess N reduces sugar content. Typical rates are 100-150 kg N/ha, 50-80 kg P/ha, and 100-150 kg K/ha based on soil tests.",
            pestControl: "Monitor for leaf spot, aphids, and beet cyst nematodes. Use integrated pest management strategies.",
            diseaseManagement: "Watch for Cercospora leaf spot, Rhizoctonia, and various viral diseases. Use resistant varieties and fungicide applications when necessary.",
            harvesting: "Harvest when sugar content is highest, typically in fall before heavy frost. Modern harvesters lift, clean, and top beets in one operation.",
            storage: "Store harvested beets in clean piles with good ventilation. Process as soon as possible to minimize sugar losses.",
            cropRotation: "Use a minimum 3-4 year rotation away from sugar beets and other hosts of beet cyst nematode and soil-borne diseases."
        },
        varieties: [
            {
                name: "Monogerm Varieties",
                description: "Single-embryo seeds that produce one seedling, reducing the need for thinning",
                adaptability: "Standard in modern commercial production"
            },
            {
                name: "Early-Maturing Varieties",
                description: "Shorter growing season requirement, suitable for northern regions",
                adaptability: "Northern Europe, Canada, northern United States"
            },
            {
                name: "High-Sugar Varieties",
                description: "Bred specifically for higher sugar content, sometimes with lower yields",
                adaptability: "Areas with optimal growing conditions where quality pays premium"
            }
        ]
    },
    // VEGETABLES
    {
        name: "Tomatoes",
        description: "An edible berry of the plant Solanum lycopersicum, commonly grown for culinary purposes.",
        image: "https://pixabay.com/get/gbccf62cfb00a3c26df6c8d2a73c7e9c8a4bf0dc78ef9b50df50a1e1cdd09c52c28bf9d3d8a8bdc60dbd6580ffc5aef5c_1280.jpg",
        category: "Vegetable",
        climate: "Warm temperate to tropical",
        growingSeason: "3-5 months from transplant to final harvest",
        yieldPotential: "40-100 tons/hectare for field tomatoes, 150-300 tons/hectare for greenhouse",
        nutritionalValue: "Rich in vitamin C, potassium, folate, vitamin K, and lycopene (antioxidant)",
        requirements: {
            nitrogen: 0.5, // Normalized value (0-1)
            phosphorus: 0.6, // Normalized value (0-1)
            potassium: 0.7, // Normalized value (0-1)
            phRange: [6.0, 6.8],
            ecRange: [0, 2.5],
            organicMatter: 3,
            soilTextures: ["loamy", "sandy"],
            temperature: {
                germination: "18-30°C",
                growth: "20-30°C",
                optimal: "21-24°C day, 15-17°C night"
            },
            waterRequirement: "400-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties suited to your climate and growing purpose (fresh market or processing). Consider disease resistance and growth habit (determinate or indeterminate). Select based on intended use: slicing, paste, cherry, or specialty types. Disease resistance packages are particularly important for humid regions.",
            landPreparation: "Prepare a well-drained seedbed with good tilth. Incorporate compost or well-rotted manure. Apply lime if pH is below 6.0. Raised beds are beneficial in areas with heavy rainfall or poor drainage.",
            planting: "Start seeds indoors 6-8 weeks before last frost. Transplant when soil temperature reaches 60°F (16°C). Space plants 18-36 inches apart depending on variety. For indeterminate varieties in trellised systems, plant 40-50 cm apart in rows 1-1.5 m apart. For determinate (bush) varieties, plant 50-60 cm apart in rows 1-1.2 m apart.",
            irrigation: "Maintain consistent soil moisture. Water deeply but infrequently. Use drip irrigation to keep foliage dry and reduce disease. Critical irrigation periods are during flowering and fruit development. Water stress can cause blossom end rot and fruit cracking.",
            fertilization: "Apply balanced fertilizer at planting. Side-dress with nitrogen when first fruits are marble-sized. Avoid excessive N which promotes vegetative growth. Typical rates are 100-150 kg N/ha, 100-150 kg P/ha, and 150-200 kg K/ha split over the growing season. Consider calcium applications to prevent blossom end rot.",
            pestControl: "Monitor for tomato hornworms, whiteflies, and aphids. Use biological controls when possible and rotate insecticides to prevent resistance. Implement integrated pest management including beneficial insects and habitat management.",
            diseaseManagement: "Watch for early blight, late blight, and fusarium wilt. Use resistant varieties, proper spacing, and fungicides if necessary. Maintain good air circulation and avoid overhead irrigation to minimize foliar diseases. Follow a preventative fungicide program in humid regions.",
            harvesting: "Harvest when fruits are firm and fully colored. Pick in morning when temperatures are cool. For best flavor, vine-ripen rather than harvest green. Commercial operations may harvest at mature green or breaker stage for better shipping quality.",
            storage: "Fresh market tomatoes store best at 12-15°C and 90% humidity. Do not refrigerate if flavor is a priority. Processing tomatoes can be held briefly at cooler temperatures before processing.",
            cropRotation: "Rotate with unrelated crops, avoiding solanaceous plants (peppers, potatoes, eggplant) for 3-4 years to minimize soilborne diseases."
        },
        varieties: [
            {
                name: "Globe/Slicing Tomatoes",
                description: "Large, round fruits for fresh consumption",
                adaptability: "Widely grown in home gardens and commercial production"
            },
            {
                name: "Roma/Paste Tomatoes",
                description: "Oblong, dense fruits with less water content, ideal for sauces and canning",
                adaptability: "Primary type for processing industry"
            },
            {
                name: "Cherry/Grape Tomatoes",
                description: "Small, sweet fruits often eaten fresh",
                adaptability: "Excellent for container growing and high-value markets"
            },
            {
                name: "Heirloom Tomatoes",
                description: "Open-pollinated varieties with unique colors, shapes, and flavors",
                adaptability: "Often less disease resistant but prized for flavor"
            },
            {
                name: "Greenhouse Tomatoes",
                description: "Varieties bred specifically for protected culture systems",
                adaptability: "Year-round production in controlled environments"
            }
        ]
    },
    {
        name: "Onions",
        description: "A bulb vegetable with distinctive pungent flavor used in cuisines worldwide.",
        image: "https://pixabay.com/get/gf2ecc10cac16ece8ff95d5b0f63de877ad29c2d74456f0c8e41546b4a8a52b2e7732ec99d12e3ff574bedb80b2ec4eb2_1280.jpg",
        category: "Vegetable",
        climate: "Temperate to subtropical",
        growingSeason: "3-6 months depending on variety and region",
        yieldPotential: "25-60 tons/hectare",
        nutritionalValue: "Rich in vitamin C, folate, potassium, and antioxidant compounds",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.5,
            potassium: 0.6,
            phRange: [6.0, 7.0],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "10-30°C",
                growth: "13-24°C",
                optimal: "15-20°C"
            },
            waterRequirement: "450-650 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on day length requirements (short, intermediate, or long-day), color, and storage potential.",
            landPreparation: "Prepare a fine, firm seedbed free of clods and debris. Onions perform best in well-drained soils with good organic matter content.",
            planting: "Plant seeds directly or use transplants or sets. Spacing varies by production system, but typically 10-15 cm between plants in rows 30-45 cm apart.",
            irrigation: "Maintain consistent soil moisture, especially during bulb formation. Reduce irrigation as bulbs mature to improve storage quality.",
            fertilization: "Apply moderate nitrogen with higher proportions of phosphorus and potassium. Excessive nitrogen delays maturity and reduces storage life.",
            pestControl: "Monitor for thrips, onion maggots, and various caterpillars. Use appropriate insecticides and cultural practices.",
            diseaseManagement: "Watch for downy mildew, purple blotch, and various bacterial diseases. Use crop rotation, resistant varieties, and fungicides as needed.",
            harvesting: "Harvest when tops begin to fall over naturally. Allow bulbs to cure in the field or in a well-ventilated area for 1-2 weeks.",
            storage: "Store fully cured onions in cool, dry conditions with good air circulation. Long-term storage requires 0-2°C with 65-70% humidity.",
            cropRotation: "Use a minimum 3-year rotation away from onions and related crops (garlic, leeks) to minimize soilborne diseases."
        },
        varieties: [
            {
                name: "Yellow Onions",
                description: "All-purpose onions with balanced flavor, good storage ability",
                adaptability: "Most widely grown type worldwide"
            },
            {
                name: "Red Onions",
                description: "Milder flavor, often used raw in salads and sandwiches",
                adaptability: "Grow best in regions with moderate temperatures"
            },
            {
                name: "White Onions",
                description: "Clean, sharp flavor preferred in Mexican and Southwest American cuisine",
                adaptability: "Short to intermediate day varieties predominate"
            },
            {
                name: "Sweet Onions",
                description: "Low sulfur content, mild flavor, limited storage life",
                adaptability: "Specific production regions like Vidalia, Georgia and Walla Walla, Washington"
            }
        ]
    },
    {
        name: "Carrots",
        description: "A root vegetable, typically orange in color, though purple, black, red, white, and yellow varieties exist.",
        image: "https://pixabay.com/get/ge1a9db11c7bcee5e7ad45c09af3a0c40f2c06a1ec20b84c51ddd7af60d57d07c9d50e3a65dca9cad2f879dd5c56d0f0cda3c6ab0fcf07eb15e34ca91d45e0ef5_1280.jpg",
        category: "Vegetable",
        climate: "Cool temperate to subtropical",
        growingSeason: "70-120 days depending on variety and conditions",
        yieldPotential: "30-60 tons/hectare",
        nutritionalValue: "Excellent source of beta-carotene (vitamin A), fiber, vitamin K, potassium",
        requirements: {
            nitrogen: 0.4,
            phosphorus: 0.5,
            potassium: 0.6,
            phRange: [6.0, 6.8],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "7-30°C",
                growth: "15-20°C",
                optimal: "16-18°C"
            },
            waterRequirement: "400-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties appropriate for your soil type and season. Consider root shape, length, and intended use.",
            landPreparation: "Prepare a deep, fine seedbed free of stones and clods that could cause root forking. Double digging or deep tillage helps produce straight roots.",
            planting: "Sow seeds directly 0.5-1 cm deep in rows 30-45 cm apart. Thin seedlings to 5-7 cm spacing for fresh market carrots, closer for baby carrots.",
            irrigation: "Maintain consistent soil moisture, especially during germination and root development. Avoid water stress which can cause bitter flavor and cracking.",
            fertilization: "Apply moderate fertilizer rates. Excess nitrogen causes excessive top growth and hairy roots. High rates of fresh manure can cause forking.",
            pestControl: "Monitor for carrot rust flies, aphids, and nematodes. Use row covers for early protection and appropriate crop rotation.",
            diseaseManagement: "Watch for Alternaria leaf blight, Cercospora leaf spot, and various root rots. Use disease-free seed and proper rotation.",
            harvesting: "Harvest when roots reach desired size, typically when shoulders are 2-3 cm in diameter. Loosen soil before pulling to prevent breakage.",
            storage: "Remove tops and store at 0-2°C with high humidity (95-98%) for longest shelf life.",
            cropRotation: "Rotate with unrelated crops, avoiding other umbellifers (parsley, celery, parsnips) for 3 years."
        },
        varieties: [
            {
                name: "Nantes",
                description: "Cylindrical, sweet roots with rounded tips, excellent fresh eating quality",
                adaptability: "Perform well in many home gardens and market farms"
            },
            {
                name: "Imperator",
                description: "Long, tapered roots commonly sold in supermarkets",
                adaptability: "Requires deep, loose soil for optimal development"
            },
            {
                name: "Chantenay",
                description: "Shorter, broader shoulders, good for heavier soils",
                adaptability: "More tolerant of less-than-ideal soil conditions"
            },
            {
                name: "Danvers",
                description: "Conical shape, strong tops, good storage quality",
                adaptability: "Widely adaptable, good for storage"
            },
            {
                name: "Baby/Mini Carrots",
                description: "Either special small varieties or regular carrots cut and shaped",
                adaptability: "Specialty market options with premium pricing"
            }
        ]
    },
    // OILSEEDS
    {
        name: "Sunflower",
        description: "An annual plant grown for its edible oil-rich seeds and ornamental flowers.",
        image: "https://pixabay.com/get/gfc0dcd6bf9a6fdfa2ef8bf5a05cafd14d77ffa80d18c13fccf9a14f5fe8e7f9e52f3c0f7b4f6a3b3339ddb5dab6b1c75b48d17db3c5cd4ebfbe1b30d39f489cb_1280.jpg",
        category: "Oilseed",
        climate: "Temperate to subtropical",
        growingSeason: "90-130 days depending on variety and conditions",
        yieldPotential: "1.5-3.5 tons/hectare",
        nutritionalValue: "Seeds high in oil (40-50%), protein (20-25%), fiber, vitamin E, and minerals",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.5,
            potassium: 0.6,
            phRange: [6.0, 7.5],
            ecRange: [0, 4.8],
            organicMatter: 2,
            soilTextures: ["loamy", "sandy loam"],
            temperature: {
                germination: "8-30°C",
                growth: "15-30°C",
                optimal: "20-25°C"
            },
            waterRequirement: "500-750 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on purpose (oilseed or confectionery) and maturity class appropriate for your region.",
            landPreparation: "Prepare a medium-fine seedbed with good tilth. Sunflowers have deep taproots and benefit from deep tillage in compacted soils.",
            planting: "Plant seeds 3-5 cm deep with row spacing of 50-75 cm and in-row spacing of 20-30 cm. Plant when soil temperature reaches 8-10°C consistently.",
            irrigation: "Critical irrigation periods are during establishment, flowering, and seed fill. Sunflowers are drought-tolerant but respond well to adequate moisture.",
            fertilization: "Apply moderate fertilizer rates based on soil tests and yield goals. Typical rates are 60-100 kg N/ha, 40-60 kg P/ha, and 40-80 kg K/ha.",
            pestControl: "Monitor for sunflower moth, stem weevil, and various caterpillars. Bird damage can be significant as seeds mature.",
            diseaseManagement: "Watch for Sclerotinia white mold, rust, and downy mildew. Use resistant varieties and proper rotation.",
            harvesting: "Harvest when backs of heads turn yellow to brown and seed moisture is 15-20% for combining. Adjust combine carefully to prevent seed loss.",
            storage: "Dry seeds to 8-10% moisture for safe storage. Monitor for heating and insect activity.",
            cropRotation: "Rotate with cereal grains or other unrelated crops. Avoid other susceptible hosts of white mold (canola, pulse crops) in the rotation."
        },
        varieties: [
            {
                name: "Oilseed Sunflower",
                description: "Smaller seeds with higher oil content (40-50%), used for vegetable oil production",
                adaptability: "Main commercial type grown in major producing regions"
            },
            {
                name: "Confectionery Sunflower",
                description: "Larger seeds with lower oil content, striped hulls, used for direct consumption",
                adaptability: "Grown in specific regions for snack food markets"
            },
            {
                name: "High-Oleic Sunflower",
                description: "Oil composition modified for higher oleic acid content, more stable for frying",
                adaptability: "Premium market segments, similar cultivation to standard oilseed types"
            },
            {
                name: "Ornamental Sunflower",
                description: "Bred for aesthetic qualities rather than seed production",
                adaptability: "Specialty cut flower and garden markets"
            }
        ]
    },
    {
        name: "Rapeseed/Canola",
        description: "A bright yellow flowering member of the Brassicaceae family grown for its oil-rich seeds.",
        image: "https://pixabay.com/get/g1d2d647cd2af1723eb11dee5db3c2c9d17dcd4da1b4066f76b7ac3fe5e5fb92a9a92c6de5ccc37feaaf2b10c31a2ba4a1d1089d51e7de34c647dbcc32b90bcad_1280.jpg",
        category: "Oilseed",
        climate: "Cool temperate to subtropical",
        growingSeason: "Winter canola: planted in fall, harvested early summer; Spring canola: planted spring, harvested late summer",
        yieldPotential: "2-4 tons/hectare",
        nutritionalValue: "Seeds high in oil (40-45%), protein (20%), low in saturated fats, high in omega-3 fatty acids",
        requirements: {
            nitrogen: 0.6,
            phosphorus: 0.5,
            potassium: 0.4,
            phRange: [5.5, 7.0],
            ecRange: [0, 5],
            organicMatter: 2,
            soilTextures: ["loamy", "silty", "clayey"],
            temperature: {
                germination: "5-25°C",
                growth: "12-30°C",
                optimal: "15-20°C"
            },
            waterRequirement: "450-750 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties appropriate for your region and planting season (winter or spring types). Consider disease resistance packages.",
            landPreparation: "Prepare a fine, firm seedbed. Canola seeds are very small and require good seed-to-soil contact for germination.",
            planting: "Plant seeds 1-2 cm deep with row spacing of 15-30 cm. Seeding rate is typically 5-8 kg/ha. Precision planting improves stand establishment.",
            irrigation: "Critical irrigation periods are during flowering and pod development. Adequate moisture during these stages is essential for optimal yield.",
            fertilization: "Apply nitrogen according to yield goals, typically 100-150 kg N/ha for high-yielding crops. Apply all phosphorus and potassium at planting.",
            pestControl: "Monitor for flea beetles, aphids, and various caterpillars. Use appropriate insecticides and consider seed treatments for early protection.",
            diseaseManagement: "Watch for Sclerotinia stem rot, blackleg, and clubroot. Use resistant varieties, proper rotation, and fungicides as needed.",
            harvesting: "Direct combine when seed moisture is 8-10% and most pods are brown. Consider swathing in regions with variable maturity or risk of shattering.",
            storage: "Store at 8% moisture or less in clean, dry conditions. Monitor for heating and insect activity.",
            cropRotation: "Use a minimum 3-year rotation away from canola and other brassica crops to minimize disease pressure."
        },
        varieties: [
            {
                name: "Winter Canola",
                description: "Planted in fall, overwinters as a rosette, flowers in spring, higher yield potential",
                adaptability: "Regions with mild winters without extreme cold"
            },
            {
                name: "Spring Canola",
                description: "Planted in spring, shorter growing season, more widely adaptable",
                adaptability: "Northern growing regions with shorter seasons"
            },
            {
                name: "High Erucic Acid Rapeseed (HEAR)",
                description: "Industrial use varieties with high erucic acid content, not for food use",
                adaptability: "Specific contract production for industrial markets"
            },
            {
                name: "Specialty Oil Profile Canola",
                description: "Modified oil compositions for specific food or industrial applications",
                adaptability: "Premium market segments, similar cultivation to standard types"
            }
        ]
    },
    // FRUITS
    {
        name: "Strawberries",
        description: "A widely grown hybrid species of the genus Fragaria, cultivated worldwide for its sweet, bright red fruit.",
        image: "https://pixabay.com/get/g4a09582e1c0ad3e28a6be67066b4a649e8db3aefce1d62a5f3e4da9f4ab9f6d6073dc7aac5c0aef1c6acb9c05a4a2cf1cf8ae1dff82df8a22d3b8dee2e5b3d3e_1280.jpg",
        category: "Fruit",
        climate: "Temperate to subtropical",
        growingSeason: "Perennial with seasonal harvest, typically spring to early summer",
        yieldPotential: "15-40 tons/hectare",
        nutritionalValue: "Rich in vitamin C, manganese, folate, potassium, antioxidants, and fiber",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.6,
            potassium: 0.7,
            phRange: [5.5, 6.5],
            ecRange: [0, 2],
            organicMatter: 3,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "Not typically grown from seed commercially",
                growth: "15-26°C",
                optimal: "15-24°C day, 10-15°C night"
            },
            waterRequirement: "500-900 mm throughout growing season"
        },
        process: {
            seedSelection: "Use certified disease-free transplants or runner plants. Select varieties based on climate adaptation, day-length requirements, and intended market.",
            landPreparation: "Prepare well-drained soil with good organic matter content. Form raised beds to improve drainage and ease harvesting.",
            planting: "Plant crowns with roots spread out and growing point at soil level. Space plants 30-45 cm apart in rows 90-120 cm apart.",
            irrigation: "Maintain consistent soil moisture without waterlogging. Drip irrigation is preferred to keep foliage and fruit dry.",
            fertilization: "Apply moderate nitrogen with higher proportions of phosphorus and potassium. Split nitrogen applications throughout the growing season.",
            pestControl: "Monitor for spider mites, aphids, and various fruit-feeding insects. Use integrated pest management strategies.",
            diseaseManagement: "Watch for Botrytis fruit rot, powdery mildew, and leaf spot diseases. Maintain good air circulation and avoid overhead irrigation.",
            harvesting: "Harvest when fruits are fully colored but still firm. Pick in morning when temperatures are cool for best shelf life.",
            storage: "Cool immediately to 0-2°C for maximum shelf life. Strawberries are highly perishable.",
            cropRotation: "In annual systems, rotate with unrelated crops. Avoid solanaceous plants and previous strawberry plantings."
        },
        varieties: [
            {
                name: "June-bearing Strawberries",
                description: "Produce one large crop per year, typically in late spring/early summer",
                adaptability: "Traditional commercial production, good for processing and fresh market"
            },
            {
                name: "Everbearing Strawberries",
                description: "Produce two main crops, one in spring and one in fall",
                adaptability: "Home gardens and regions with moderate summers"
            },
            {
                name: "Day-neutral Strawberries",
                description: "Produce continuously throughout the growing season if temperatures permit",
                adaptability: "Extended season production in favorable climates or protected culture"
            }
        ]
    },
    {
        name: "Watermelon",
        description: "A flowering plant species of the Cucurbitaceae family and the name of its edible fruit.",
        image: "https://pixabay.com/get/gca3839f84e2b6ff69d39ae4c6e8c4e4f4c654f4d4a27b31f9eea1c76bb40c10dc1ca06b21b835dbd94a4a26b46cba37bb87ab20a0a7dace5063a6ec8b5bbcc3b_1280.jpg",
        category: "Fruit",
        climate: "Tropical to subtropical",
        growingSeason: "80-110 days from transplanting to harvest",
        yieldPotential: "30-80 tons/hectare",
        nutritionalValue: "High water content (92%), vitamin C, vitamin A, lycopene, and other antioxidants",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.6,
            potassium: 0.7,
            phRange: [6.0, 7.0],
            ecRange: [0, 2.5],
            organicMatter: 2,
            soilTextures: ["sandy loam", "loamy"],
            temperature: {
                germination: "20-35°C",
                growth: "22-35°C",
                optimal: "25-30°C"
            },
            waterRequirement: "400-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties appropriate for your region, market preference, and disease resistance needs.",
            landPreparation: "Prepare well-drained soil with moderate fertility. Form hills or raised beds for planting.",
            planting: "Start seeds in pots 3-4 weeks before transplanting or direct seed after soil warms to 20°C. Space hills 1.5-2.5 m apart in rows 1.8-3 m apart.",
            irrigation: "Maintain consistent soil moisture, especially during vine growth and fruit development. Reduce irrigation as fruits ripen.",
            fertilization: "Apply moderate nitrogen early in the season, with higher proportions of phosphorus and potassium as plants grow.",
            pestControl: "Monitor for cucumber beetles, aphids, and spider mites. Use integrated pest management strategies.",
            diseaseManagement: "Watch for powdery mildew, anthracnose, and fusarium wilt. Use resistant varieties and proper rotation.",
            harvesting: "Harvest when thumping produces a dull sound, tendril nearest fruit is brown and dry, and bottom spot turns from white to yellow.",
            storage: "Store at 10-15°C with 85-90% humidity for up to 2-3 weeks depending on variety.",
            cropRotation: "Rotate with unrelated crops, avoiding other cucurbits (cucumber, squash, pumpkin) for 3-4 years."
        },
        varieties: [
            {
                name: "Seeded Watermelons",
                description: "Traditional varieties with seeds, often larger fruits with deep flavor",
                adaptability: "Wide adaptation, more tolerant of variable growing conditions"
            },
            {
                name: "Seedless Watermelons",
                description: "Triploid hybrids that produce fruits without mature seeds",
                adaptability: "Require more precise growing conditions and pollinizer varieties"
            },
            {
                name: "Mini/Personal Watermelons",
                description: "Smaller fruits (1-3 kg) for smaller households or single servings",
                adaptability: "Growing in popularity for specialty markets, similar requirements to standard types"
            },
            {
                name: "Yellow/Orange Flesh Watermelons",
                description: "Specialty varieties with non-red flesh colors",
                adaptability: "Niche market varieties with premium pricing potential"
            }
        ]
    },
    // MISCELLANEOUS
    {
        name: "Quinoa",
        description: "A pseudocereal crop grown primarily for its edible seeds with exceptional nutritional profile.",
        image: "https://pixabay.com/get/g1ccf8e51eee61df21fe52a5be34ff75fae14ba41ac84f8c1b3db1a29f9f4c8c3c9dc05eaab79b9c19edb5b989ee4de59dd44b79f01abcce4cbea0e56c3a61ce1_1280.jpg",
        category: "Pseudocereal",
        climate: "Highland tropical to temperate",
        growingSeason: "90-150 days depending on variety and climate",
        yieldPotential: "1-4 tons/hectare",
        nutritionalValue: "Complete protein (all essential amino acids), high in fiber, magnesium, B vitamins, iron, potassium, calcium, phosphorus, vitamin E",
        requirements: {
            nitrogen: 0.4,
            phosphorus: 0.5,
            potassium: 0.5,
            phRange: [6.0, 8.5],
            ecRange: [0, 8], // Tolerant of some salinity
            organicMatter: 2,
            soilTextures: ["sandy loam", "loamy", "clayey"],
            temperature: {
                germination: "5-30°C",
                growth: "10-25°C",
                optimal: "15-20°C"
            },
            waterRequirement: "300-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties appropriate for your region, considering maturity length, saponin content, and end use.",
            landPreparation: "Prepare a fine, firm seedbed. Quinoa seeds are very small and require good seed-to-soil contact.",
            planting: "Plant seeds 1-2 cm deep with row spacing of 40-60 cm. Seeding rate is typically 8-15 kg/ha depending on seed size and germination.",
            irrigation: "Quinoa is drought-tolerant but yields better with adequate moisture, especially during germination and seed development.",
            fertilization: "Apply moderate fertilizer based on soil fertility. Typical rates are 60-100 kg N/ha, 40-60 kg P/ha, and 20-40 kg K/ha.",
            pestControl: "Monitor for aphids, flea beetles, and various caterpillars. Quinoa is generally less affected by pests than many crops.",
            diseaseManagement: "Watch for downy mildew and leaf spot diseases. Use crop rotation and clean seed to manage diseases.",
            harvesting: "Harvest when seeds are hard and resist denting with a fingernail. Plants should be dry with leaves dropped.",
            storage: "Clean and dry seeds to 12% moisture for safe storage. Saponin removal may be required before consumption.",
            cropRotation: "Rotate with cereals, legumes, or other unrelated crops. Quinoa makes an excellent rotation crop in many systems."
        },
        varieties: [
            {
                name: "Valley Type Quinoa",
                description: "Taller plants adapted to highland valleys, longer growing season",
                adaptability: "Traditional growing regions in Andean valleys"
            },
            {
                name: "Altiplano Type Quinoa",
                description: "More compact plants adapted to high elevation plateaus, more cold and drought tolerant",
                adaptability: "High elevation regions with short seasons"
            },
            {
                name: "Sea Level Type Quinoa",
                description: "Adapted to lower elevations and more humid conditions",
                adaptability: "Coastal Chile and newer production areas globally"
            },
            {
                name: "Colored Quinoa",
                description: "Various seed colors including white, red, black, and rainbow mixtures",
                adaptability: "Specialty markets with various adaptations depending on variety"
            }
        ]
    },
    {
        name: "Hemp",
        description: "A versatile crop grown for fiber, seed, oil, or CBD production, with low THC content (<0.3%).",
        image: "https://pixabay.com/get/gc40f14c36a18c5b7c3b02ce97cdf9c10fd9a35c85cf43b69551eb4ab3f10f4aa2afc95ca35dde3abc83c6f5f1eb68764e686fdfe5e057ddf3b5055d15e9aef7c_1280.jpg",
        category: "Fiber/Oilseed",
        climate: "Temperate to subtropical",
        growingSeason: "100-120 days for grain, 60-90 days for fiber",
        yieldPotential: "Fiber: 5-10 tons/hectare dry stalk; Grain: 1-2 tons/hectare",
        nutritionalValue: "Seeds high in protein (25%), omega fatty acids, fiber, vitamins, and minerals",
        requirements: {
            nitrogen: 0.6,
            phosphorus: 0.5,
            potassium: 0.5,
            phRange: [6.0, 7.5],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "silty", "clayey"],
            temperature: {
                germination: "8-27°C",
                growth: "15-27°C",
                optimal: "20-25°C"
            },
            waterRequirement: "400-600 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on intended use (fiber, grain, CBD), regulatory compliance for THC content, and regional adaptation.",
            landPreparation: "Prepare a fine, firm seedbed free of persistent weeds. Hemp does not compete well with weeds in early growth stages.",
            planting: "Plant seeds 1-3 cm deep with row spacing of 10-20 cm for fiber or 30-60 cm for grain. Seeding rates vary widely by purpose.",
            irrigation: "Hemp is relatively drought-tolerant once established but yields better with adequate moisture during establishment and flowering.",
            fertilization: "Apply moderate nitrogen with balanced phosphorus and potassium. Grain hemp typically requires 80-120 kg N/ha.",
            pestControl: "Hemp has few significant insect pests in most regions. Monitor for European corn borer in some areas.",
            diseaseManagement: "Watch for botrytis gray mold, sclerotinia white mold, and various leaf spots. Use crop rotation to manage diseases.",
            harvesting: "For fiber: harvest when male plants shed pollen. For grain: harvest when seeds are mature but before shattering.",
            storage: "Dry grain to 8-10% moisture for safe storage. Proper retting of fiber hemp is critical for quality.",
            cropRotation: "Hemp fits well into rotations with most other crops. Consider residue management as hemp stalks are high in cellulose."
        },
        varieties: [
            {
                name: "Fiber Hemp",
                description: "Tall, slender plants with long fibers and minimal branching",
                adaptability: "Traditional growing regions in Europe, China, and North America"
            },
            {
                name: "Grain Hemp",
                description: "Shorter plants with more branching and higher seed production",
                adaptability: "Regions with longer growing seasons and adequate rainfall"
            },
            {
                name: "Dual-purpose Hemp",
                description: "Bred for both fiber and seed production",
                adaptability: "Compromise between optimal fiber and grain characteristics"
            },
            {
                name: "CBD Hemp",
                description: "Selected for high cannabidiol content with THC below legal limits",
                adaptability: "Recent development, similar to medical cannabis cultivation systems"
            }
        ]
    }
];

// Make the data available globally
window.CROP_DATA = CROP_DATA;
