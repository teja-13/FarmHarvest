/**
 * IndexedDB utility for offline data storage
 * Provides CRUD operations for soil test data, crop recommendations, 
 * disease detection results, and user settings
 */

// Database configuration
const DB_NAME = 'agroassist_db';
const DB_VERSION = 1;
const STORES = {
    SOIL_TESTS: 'soil_tests',
    RECOMMENDATIONS: 'crop_recommendations',
    DISEASE_RESULTS: 'disease_results',
    USER_SETTINGS: 'user_settings'
};

// Initialize the database
function initDB() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject(new Error("Your browser doesn't support IndexedDB"));
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            reject(new Error("Database error: " + event.target.errorCode));
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object stores with indices
            if (!db.objectStoreNames.contains(STORES.SOIL_TESTS)) {
                const soilTestStore = db.createObjectStore(STORES.SOIL_TESTS, { keyPath: 'id', autoIncrement: true });
                soilTestStore.createIndex('timestamp', 'timestamp', { unique: false });
                soilTestStore.createIndex('userId', 'userId', { unique: false });
            }

            if (!db.objectStoreNames.contains(STORES.RECOMMENDATIONS)) {
                const recommendationsStore = db.createObjectStore(STORES.RECOMMENDATIONS, { keyPath: 'id', autoIncrement: true });
                recommendationsStore.createIndex('timestamp', 'timestamp', { unique: false });
                recommendationsStore.createIndex('userId', 'userId', { unique: false });
                recommendationsStore.createIndex('soilTestId', 'soilTestId', { unique: false });
            }

            if (!db.objectStoreNames.contains(STORES.DISEASE_RESULTS)) {
                const diseaseStore = db.createObjectStore(STORES.DISEASE_RESULTS, { keyPath: 'id', autoIncrement: true });
                diseaseStore.createIndex('timestamp', 'timestamp', { unique: false });
                diseaseStore.createIndex('userId', 'userId', { unique: false });
            }

            if (!db.objectStoreNames.contains(STORES.USER_SETTINGS)) {
                db.createObjectStore(STORES.USER_SETTINGS, { keyPath: 'userId' });
            }
        };
    });
}

/**
 * Add a record to a store
 * @param {string} storeName - The name of the store
 * @param {Object} data - The data to add
 * @return {Promise} A promise that resolves with the ID of the new record
 */
function addRecord(storeName, data) {
    return new Promise((resolve, reject) => {
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            // Add timestamp if not present
            if (!data.timestamp) {
                data.timestamp = new Date().toISOString();
            }
            
            const request = store.add(data);
            
            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
            
            request.onerror = (event) => {
                reject(new Error("Error adding record: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Get a record by ID
 * @param {string} storeName - The name of the store
 * @param {number|string} id - The ID of the record
 * @return {Promise} A promise that resolves with the record
 */
function getRecord(storeName, id) {
    return new Promise((resolve, reject) => {
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.get(id);
            
            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
            
            request.onerror = (event) => {
                reject(new Error("Error getting record: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Get all records from a store
 * @param {string} storeName - The name of the store
 * @param {Object} query - Query parameters (optional)
 * @return {Promise} A promise that resolves with an array of records
 */
function getAllRecords(storeName, query = null) {
    return new Promise((resolve, reject) => {
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            let request;
            
            if (query && query.index && query.value) {
                const index = store.index(query.index);
                request = index.getAll(query.value);
            } else {
                request = store.getAll();
            }
            
            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
            
            request.onerror = (event) => {
                reject(new Error("Error getting records: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Update a record
 * @param {string} storeName - The name of the store
 * @param {Object} data - The updated data (must include ID)
 * @return {Promise} A promise that resolves when the update is complete
 */
function updateRecord(storeName, data) {
    return new Promise((resolve, reject) => {
        if (!data.id) {
            reject(new Error("Record ID is required for updates"));
            return;
        }
        
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            
            // Update timestamp if not specified
            if (!data.updated) {
                data.updated = new Date().toISOString();
            }
            
            const request = store.put(data);
            
            request.onsuccess = () => {
                resolve();
            };
            
            request.onerror = (event) => {
                reject(new Error("Error updating record: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Delete a record
 * @param {string} storeName - The name of the store
 * @param {number|string} id - The ID of the record to delete
 * @return {Promise} A promise that resolves when the deletion is complete
 */
function deleteRecord(storeName, id) {
    return new Promise((resolve, reject) => {
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.delete(id);
            
            request.onsuccess = () => {
                resolve();
            };
            
            request.onerror = (event) => {
                reject(new Error("Error deleting record: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

/**
 * Clear all records from a store
 * @param {string} storeName - The name of the store
 * @return {Promise} A promise that resolves when the store is cleared
 */
function clearStore(storeName) {
    return new Promise((resolve, reject) => {
        initDB().then(db => {
            const transaction = db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const request = store.clear();
            
            request.onsuccess = () => {
                resolve();
            };
            
            request.onerror = (event) => {
                reject(new Error("Error clearing store: " + event.target.error));
            };
            
            transaction.oncomplete = () => {
                db.close();
            };
        }).catch(error => {
            reject(error);
        });
    });
}

// Soil Test specific functions
function saveSoilTestData(data) {
    // Add user ID from session if available
    if (window.currentUser && window.currentUser.id) {
        data.userId = window.currentUser.id;
    }
    
    return addRecord(STORES.SOIL_TESTS, data);
}

function loadPreviousSoilTests(userId = null) {
    const query = userId ? { index: 'userId', value: userId } : null;
    return getAllRecords(STORES.SOIL_TESTS, query);
}

function loadSoilTest(id) {
    return getRecord(STORES.SOIL_TESTS, id);
}

// Crop recommendations specific functions
function saveCropRecommendation(data) {
    if (window.currentUser && window.currentUser.id) {
        data.userId = window.currentUser.id;
    }
    
    return addRecord(STORES.RECOMMENDATIONS, data);
}

function loadRecommendations(userId = null) {
    const query = userId ? { index: 'userId', value: userId } : null;
    return getAllRecords(STORES.RECOMMENDATIONS, query);
}

// Disease detection specific functions
function saveDiseaseResult(data) {
    if (window.currentUser && window.currentUser.id) {
        data.userId = window.currentUser.id;
    }
    
    return addRecord(STORES.DISEASE_RESULTS, data);
}

function loadDiseaseResults(userId = null) {
    const query = userId ? { index: 'userId', value: userId } : null;
    return getAllRecords(STORES.DISEASE_RESULTS, query);
}

// User settings specific functions
function saveUserSettings(userId, settings) {
    return updateRecord(STORES.USER_SETTINGS, {
        userId: userId,
        ...settings
    });
}

function getUserSettings(userId) {
    return getRecord(STORES.USER_SETTINGS, userId);
}

// Export all functions to make them available globally
window.dbUtils = {
    initDB,
    addRecord,
    getRecord,
    getAllRecords,
    updateRecord,
    deleteRecord,
    clearStore,
    saveSoilTestData,
    loadPreviousSoilTests,
    loadSoilTest,
    saveCropRecommendation,
    loadRecommendations,
    saveDiseaseResult,
    loadDiseaseResults,
    saveUserSettings,
    getUserSettings,
    STORES
};
