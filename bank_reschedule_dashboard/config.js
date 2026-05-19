// Bubble API Configuration
const BUBBLE_CONFIG = {
    bearerToken: 'afec6282edc0708894476086a0ab859b',
    baseUrl: 'https://nexiplay-84024.bubbleapps.io'
};

// Helper function to create Bubble API headers
function getBubbleHeaders() {
    return {
        'Authorization': `Bearer ${BUBBLE_CONFIG.bearerToken}`,
        'Content-Type': 'application/json'
    };
}

// Helper function for Bubble API calls
async function callBubbleApi(endpoint) {
    const url = `${BUBBLE_CONFIG.baseUrl}${endpoint}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: getBubbleHeaders()
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
}
