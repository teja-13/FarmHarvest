/**
 * Camera utility for disease detection
 * Handles camera access, capturing images, and image processing
 */

// Camera related variables
let stream = null;
let videoTracks = [];
let currentImageBlob = null;

/**
 * Initialize the camera module
 * @param {string} videoElementId - ID of the video element for preview
 * @param {string} canvasElementId - ID of the canvas element for capture
 * @param {function} onCameraReady - Callback when camera is ready
 * @param {function} onError - Callback when an error occurs
 */
function initCamera(videoElementId, canvasElementId, onCameraReady, onError) {
    const videoElement = document.getElementById(videoElementId);
    const canvasElement = document.getElementById(canvasElementId);
    
    if (!videoElement || !canvasElement) {
        if (onError) onError(new Error('Video or canvas element not found'));
        return;
    }
    
    // Check for camera support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        if (onError) onError(new Error('Camera access not supported in this browser'));
        return;
    }
    
    // Request camera access
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(mediaStream => {
            stream = mediaStream;
            videoElement.srcObject = mediaStream;
            videoTracks = mediaStream.getVideoTracks();
            
            // Wait for video to be ready
            videoElement.onloadedmetadata = () => {
                videoElement.play()
                    .then(() => {
                        if (onCameraReady) onCameraReady();
                    })
                    .catch(error => {
                        if (onError) onError(error);
                    });
            };
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
            if (onError) onError(error);
        });
}

/**
 * Capture an image from the camera
 * @param {string} videoElementId - ID of the video element
 * @param {string} canvasElementId - ID of the canvas element
 * @return {string} The captured image as a data URL
 */
function captureImage(videoElementId, canvasElementId) {
    const videoElement = document.getElementById(videoElementId);
    const canvasElement = document.getElementById(canvasElementId);
    
    if (!videoElement || !canvasElement) {
        throw new Error('Video or canvas element not found');
    }
    
    // Set canvas dimensions to match video
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    
    // Draw video frame to canvas
    const context = canvasElement.getContext('2d');
    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    
    // Get image data URL
    const imageDataUrl = canvasElement.toDataURL('image/png');
    
    // Convert to blob for later use if needed
    canvasElement.toBlob(blob => {
        currentImageBlob = blob;
    }, 'image/png');
    
    return imageDataUrl;
}

/**
 * Stop the camera stream
 */
function stopCamera() {
    if (videoTracks && videoTracks.length > 0) {
        videoTracks.forEach(track => track.stop());
    }
    stream = null;
    videoTracks = [];
}

/**
 * Switch between front and back cameras
 * @param {string} videoElementId - ID of the video element
 * @param {function} onCameraReady - Callback when camera is ready
 * @param {function} onError - Callback when an error occurs
 */
function switchCamera(videoElementId, onCameraReady, onError) {
    const videoElement = document.getElementById(videoElementId);
    
    if (!videoElement) {
        if (onError) onError(new Error('Video element not found'));
        return;
    }
    
    // Stop current stream
    stopCamera();
    
    // Get current facing mode
    const currentFacingMode = videoTracks.length > 0 && 
                            videoTracks[0].getSettings().facingMode;
    
    // Switch to the other facing mode
    const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    
    // Request camera with new facing mode
    navigator.mediaDevices.getUserMedia({ video: { facingMode: newFacingMode } })
        .then(mediaStream => {
            stream = mediaStream;
            videoElement.srcObject = mediaStream;
            videoTracks = mediaStream.getVideoTracks();
            
            // Wait for video to be ready
            videoElement.onloadedmetadata = () => {
                videoElement.play()
                    .then(() => {
                        if (onCameraReady) onCameraReady();
                    })
                    .catch(error => {
                        if (onError) onError(error);
                    });
            };
        })
        .catch(error => {
            console.error('Error switching camera:', error);
            if (onError) onError(error);
        });
}

/**
 * Process an image from a file input
 * @param {File} file - The image file
 * @param {function} onProcessed - Callback with the processed image data URL
 * @param {function} onError - Callback when an error occurs
 */
function processImageFile(file, onProcessed, onError) {
    if (!file || !file.type.startsWith('image/')) {
        if (onError) onError(new Error('Invalid file format. Please select an image file.'));
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (event) => {
        const img = new Image();
        
        img.onload = () => {
            // Create canvas to process image if needed
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Draw image to canvas
            ctx.drawImage(img, 0, 0);
            
            // Get processed image as data URL
            const processedImageDataUrl = canvas.toDataURL('image/png');
            
            // Convert to blob for later use if needed
            canvas.toBlob(blob => {
                currentImageBlob = blob;
            }, 'image/png');
            
            if (onProcessed) onProcessed(processedImageDataUrl);
        };
        
        img.onerror = () => {
            if (onError) onError(new Error('Error loading image'));
        };
        
        img.src = event.target.result;
    };
    
    reader.onerror = () => {
        if (onError) onError(new Error('Error reading file'));
    };
    
    reader.readAsDataURL(file);
}

/**
 * Get the current captured image as a blob
 * @return {Blob} The image blob
 */
function getCurrentImageBlob() {
    return currentImageBlob;
}

// Export functions for use in other modules
window.cameraUtils = {
    initCamera,
    captureImage,
    stopCamera,
    switchCamera,
    processImageFile,
    getCurrentImageBlob
};
