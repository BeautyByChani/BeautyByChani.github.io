// Encoded values (double-encoded for extra protection)
const contactData = {
    email: "WTJoaGJtbG9ZVzFpZFhKblpYSkFaMjFoYVd3dVkyOXQ=",    
    phone: "TURjMU9EWWdNemMxT1RRNA==",                        
    whatsapp: "TURjMU9EWWdNemMxT1RRNA=="                      
};

// Decode function that handles double encoding
const decodeProtectedData = (str) => {
    try {
        return atob(atob(str));
    } catch (error) {
        return 'Error decoding data';
    }
};

// Initialize contact information with delay and additional protection
const initializeContactInfo = () => {
    // Random delay between 800ms and 1200ms to make scraping harder
    const randomDelay = 1000 + Math.floor(Math.random() * 400);
    
    setTimeout(() => {
        try {
            // Email setup
            const decodedEmail = decodeProtectedData(contactData.email);
            const emailElement = document.querySelector("[data-email]");
            if (emailElement) {
                emailElement.textContent = decodedEmail;
            }
            
            const emailLink = document.querySelector(".email");
            if (emailLink) {
                emailLink.href = `mailto:${decodedEmail}`;
                emailLink.setAttribute("target", "_blank");
            }

            // Phone setup
            const decodedPhone = decodeProtectedData(contactData.phone);
            const phoneElement = document.querySelector("[data-phone]");
            if (phoneElement) {
                phoneElement.textContent = decodedPhone;
            }
            
            const phoneLink = document.querySelector(".phone");
            if (phoneLink) {
                phoneLink.href = `tel:${decodedPhone.replace(/\s/g, '')}`;
                phoneLink.setAttribute("target", "_blank");
            }

            // WhatsApp setup
            const decodedWhatsapp = decodeProtectedData(contactData.whatsapp);
            const whatsappElement = document.querySelector("[data-whatsapp]");
            if (whatsappElement) {
                whatsappElement.textContent = decodedWhatsapp;
            }
            
            const whatsappLink = document.querySelector(".whatsapp");
            if (whatsappLink) {
                whatsappLink.href = `https://wa.me/44${decodedWhatsapp.replace(/\s/g, '')}`;
                whatsappLink.setAttribute("target", "_blank");
            }
        } catch (error) {
            console.error('Error initializing contact info');
        }
    }, randomDelay);
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeContactInfo);
} else {
    initializeContactInfo();
}