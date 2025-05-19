/**
 * Service Worker for AgroAssist application
 * Handles caching and offline functionality
 */

// Cache version identifier - update when files change
const CACHE_VERSION = 'v1';
const CACHE_NAME = `agroassist-${CACHE_VERSION}`;

// Files to cache for offline use
const STATIC_CACHE_URLS = [
    '/',
    '/login',
    '/register',
    '/dashboard',
    '/soil-test',
    '/crop-recommendations',
    '/disease-detection',
    '/chatbot',
    '/static/css/custom.css',
    '/static/js/main.js',
    '/static/js/indexedDB.js',
    '/static/js/camera.js',
    '/static/js/chatbot.js',
    '/static/models/crop_recommendation_model.js',
    '/static/models/disease_detection_model.js',
    '/static/data/crop_data.js',
    '/static/data/disease_data.js',
    '/static/data/chatbot_data.js',
    'https://cdn.replit.com/agent/bootstrap-agent-dark-theme.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

// Install event - cache static assets
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing Service Worker...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Caching static files');
                return cache.addAll(STATIC_CACHE_URLS);
            })
            .then(() => {
                console.log('[Service Worker] Successfully cached static files');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[Service Worker] Cache error:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating Service Worker...');
    
    event.waitUntil(
        caches.keys()
            .then(keyList => {
                return Promise.all(keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removing old cache:', key);
                        return caches.delete(key);
                    }
                }));
            })
            .then(() => {
                console.log('[Service Worker] Successfully removed old caches');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin) && 
        !event.request.url.startsWith('https://cdn.')) {
        return;
    }
    
    // Handle HTML navigation requests differently
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    // If offline, serve the cached index page
                    return caches.match('/');
                })
        );
        return;
    }
    
    // For all other requests, try the cache first, fall back to network
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('[Service Worker] Serving from cache:', event.request.url);
                    return cachedResponse;
                }
                
                console.log('[Service Worker] Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then(response => {
                        // Don't cache if not a success response
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        
                        // Clone the response as it's a stream and can only be consumed once
                        const responseToCache = response.clone();
                        
                        // Add to cache for next time
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                console.log('[Service Worker] Caching new resource:', event.request.url);
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(error => {
                        console.error('[Service Worker] Fetch failed:', error);
                        // Try to serve a fallback for image requests
                        if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
                            return caches.match('/static/images/fallback.svg');
                        }
                        
                        throw error;
                    });
            })
    );
});

// Handle background sync for pending operations
self.addEventListener('sync', event => {
    console.log('[Service Worker] Background Sync Event:', event.tag);
    
    if (event.tag === 'sync-soil-tests') {
        event.waitUntil(syncSoilTests());
    } else if (event.tag === 'sync-disease-results') {
        event.waitUntil(syncDiseaseResults());
    }
});

// Function to sync soil test data when online
function syncSoilTests() {
    // This would be implemented to sync with server when online
    console.log('[Service Worker] Syncing soil tests...');
    return Promise.resolve();
}

// Function to sync disease detection results when online
function syncDiseaseResults() {
    // This would be implemented to sync with server when online
    console.log('[Service Worker] Syncing disease results...');
    return Promise.resolve();
}

// Handle push notifications
self.addEventListener('push', event => {
    console.log('[Service Worker] Push Notification received:', event);
    
    let title = 'AgroAssist Notification';
    let options = {
        body: 'New update from AgroAssist',
        icon: '/static/images/logo.svg',
        badge: '/static/images/badge.svg'
    };
    
    // If there's data in the push event, use it
    if (event.data) {
        const data = event.data.json();
        title = data.title || title;
        options.body = data.body || options.body;
        options.icon = data.icon || options.icon;
    }
    
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    console.log('[Service Worker] Notification click:', event.notification.tag);
    
    event.notification.close();
    
    // Open a window when a notification is clicked
    event.waitUntil(
        clients.matchAll({ type: 'window' })
            .then(windowClients => {
                // If a window already open, focus it
                for (let client of windowClients) {
                    if (client.url === '/' && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Otherwise open a new window
                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
    );
});
