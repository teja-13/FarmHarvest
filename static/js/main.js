/**
 * Main JavaScript file for AgroAssist application
 * Contains global functions and initialization
 */

// Initialize application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Initialize global event listeners
    initializeEventListeners();

    // Check for offline status
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
});

/**
 * Initialize global event listeners
 */
function initializeEventListeners() {
    // Example of a global event listener
    document.addEventListener('click', function(event) {
        // Close any open navbar dropdown when clicking outside
        if (!event.target.matches('.navbar-toggler') && 
            !event.target.closest('.navbar-collapse')) {
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
    
    // Implement PDF download functionality if jsPDF is available
    if (typeof jspdf !== 'undefined') {
        const pdfButtons = document.querySelectorAll('.pdf-download-btn');
        pdfButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const contentId = this.getAttribute('data-content');
                const contentElement = document.getElementById(contentId);
                if (contentElement) {
                    generatePDF(contentElement, this.getAttribute('data-filename') || 'download.pdf');
                }
            });
        });
    }
}

/**
 * Update UI based on online/offline status
 */
function updateOnlineStatus() {
    const offlineIndicator = document.createElement('div');
    
    if (navigator.onLine) {
        // Remove any existing offline indicators
        const existingIndicators = document.querySelectorAll('.offline-indicator');
        existingIndicators.forEach(indicator => indicator.remove());
    } else {
        // Check if indicator already exists
        if (!document.querySelector('.offline-indicator')) {
            offlineIndicator.className = 'offline-indicator alert alert-warning m-0';
            offlineIndicator.setAttribute('role', 'alert');
            offlineIndicator.innerHTML = '<i class="fas fa-wifi-slash me-2"></i> You are currently offline. All features will continue to work.';
            
            // Insert at the top of the body
            document.body.insertBefore(offlineIndicator, document.body.firstChild);
        }
    }
}

/**
 * Generate a PDF from content
 * @param {HTMLElement} content - The HTML content to convert to PDF
 * @param {string} filename - The filename for the PDF
 */
function generatePDF(content, filename) {
    if (!window.jspdf || !window.html2canvas) {
        console.error("PDF generation libraries not loaded");
        return;
    }
    
    const { jsPDF } = window.jspdf;
    
    // Create new jsPDF instance
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    // Use html2canvas to convert HTML to canvas
    html2canvas(content).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        // Add new pages if content is longer than one page
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        // Save the PDF
        doc.save(filename);
    });
}

/**
 * Shows a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success, danger, warning, info)
 * @param {number} duration - How long to show the notification in ms
 */
function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification-toast`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = message;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide and remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, duration);
}

/**
 * Format a date for display
 * @param {Date|string} date - The date to format 
 * @param {boolean} includeTime - Whether to include the time
 * @return {string} Formatted date string
 */
function formatDate(date, includeTime = false) {
    if (!date) return 'N/A';
    
    const d = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(d.getTime())) return 'Invalid Date';
    
    const options = {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
    };
    
    if (includeTime) {
        options.hour = '2-digit';
        options.minute = '2-digit';
    }
    
    return d.toLocaleDateString(undefined, options);
}

/**
 * Check if all required fields in a form are filled
 * @param {HTMLFormElement} form - The form to check
 * @return {boolean} Whether all required fields are filled
 */
function validateRequiredFields(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let valid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            valid = false;
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    return valid;
}
