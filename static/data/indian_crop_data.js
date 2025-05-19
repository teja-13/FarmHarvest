/**
 * Crops and varieties commonly grown in the Indian subcontinent
 * Contains detailed information about growing conditions specific to this region
 */

const INDIAN_CROP_DATA = [
    {
        name: "Rice (Paddy)",
        description: "The most important food crop in India, accounting for over 40% of total food grain production.",
        image: "https://pixabay.com/get/g564c9ce37e679a2bfedb365dfac837af20df0cf3cb001d31d519b72f4c238a573b1e7d1b0f0df97bb3e313f8cf61a21138566e67138820fe461b8cea5bb91a44_1280.jpg",
        category: "Cereal",
        climate: "Tropical to subtropical",
        growingSeason: "Kharif (monsoon) and Rabi (winter) seasons",
        indianRegions: "Primarily West Bengal, Uttar Pradesh, Punjab, Bihar, Tamil Nadu, Andhra Pradesh",
        yieldPotential: "3-6 tons/hectare",
        nutritionalValue: "High in carbohydrates, moderate protein (7-8%), vitamin B, and minerals",
        requirements: {
            nitrogen: 0.8,
            phosphorus: 0.4,
            potassium: 0.5,
            phRange: [5.0, 6.5],
            ecRange: [0, 3],
            organicMatter: 2.5,
            soilTextures: ["clayey", "silty"],
            temperature: {
                germination: "20-35°C",
                growth: "20-35°C",
                optimal: "25-30°C"
            },
            waterRequirement: "1000-1500 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties suited to the local climate and season (kharif or rabi). Popular varieties include Basmati, IR-36, Jaya, and Swarna. Use certified seed from authorized sources.",
            landPreparation: "For lowland rice, plow and puddle the soil to create a fine, level seedbed with a hardpan beneath. Apply well-decomposed farmyard manure (FYM) at 10-15 tons/hectare 3-4 weeks before transplanting.",
            planting: "For transplanted rice, raise seedlings for 20-30 days in nursery beds. Transplant 2-3 seedlings per hill at a spacing of 20 × 15 cm. Direct seeding is common in rainfed upland regions.",
            irrigation: "Maintain 5 cm standing water from transplanting until 10 days before harvest in lowland rice. For upland rice, provide irrigation at critical growth stages during dry periods.",
            fertilization: "Apply NPK at 120:60:60 kg/ha. Apply 50% N, full P and K as basal dose; remaining N in two equal splits at tillering and panicle initiation stages.",
            pestControl: "Monitor for yellow stem borer, brown plant hopper, and gall midge. Apply approved pesticides when threshold levels are reached.",
            diseaseManagement: "Watch for blast, bacterial leaf blight, and sheath blight. Use disease-resistant varieties and fungicides as needed. Follow crop rotation to reduce disease pressure.",
            harvesting: "Harvest when 80-85% of grains turn straw-colored. Thresh immediately and dry to reduce moisture to 14% for safe storage.",
            storage: "Store in gunny bags or metal bins in a cool, dry place. Protect from rodents and insects using proper storage structures.",
            cropRotation: "Rice-wheat in North India, rice-pulses in eastern regions, and rice-rice in southern regions."
        },
        varieties: [
            {
                name: "Basmati",
                description: "Long-grain aromatic rice with premium quality and excellent cooking properties",
                adaptability: "Punjab, Haryana, Western Uttar Pradesh",
                duration: "130-150 days"
            },
            {
                name: "IR-36",
                description: "Semi-dwarf, high-yielding variety resistant to multiple pests and diseases",
                adaptability: "Widely grown across India",
                duration: "110-120 days"
            },
            {
                name: "Swarna (MTU 7029)",
                description: "High-yielding variety with good grain quality and disease resistance",
                adaptability: "Eastern and Central India",
                duration: "135-145 days"
            },
            {
                name: "Jaya",
                description: "High-yielding variety with broad adaptability",
                adaptability: "Most rice-growing regions of India",
                duration: "130-135 days"
            },
            {
                name: "Pusa Basmati 1121",
                description: "Improved basmati variety with high yield and excellent grain quality",
                adaptability: "Punjab, Haryana, Western Uttar Pradesh",
                duration: "140-145 days"
            }
        ],
        commonDiseases: [
            {
                name: "Rice Blast",
                scientificName: "Magnaporthe oryzae",
                symptoms: "Diamond-shaped lesions on leaves, infected nodes turn black and break easily",
                management: "Use resistant varieties, balanced fertilization (avoid excessive nitrogen), foliar spray of fungicides like Tricyclazole (0.06%) or Carbendazim (0.1%)"
            },
            {
                name: "Bacterial Leaf Blight",
                scientificName: "Xanthomonas oryzae pv. oryzae",
                symptoms: "Water-soaked lesions at leaf margins that turn yellow and eventually gray",
                management: "Plant resistant varieties, use disease-free seedlings, avoid excessive nitrogen, spray copper-based bactericides"
            },
            {
                name: "Sheath Blight",
                scientificName: "Rhizoctonia solani",
                symptoms: "Initial water-soaked, green-gray lesions on leaf sheaths that later enlarge and become oval with gray centers and brown margins",
                management: "Maintain optimal plant spacing, balanced fertilization, spray Hexaconazole (0.2%) or Propiconazole (0.1%) at early infection stage"
            }
        ]
    },
    {
        name: "Wheat",
        description: "The second most important cereal crop in India, primarily grown in the northern plains.",
        image: "https://pixabay.com/get/gcd54fdc85eaf0e45df89cf5aec90010a61e011471b00306cc26025aae50f160700036184e1c4733d03de4163b02b1757564e30c582b09cd9862c6728958a112f_1280.jpg",
        category: "Cereal",
        climate: "Cool temperate",
        growingSeason: "Rabi (winter) season, November to April",
        indianRegions: "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Rajasthan, Bihar",
        yieldPotential: "3.5-5.5 tons/hectare",
        nutritionalValue: "Rich in carbohydrates, moderate protein (11-14%), B vitamins, and minerals",
        requirements: {
            nitrogen: 0.6,
            phosphorus: 0.5,
            potassium: 0.4,
            phRange: [6.0, 7.5],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey", "silty"],
            temperature: {
                germination: "20-25°C",
                growth: "15-24°C",
                optimal: "18-22°C"
            },
            waterRequirement: "450-650 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on region and planting time. Popular varieties include HD-2967, PBW-550, WH-1105, and DBW-17. Use certified seeds treated with fungicides.",
            landPreparation: "Prepare a fine tilth by 2-3 plowings followed by planking. Apply well-decomposed FYM at 10-15 tons/hectare 3-4 weeks before sowing.",
            planting: "Sow seeds in rows 20-22 cm apart at a depth of 5-6 cm. Optimal seeding rate is 100-125 kg/ha. Best sowing time is mid-November to early December.",
            irrigation: "Apply first irrigation 20-25 days after sowing, followed by irrigation at crown root initiation, tillering, jointing, flowering, and grain filling stages.",
            fertilization: "Apply NPK at 120:60:40 kg/ha. Apply 50% N and full P and K as basal; remaining N in two equal splits at first and second irrigation.",
            pestControl: "Monitor for aphids, termites, and pink stem borer. Apply approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for rust (yellow, brown, black), powdery mildew, and loose smut. Use disease-resistant varieties and seed treatment with fungicides.",
            harvesting: "Harvest when grain moisture content is 12-14% and stems turn yellow. Use combine harvester or manual harvesting followed by threshing.",
            storage: "Store in gunny bags or metal bins at moisture content below 12% in a cool, dry place.",
            cropRotation: "Wheat-rice in North India, wheat-pulses or wheat-cotton in Central and Western India."
        },
        varieties: [
            {
                name: "HD-2967",
                description: "High-yielding variety with resistance to yellow and brown rust",
                adaptability: "North-Western Plains Zone (Punjab, Haryana, Western UP)",
                duration: "140-145 days"
            },
            {
                name: "PBW-550",
                description: "Semi-dwarf variety with high yield potential and good bread-making quality",
                adaptability: "North-Western Plains Zone",
                duration: "140-150 days"
            },
            {
                name: "WH-1105",
                description: "High-yielding variety with resistance to yellow rust and powdery mildew",
                adaptability: "Northern Plains",
                duration: "135-140 days"
            },
            {
                name: "DBW-17",
                description: "Early maturing variety with high yield potential and good grain quality",
                adaptability: "North-Eastern Plains Zone (Eastern UP, Bihar)",
                duration: "125-130 days"
            },
            {
                name: "HI-1544",
                description: "Heat tolerant variety suitable for late planting",
                adaptability: "Central Zone (MP, Maharashtra)",
                duration: "110-120 days"
            }
        ],
        commonDiseases: [
            {
                name: "Yellow Rust",
                scientificName: "Puccinia striiformis",
                symptoms: "Yellow-orange, stripe-like pustules arranged in lines on leaves",
                management: "Grow resistant varieties, early sowing, spray Propiconazole (0.1%) at initial appearance of disease"
            },
            {
                name: "Powdery Mildew",
                scientificName: "Blumeria graminis",
                symptoms: "White, powdery patches on leaves, sheaths, and stems",
                management: "Grow resistant varieties, avoid excessive nitrogen, spray Propiconazole (0.1%) or Hexaconazole (0.1%)"
            },
            {
                name: "Loose Smut",
                scientificName: "Ustilago tritici",
                symptoms: "Entire wheat head is converted to a mass of black spores",
                management: "Use certified disease-free seeds, treat seeds with Carboxin + Thiram (2g/kg seed) or Carbendazim (2g/kg seed)"
            }
        ]
    },
    {
        name: "Cotton",
        description: "The most important commercial fiber crop in India, providing livelihood to millions of farmers.",
        image: "https://pixabay.com/get/g15376b072d7e6c8bda571d3ac2a2ee248a05dc2daa38e987bd2473d7fb0fcf6982f5d634c4eefb6377f07e4bab8aa9b6ba611b5e3afbc10db7c0b1b51f35ac03_1280.jpg",
        category: "Fiber",
        climate: "Tropical and subtropical",
        growingSeason: "Kharif (monsoon) season, May-November",
        indianRegions: "Gujarat, Maharashtra, Telangana, Andhra Pradesh, Punjab, Haryana, Rajasthan",
        yieldPotential: "15-25 quintals/hectare (seed cotton)",
        nutritionalValue: "Seeds are rich in oil (18-24%) and protein (20-25%), used for cattle feed and oil extraction",
        requirements: {
            nitrogen: 0.6,
            phosphorus: 0.5,
            potassium: 0.6,
            phRange: [6.0, 8.0],
            ecRange: [0, 7],
            organicMatter: 1.5,
            soilTextures: ["loamy", "clayey", "black cotton soil"],
            temperature: {
                germination: "18-30°C",
                growth: "20-30°C",
                optimal: "25-30°C"
            },
            waterRequirement: "700-1200 mm throughout growing season"
        },
        process: {
            seedSelection: "Choose varieties or hybrids based on region and season length. Popular varieties include Bunny BG-II, RCH-2, Mallika, Suraj, and Brahma. Use certified Bt cotton seeds from authorized sources.",
            landPreparation: "Deep plow after monsoon and follow up with 2-3 harrowing before sowing. Apply well-decomposed FYM at 10-15 tons/hectare 3-4 weeks before sowing.",
            planting: "Sow seeds at a spacing of 90 × 60 cm for hybrids and 60 × 30 cm for varieties. Seed rate is 1.5-2.5 kg/ha depending on variety. Optimal sowing time is onset of monsoon (June-July).",
            irrigation: "First irrigation after sowing if soil is dry, then at vegetative stage (30-35 DAS), square formation, flowering, and boll development stages.",
            fertilization: "Apply NPK at 120:60:60 kg/ha. Apply 50% N and full P and K as basal; remaining N in two equal splits at square formation and flowering stages.",
            pestControl: "Monitor for bollworms, jassids, thrips, whiteflies, and pink bollworm. Use IPM practices including pheromone traps, light traps, and approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for bacterial blight, Alternaria leaf spot, and cotton leaf curl virus. Use disease-resistant varieties and appropriate fungicides/bactericides.",
            harvesting: "Pick cotton when bolls are fully open (but before fibers dry out) in 3-4 pickings at 2-3 week intervals. Avoid mixing trash and contaminants during picking.",
            storage: "Store cotton in clean, dry place. Avoid moisture to prevent discoloration. Pack in clean cotton or jute bags for transport to market.",
            cropRotation: "Cotton-wheat in north, cotton-gram/safflower in central region, and cotton-rice/maize in south."
        },
        varieties: [
            {
                name: "Bunny BG-II (Bt Hybrid)",
                description: "High-yielding Bt hybrid with resistance to bollworms",
                adaptability: "Central and South India",
                duration: "160-180 days"
            },
            {
                name: "RCH-2 BG-II (Bt Hybrid)",
                description: "Popular Bt hybrid with good fiber quality and bollworm resistance",
                adaptability: "Widely grown across cotton regions",
                duration: "170-180 days"
            },
            {
                name: "Suraj (Non-Bt)",
                description: "High-yielding variety suitable for rainfed conditions",
                adaptability: "Central India",
                duration: "150-160 days"
            },
            {
                name: "LRA-5166 (Non-Bt)",
                description: "Variety with drought tolerance and good fiber quality",
                adaptability: "South India",
                duration: "160-175 days"
            },
            {
                name: "H-6 (Non-Bt)",
                description: "Early maturing variety suitable for irrigated areas",
                adaptability: "North India (Punjab, Haryana)",
                duration: "150-160 days"
            }
        ],
        commonDiseases: [
            {
                name: "Bacterial Blight (Angular Leaf Spot)",
                scientificName: "Xanthomonas axonopodis pv. malvacearum",
                symptoms: "Angular, dark-brown water-soaked spots on leaves which later become necrotic; black lesions on stems and bolls",
                management: "Use disease-free seeds, resistant varieties, seed treatment with Streptocycline (100 ppm) + Copper oxychloride (0.25%), spray Streptocycline (100 ppm) + Copper oxychloride (0.3%) at initial disease appearance"
            },
            {
                name: "Alternaria Leaf Spot",
                scientificName: "Alternaria macrospora",
                symptoms: "Brown circular spots on leaves with concentric rings and yellow halos",
                management: "Use disease-free seeds, crop rotation, spray Mancozeb (0.25%) or Copper oxychloride (0.3%) at initial disease appearance"
            },
            {
                name: "Cotton Leaf Curl Virus",
                scientificName: "Cotton leaf curl virus (CLCuV)",
                symptoms: "Upward curling of leaves, thickening of veins, and formation of enations on the underside of leaves",
                management: "Use resistant varieties, early sowing, control whitefly vectors using appropriate insecticides"
            }
        ]
    },
    {
        name: "Chickpea (Bengal Gram)",
        description: "The most important pulse crop in India, rich in protein and essential for sustainable agriculture.",
        image: "https://pixabay.com/get/g0ced5fa0ed5b3b63f5584c2bf9e3fbb7c7aa6de8a9f2cf5ad30f073c5c93ff2c6a1fe66a4acc2d2a1f2979aee98c5f53_1280.jpg",
        category: "Pulse/Legume",
        climate: "Cool, dry weather",
        growingSeason: "Rabi (winter) season, October-April",
        indianRegions: "Madhya Pradesh, Maharashtra, Rajasthan, Uttar Pradesh, Karnataka, Andhra Pradesh",
        yieldPotential: "15-25 quintals/hectare",
        nutritionalValue: "High protein (20-22%), dietary fiber, complex carbohydrates, vitamins, and minerals",
        requirements: {
            nitrogen: 0.3,
            phosphorus: 0.6,
            potassium: 0.4,
            phRange: [6.0, 8.0],
            ecRange: [0, 6],
            organicMatter: 1.5,
            soilTextures: ["loamy", "sandy loam", "black soil"],
            temperature: {
                germination: "15-32°C",
                growth: "15-25°C",
                optimal: "18-22°C"
            },
            waterRequirement: "350-500 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on region and growing conditions. Popular varieties include JG-11, JAKI 9218, Vijay, KAK-2 (kabuli type), and Pusa 362. Use certified seeds treated with fungicides and Rhizobium culture.",
            landPreparation: "Prepare a fine tilth by 2-3 plowings followed by planking. Apply well-decomposed FYM at 5-10 tons/hectare 3-4 weeks before sowing.",
            planting: "Sow seeds in rows 30-45 cm apart with plant to plant spacing of 10-15 cm. Seed rate is 60-80 kg/ha for desi types and 100-120 kg/ha for kabuli types. Optimal sowing time is mid-October to mid-November.",
            irrigation: "Chickpea is mostly grown as a rainfed crop. If irrigation is available, apply at pre-flowering, pod formation, and pod development stages.",
            fertilization: "Apply NPK at 20:40:20 kg/ha as basal dose. Being a legume, chickpea requires less nitrogen due to nitrogen fixation. Seed treatment with Rhizobium culture is beneficial.",
            pestControl: "Monitor for pod borer (Helicoverpa armigera) and cut worms. Use IPM practices including pheromone traps, bird perches, and approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for Fusarium wilt, Ascochyta blight, and collar rot. Use disease-resistant varieties, seed treatment with fungicides, and proper crop rotation.",
            harvesting: "Harvest when plants turn yellowish and pods are mature. Plants are pulled out or cut close to the ground. Threshing is done by beating dried plants with sticks or using threshers.",
            storage: "Dry seeds to 10-12% moisture content and store in gunny bags or metal bins in a cool, dry place. Use neem leaves or neem oil as insect repellents for storage.",
            cropRotation: "Chickpea-fallow-rice, chickpea-maize, or chickpea after short-duration rice."
        },
        varieties: [
            {
                name: "JG-11 (Desi type)",
                description: "High-yielding variety with resistance to Fusarium wilt and tolerance to drought",
                adaptability: "Central and South India",
                duration: "95-105 days"
            },
            {
                name: "JAKI 9218 (Desi type)",
                description: "Wilt-resistant variety with high yield potential",
                adaptability: "Maharashtra and Central India",
                duration: "105-110 days"
            },
            {
                name: "KAK-2 (Kabuli type)",
                description: "Bold-seeded Kabuli chickpea with high market value",
                adaptability: "Central and peninsular India",
                duration: "110-115 days"
            },
            {
                name: "Pusa 362 (Desi type)",
                description: "Early maturing variety with resistance to Fusarium wilt",
                adaptability: "Northern Plains",
                duration: "120-125 days"
            },
            {
                name: "Vijay (Desi type)",
                description: "High-yielding variety suitable for rainfed conditions",
                adaptability: "Central India",
                duration: "100-110 days"
            }
        ],
        commonDiseases: [
            {
                name: "Fusarium Wilt",
                scientificName: "Fusarium oxysporum f. sp. ciceri",
                symptoms: "Yellowing and wilting of plants starting from lower leaves; internal discoloration of stem xylem",
                management: "Use resistant varieties, seed treatment with Trichoderma viride (4g/kg seed) + Carboxin + Thiram (2g/kg seed), crop rotation"
            },
            {
                name: "Ascochyta Blight",
                scientificName: "Ascochyta rabiei",
                symptoms: "Circular brown lesions with concentric rings on leaves, stems, and pods",
                management: "Use resistant varieties, seed treatment with Carbendazim + Mancozeb (2g/kg seed), spray Mancozeb (0.25%) or Chlorothalonil (0.2%) at initial disease appearance"
            },
            {
                name: "Collar Rot",
                scientificName: "Sclerotium rolfsii",
                symptoms: "Rotting at the collar region of young plants, white fungal mycelium on affected parts",
                management: "Seed treatment with Trichoderma viride (4g/kg seed) + Carboxin + Thiram (2g/kg seed), crop rotation, avoid excessive moisture"
            }
        ]
    },
    {
        name: "Sugarcane",
        description: "A major cash crop in India, primarily grown for sugar, jaggery, and biofuel production.",
        image: "https://pixabay.com/get/g07ee8d5b109134b2390b2243d5b16054fef8e7aeccdbfece3cebf24440b520d959ea80ddeed8aa217776f924571a26264f8c244e40965a6dc005ae0e3edaba19_1280.jpg",
        category: "Sugar",
        climate: "Tropical and subtropical",
        growingSeason: "Year-round cultivation with main planting seasons: Spring (February-March) and Autumn (October-November)",
        indianRegions: "Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, Bihar, Punjab, Haryana",
        yieldPotential: "70-100 tons/hectare of cane",
        nutritionalValue: "Rich in sucrose, glucose, fructose, minerals, and fiber",
        requirements: {
            nitrogen: 0.7,
            phosphorus: 0.4,
            potassium: 0.6,
            phRange: [6.5, 7.5],
            ecRange: [0, 6],
            organicMatter: 2,
            soilTextures: ["loamy", "clayey", "alluvial"],
            temperature: {
                germination: "25-32°C",
                growth: "24-30°C",
                optimal: "28-30°C"
            },
            waterRequirement: "1500-2500 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on region, season, and purpose (sugar or jaggery). Popular varieties include CoC 671, Co 86032, Co 0238, CoJ 64, and Co 0118. Use disease-free seed canes from authorized sources.",
            landPreparation: "Deep plow the field followed by 2-3 harrowing. Prepare ridges and furrows 75-90 cm apart. Apply well-decomposed FYM at 15-20 tons/hectare before land preparation.",
            planting: "Plant two or three budded setts in furrows at a rate of 75,000-80,000 setts/hectare. Plant setts end to end with slight overlapping. Cover with 2-3 cm soil. Best planting time is February-March for spring planting and October-November for autumn planting.",
            irrigation: "Apply first irrigation immediately after planting, then at 7-10 day intervals during germination phase. Maintain soil moisture throughout the growing period with irrigation intervals of 12-15 days in winter and 7-10 days in summer.",
            fertilization: "Apply NPK at 250:100:120 kg/ha. Apply 10% N, full P and 50% K as basal; remaining N in 3-4 splits up to 120 days and remaining K at 90-120 days after planting.",
            pestControl: "Monitor for early shoot borer, top borer, pyrilla, and white grubs. Use trash mulching, remove dead hearts, and apply approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for red rot, smut, wilt, and ratoon stunting disease. Use disease-free setts, hot water treatment of setts (52°C for 30 minutes), and proper crop rotation.",
            harvesting: "Harvest when the crop is fully mature (12-14 months for plant crop and 10-12 months for ratoon crop). Cut stalks at ground level using sharp implements. Remove tops and trash before sending to mills.",
            storage: "Minimize the time between harvesting and crushing. If storage is necessary, keep canes in shade and protect from sun and rain.",
            cropRotation: "Practice crop rotation after 2-3 ratoon crops. Rotate with legumes, vegetables, or wheat depending on the region."
        },
        varieties: [
            {
                name: "Co 0238",
                description: "High-sugar content (10-12%) and high-yielding variety",
                adaptability: "North Indian plains (UP, Haryana, Punjab)",
                duration: "11-12 months"
            },
            {
                name: "Co 86032",
                description: "High-yielding variety resistant to red rot and smut",
                adaptability: "Southern India (TN, Karnataka, Maharashtra)",
                duration: "12-14 months"
            },
            {
                name: "CoC 671",
                description: "Early maturing variety suitable for jaggery production",
                adaptability: "Peninsular India",
                duration: "10-11 months"
            },
            {
                name: "Co 0118",
                description: "High-yielding variety with resistance to major diseases",
                adaptability: "Central and North India",
                duration: "11-12 months"
            },
            {
                name: "CoJ 64",
                description: "Early maturing variety suitable for jaggery making",
                adaptability: "North-Western India",
                duration: "10-11 months"
            }
        ],
        commonDiseases: [
            {
                name: "Red Rot",
                scientificName: "Colletotrichum falcatum",
                symptoms: "Red discoloration of internal tissues with white transverse bands (characteristic ladder-like appearance), reddening of midrib, and withering of leaves",
                management: "Use resistant varieties, select healthy seed material, hot water treatment of setts (52°C for 30 minutes), rogueing of infected plants, crop rotation"
            },
            {
                name: "Smut",
                scientificName: "Sporisorium scitamineum",
                symptoms: "Development of black whip-like structures from the growing point of infected plants",
                management: "Use resistant varieties, select healthy seed material, hot water treatment of setts (52°C for 30 minutes), rogueing and burning of infected plants"
            },
            {
                name: "Wilt",
                scientificName: "Fusarium sacchari",
                symptoms: "Gradual wilting of plants, internal discoloration of stalk tissues, and drying of leaves",
                management: "Use resistant varieties, select healthy seed material, proper irrigation management, crop rotation"
            }
        ]
    },
    {
        name: "Mango",
        description: "The national fruit of India and one of the most important fruit crops in the country.",
        image: "https://pixabay.com/get/g6eca20e0ef65c8d6aa54d1b8f5e1d6d26c4b9fd82e0e05b0aad48f81bdc5c7f4ac1f2f8fa29fc52a3b20df1f539ceb67b84f43275e71d1c7ca65e9c47a2e9a4c_1280.jpg",
        category: "Fruit",
        climate: "Tropical and subtropical",
        growingSeason: "Perennial crop with seasonal fruit production (February-July)",
        indianRegions: "Uttar Pradesh, Andhra Pradesh, Telangana, Karnataka, Bihar, Tamil Nadu, Maharashtra, Gujarat, West Bengal",
        yieldPotential: "10-15 tons/hectare for commercial orchards",
        nutritionalValue: "Rich in vitamins A and C, potassium, fiber, and antioxidants",
        requirements: {
            nitrogen: 0.5,
            phosphorus: 0.4,
            potassium: 0.6,
            phRange: [6.0, 7.5],
            ecRange: [0, 4],
            organicMatter: 2,
            soilTextures: ["loamy", "sandy loam", "red laterite"],
            temperature: {
                germination: "25-30°C",
                growth: "24-30°C",
                optimal: "24-27°C"
            },
            waterRequirement: "1000-1500 mm annually with a distinct dry period for flowering"
        },
        process: {
            seedSelection: "Select varieties based on region, purpose (table or processing), and market demand. Popular varieties include Alphonso, Dashehari, Langra, Banganapalli, Totapuri, Chausa, and Kesar. Use grafted plants from authorized nurseries.",
            landPreparation: "Clear the land and dig pits of 1m × 1m × 1m size at a spacing of 10m × 10m (100 plants/hectare). Fill pits with topsoil mixed with 20-25 kg well-decomposed FYM, 1 kg single super phosphate, and 100g insecticide powder.",
            planting: "Plant grafted saplings in the center of the prepared pit during monsoon (July-August). Ensure the graft joint is above ground level. Provide support to young plants and protect from direct sunlight for initial 1-2 weeks.",
            irrigation: "Apply irrigation immediately after planting and then at 15-day intervals during the first year. For bearing trees, critical irrigation stages are before flowering, after fruit set, and during fruit development.",
            fertilization: "For adult trees (10+ years), apply 1000g N, 500g P, and 1000g K per tree annually. Apply fertilizers in two splits: after harvest (June-July) and before flowering (October-November).",
            pestControl: "Monitor for mango hoppers, fruit flies, mealy bugs, and stem borers. Use pheromone traps, sticky traps, and approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for powdery mildew, anthracnose, and bacterial canker. Use proper orchard sanitation, appropriate fungicides/bactericides, and resistant varieties.",
            harvesting: "Harvest fruits when mature but not fully ripe. Maturity signs vary by variety but generally include slight color change, flattening of shoulders, and development of characteristic aroma. Use harvesting tools to avoid injury to fruits.",
            storage: "Store at 10-12°C with 85-90% relative humidity for up to 3-4 weeks depending on variety. For ripening, keep at room temperature (24-27°C).",
            cropRotation: "Not applicable for perennial fruit crops. Intercropping with legumes, vegetables, or short-duration crops can be practiced in young orchards."
        },
        varieties: [
            {
                name: "Alphonso (Hapus)",
                description: "Premium dessert variety with excellent flavor, aroma, and low fiber content",
                adaptability: "Western India (Maharashtra, Goa, Gujarat)",
                season: "May-June"
            },
            {
                name: "Dashehari",
                description: "Medium-sized, sweet fruits with thin skin and fiber-less pulp",
                adaptability: "North India (UP, Uttarakhand)",
                season: "June-July"
            },
            {
                name: "Banganapalli (Benishan)",
                description: "Large, yellow fruits with sweet, fiber-less pulp",
                adaptability: "South India (Andhra Pradesh, Telangana, Karnataka)",
                season: "May-June"
            },
            {
                name: "Langra",
                description: "Medium to large fruits with distinct flavor and aroma",
                adaptability: "North India (UP, Bihar)",
                season: "July-August"
            },
            {
                name: "Kesar",
                description: "Medium-sized fruits with deep yellow pulp and excellent aroma",
                adaptability: "Western India (Gujarat)",
                season: "June-July"
            }
        ],
        commonDiseases: [
            {
                name: "Powdery Mildew",
                scientificName: "Oidium mangiferae",
                symptoms: "White powdery growth on inflorescence, young leaves, and fruits; flowers and young fruits drop",
                management: "Two sprays of Wettable Sulfur (0.2%) or Carbendazim (0.1%) at 15-day intervals starting before flower opening"
            },
            {
                name: "Anthracnose",
                scientificName: "Colletotrichum gloeosporioides",
                symptoms: "Black spots on leaves, flowers, and fruits; fruits develop sunken, dark spots during ripening",
                management: "Pre-harvest sprays of Carbendazim (0.1%) or Mancozeb (0.2%) at 15-day intervals, post-harvest hot water treatment (52°C for 5 minutes)"
            },
            {
                name: "Bacterial Canker",
                scientificName: "Xanthomonas campestris pv. mangiferaeindicae",
                symptoms: "Angular, water-soaked lesions on leaves; raised, dark, irregular cankers on stems, branches, and fruits",
                management: "Prune and burn infected parts, spray Streptocycline (100 ppm) + Copper oxychloride (0.3%) at 15-day intervals during vegetative flush"
            }
        ]
    },
    {
        name: "Potato",
        description: "The most important vegetable crop in India, widely grown for its edible tubers.",
        image: "https://pixabay.com/get/g5c3de924a541b23e6b40d0c2227998ebd98a2f0eb4322f03d43deac05634b4fadd6291325588049fcdc68a5ab760f64b793d1c10849d23f0dfb28b149beca176_1280.jpg",
        category: "Vegetable",
        climate: "Cool temperate",
        growingSeason: "Rabi (winter) season, October-March",
        indianRegions: "Uttar Pradesh, West Bengal, Bihar, Punjab, Assam, Karnataka",
        yieldPotential: "20-30 tons/hectare",
        nutritionalValue: "Rich in carbohydrates, vitamin C, potassium, and dietary fiber",
        requirements: {
            nitrogen: 0.7,
            phosphorus: 0.5,
            potassium: 0.8,
            phRange: [5.5, 6.5],
            ecRange: [0, 4],
            organicMatter: 2.5,
            soilTextures: ["loamy", "sandy loam"],
            temperature: {
                germination: "18-22°C",
                growth: "15-20°C",
                optimal: "18-20°C"
            },
            waterRequirement: "500-700 mm throughout growing season"
        },
        process: {
            seedSelection: "Select varieties based on region, purpose (table or processing), and market demand. Popular varieties include Kufri Jyoti, Kufri Bahar, Kufri Pukhraj, Kufri Chandramukhi, and Kufri Sindhuri. Use certified seed tubers from authorized sources.",
            landPreparation: "Prepare a fine tilth by 2-3 plowings followed by planking. Apply well-decomposed FYM at 20-25 tons/hectare 3-4 weeks before planting. Prepare ridges and furrows 60 cm apart.",
            planting: "Cut large seed tubers into pieces with 2-3 eyes each. Allow cut surfaces to heal for 2-3 days. Plant seed tubers at a spacing of 60 × 20 cm at a depth of 5-7 cm on ridges. Seed rate is 2.5-3 tons/hectare. Optimal planting time is October-November in plains and February-March in hills.",
            irrigation: "First irrigation after planting if soil is dry, then at 7-10 day intervals. Critical irrigation stages are stolon formation, tuber initiation, and tuber development. Avoid water stress during tuber development.",
            fertilization: "Apply NPK at 150:100:150 kg/ha. Apply 50% N and full P and K as basal; remaining N in two equal splits at 30 and 45 days after planting.",
            pestControl: "Monitor for potato tuber moth, aphids, and white grubs. Use IPM practices including pheromone traps, yellow sticky traps, and approved insecticides when threshold levels are reached.",
            diseaseManagement: "Watch for late blight, early blight, and bacterial wilt. Use disease-free seed tubers, seed treatment with fungicides, and appropriate fungicides/bactericides.",
            harvesting: "Harvest when tops turn yellow and start drying (90-110 days after planting). Cut the tops 10 days before harvesting to allow skin hardening. Dig carefully to avoid damage to tubers.",
            storage: "Cure harvested tubers in shade for 10-15 days. Store in cool, dry place with adequate ventilation. For long-term storage, maintain temperature at 2-4°C with 85-90% relative humidity.",
            cropRotation: "Potato-maize-vegetables, potato-wheat, potato-onion, or potato-legumes."
        },
        varieties: [
            {
                name: "Kufri Jyoti",
                description: "Medium-early maturing variety with resistance to late blight",
                adaptability: "Hills and plains",
                duration: "90-100 days"
            },
            {
                name: "Kufri Pukhraj",
                description: "Early maturing variety with high yield potential and yellow flesh",
                adaptability: "Plains of North India",
                duration: "80-90 days"
            },
            {
                name: "Kufri Sindhuri",
                description: "Medium maturing, drought-tolerant variety with red skin",
                adaptability: "Indo-Gangetic plains",
                duration: "90-110 days"
            },
            {
                name: "Kufri Chandramukhi",
                description: "Early maturing variety with white flesh and good culinary quality",
                adaptability: "Plains of North India",
                duration: "80-90 days"
            },
            {
                name: "Kufri Bahar",
                description: "Medium-late maturing variety with high yield potential",
                adaptability: "Indo-Gangetic plains",
                duration: "100-110 days"
            }
        ],
        commonDiseases: [
            {
                name: "Late Blight",
                scientificName: "Phytophthora infestans",
                symptoms: "Water-soaked, dark brown to black lesions on leaves that rapidly enlarge; white mildew on undersides of leaves in humid conditions; infected tubers show reddish-brown discoloration",
                management: "Use resistant varieties, plant disease-free seed tubers, preventive sprays of Mancozeb (0.25%) or Chlorothalonil (0.2%) before disease appearance, followed by Metalaxyl + Mancozeb (0.25%) or Cymoxanil + Mancozeb (0.3%) after disease appearance"
            },
            {
                name: "Early Blight",
                scientificName: "Alternaria solani",
                symptoms: "Brown to dark brown, target-like circular lesions with concentric rings on older leaves; infected tubers show sunken, dark lesions",
                management: "Use resistant varieties, crop rotation, spray Mancozeb (0.25%) or Chlorothalonil (0.2%) at 10-15 day intervals after disease appearance"
            },
            {
                name: "Bacterial Wilt",
                scientificName: "Ralstonia solanacearum",
                symptoms: "Sudden wilting of plants, vascular browning, bacterial ooze from cut stems when placed in water",
                management: "Use disease-free seed tubers, crop rotation (3-4 years), avoid waterlogging, use resistant varieties"
            }
        ]
    }
];