document.getElementById('trackingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const appId = document.getElementById('appId').value;
    const statusDisplay = document.getElementById('statusDisplay');

    // Simulating an API call
    checkStatus(appId)
        .then(status => {
            statusDisplay.innerText = `Status for Application ID ${appId}: ${status}`;
        })
        .catch(error => {
            statusDisplay.innerText = `Error: ${error}`;
        });
});

// Simulated API function
function checkStatus(appId) {
    return new Promise((resolve, reject) => {
        // Simulating a delay as if it's making a network request
        setTimeout(() => {
            // For demo purposes, we simulate different statuses based on appId
            const statuses = {
                '123': 'Pending',
                '456': 'Approved',
                '789': 'Rejected'
            };
            if (statuses[appId]) {
                resolve(statuses[appId]);
            } else {
                reject('Application ID not found.');
            }
        }, 1000);
    });
}
