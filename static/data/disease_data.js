/**
 * Disease data for the disease detection system
 * Contains information about various plant diseases, their symptoms, and treatments
 */

// Define the disease data
const DISEASE_DATA = [
    {
        disease: "Late Blight",
        description: "Late blight is a devastating disease of potato and tomato caused by the fungus-like oomycete pathogen Phytophthora infestans.",
        symptoms: [
            "Brown-black lesions on leaves and stems",
            "White fungal growth on underside of leaves in humid conditions",
            "Rapid wilting and death of affected tissues",
            "Infected potato tubers show copper-brown, granular dry rot"
        ],
        treatment: [
            "Remove and destroy all infected plant parts",
            "Apply copper-based fungicides as a preventative measure",
            "Ensure good air circulation by proper spacing",
            "Avoid overhead irrigation which promotes leaf wetness",
            "Use resistant varieties when available"
        ],
        image: "https://pixabay.com/get/gd40dfedd84b760c8dec4e975e2c0b663676b69ccab36881ec4fd7b24b65c5ace9bd356889a3a773f46a99500d81a2d81f6daaabc7f72b86ae10424314c9dda12_1280.jpg",
        crops: ["Tomato", "Potato"],
        visualFeatures: {
            colors: {
                brown: 0.7,
                green: 0.3,
                black: 0.5
            },
            textures: {
                spotted: 0.8,
                mottled: 0.6
            },
            patterns: {
                irregular: 0.9,
                edgeLocated: 0.5
            }
        }
    },
    {
        disease: "Powdery Mildew",
        description: "Powdery mildew is a fungal disease that affects a wide range of plants, characterized by white powdery spots on leaves and stems.",
        symptoms: [
            "White or grayish powdery coating on leaves, stems, and sometimes fruits",
            "Yellowing and drying of affected leaves",
            "Stunted growth and reduced yield",
            "Premature leaf drop"
        ],
        treatment: [
            "Remove and destroy infected plant parts",
            "Apply sulfur or potassium bicarbonate-based fungicides",
            "Increase air circulation around plants",
            "Avoid overhead watering and water early in the day",
            "Use resistant varieties where available"
        ],
        image: "https://pixabay.com/get/gfeb871f6bd220487166d4178db039891f4d1c31d7b4419263e2896afa1203ae29abcf98ab64078916d07886d6c98a98f3190680a5302008a5c03be10f196df9d_1280.jpg",
        crops: ["Wheat", "Cucumber", "Grapes", "Squash"],
        visualFeatures: {
            colors: {
                white: 0.9,
                gray: 0.6,
                yellow: 0.4
            },
            textures: {
                spotted: 0.5,
                mottled: 0.3
            },
            patterns: {
                circular: 0.2,
                uniform: 0.7
            }
        }
    },
    {
        disease: "Leaf Spot",
        description: "Leaf spot diseases are caused by fungi or bacteria and are characterized by spots on leaves that can vary in size and color.",
        symptoms: [
            "Circular or irregular spots on leaves",
            "Spots may have yellow halos",
            "Severely affected leaves may turn yellow and drop",
            "Spots may merge to form larger lesions"
        ],
        treatment: [
            "Remove and destroy infected leaves",
            "Apply appropriate fungicides based on the specific pathogen",
            "Avoid overhead watering",
            "Ensure good air circulation with proper spacing",
            "Practice crop rotation"
        ],
        image: "https://pixabay.com/get/gbb02ef38793128fca730cdf017eff0c6b7444c03be458d4d98712c41656bfe1268864cb2ebebcfd66a64a8ae351dc5afe171bbb72894b0720537be8eefbb1e12_1280.jpg",
        crops: ["Tomato", "Corn", "Beans", "Strawberry"],
        visualFeatures: {
            colors: {
                brown: 0.8,
                yellow: 0.6,
                black: 0.4
            },
            textures: {
                spotted: 0.9,
                mottled: 0.4
            },
            patterns: {
                circular: 0.8,
                irregular: 0.5
            }
        }
    },
    {
        disease: "Rust",
        description: "Rust is a fungal disease that affects many plants, characterized by rusty-colored pustules on plant tissues.",
        symptoms: [
            "Orange, yellow, or reddish-brown pustules on leaves, stems, and sometimes fruits",
            "Pustules release powdery spores when touched",
            "Severely affected leaves may turn yellow and drop",
            "Stunted plant growth and reduced yield"
        ],
        treatment: [
            "Remove and destroy infected plant parts",
            "Apply fungicides containing triazoles or strobilurins",
            "Improve air circulation by proper spacing and pruning",
            "Avoid overhead irrigation",
            "Use resistant varieties when available"
        ],
        image: "https://pixabay.com/get/g0e5c9b083be3cb779122fbf3b8d85f2b0fcc46f249645fc1bff78fea17bc3f8c4aa40c5eab21191b6cd46bc50b381027a4f1eeba94e7eea04dc7d916ea818ba3_1280.jpg",
        crops: ["Wheat", "Beans", "Coffee", "Corn"],
        visualFeatures: {
            colors: {
                orange: 0.9,
                yellow: 0.7,
                brown: 0.8,
                red: 0.6
            },
            textures: {
                spotted: 0.7,
                mottled: 0.5
            },
            patterns: {
                circular: 0.6,
                uniform: 0.4
            }
        }
    },
    {
        disease: "Bacterial Wilt",
        description: "Bacterial wilt is a serious disease caused by Ralstonia solanacearum that affects many crops, particularly solanaceous plants.",
        symptoms: [
            "Rapid wilting of the entire plant or specific branches",
            "No yellowing or spotting before wilting",
            "Vascular tissue shows brown discoloration",
            "Bacterial ooze may be visible when stems are cut and placed in water"
        ],
        treatment: [
            "Remove and destroy infected plants immediately",
            "Practice crop rotation with non-host plants",
            "Ensure good field drainage",
            "Use clean tools and equipment to prevent spread",
            "Plant resistant varieties when available"
        ],
        image: "https://pixabay.com/get/g61f96e7953b24650d23b462ade92c393178dcf3bba1d077a5707cec343309e10a341ffd7720b60a3f56df5c26e324ef96257809770056fa7f659758a780d9771_1280.jpg",
        crops: ["Tomato", "Potato", "Eggplant", "Pepper"],
        visualFeatures: {
            colors: {
                green: 0.3,
                brown: 0.6,
                black: 0.4
            },
            textures: {
                smooth: 0.8,
                mottled: 0.2
            },
            patterns: {
                uniform: 0.6,
                irregular: 0.4
            }
        }
    },
    {
        disease: "Mosaic Virus",
        description: "Mosaic viruses affect many plants and are characterized by mottled patterns of light and dark green, yellow, or white on leaves.",
        symptoms: [
            "Mottled pattern of light and dark green, yellow, or white on leaves",
            "Leaf distortion and curling",
            "Stunted plant growth",
            "Reduced yield and fruit quality"
        ],
        treatment: [
            "Remove and destroy infected plants",
            "Control insect vectors such as aphids",
            "Disinfect tools and equipment",
            "Use virus-free certified seed or seedlings",
            "Plant resistant varieties when available"
        ],
        image: "https://pixabay.com/get/g0b3e69ea1a8d0f7519910ab42918a06b2fc2b03931bed1a0e782b8fceef8f12f85cd20d5e527e831b52f8a51ec69646233d1957f04cfce05c935d19e0aa66175_1280.jpg",
        crops: ["Tomato", "Cucumber", "Tobacco", "Squash"],
        visualFeatures: {
            colors: {
                green: 0.8,
                yellow: 0.7,
                white: 0.4
            },
            textures: {
                mottled: 0.9,
                streaked: 0.6
            },
            patterns: {
                irregular: 0.8,
                uniform: 0.3
            }
        }
    }
];

// Make the data available globally
window.DISEASE_DATA = DISEASE_DATA;
