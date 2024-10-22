// Simulating a vintage booting/loading screen
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-window').classList.remove('hidden');
    }, 3000); // 3-second boot-up delay
});

// Command prompt functionality
const cmdInput = document.getElementById('cmd-input');
const cmdOutput = document.getElementById('cmd-output');

cmdInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const command = cmdInput.value.toLowerCase();
        executeCommand(command);
        cmdInput.value = ''; // Clear the input
    }
});

function executeCommand(command) {
    switch (command) {
        case 'about':
            navigateTo('about');
            break;
        case 'journey':
            navigateTo('journey');
            break;
        case 'achievements':
            navigateTo('achievements');
            break;
        case 'resume':
            navigateTo('resume');
            break;
        default:
            cmdOutput.innerHTML += `<p>Unknown command: ${command}</p>`;
    }
}

function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden'); // Hide all sections
    });
    document.getElementById(sectionId).classList.remove('hidden'); // Show selected section
    cmdOutput.innerHTML += `<p>Loading ${sectionId}...</p>`;
}

// Close button functionality (optional)
document.querySelector('.close-btn').onclick = function() {
    alert("Closing the portfolio is disabled for now.");
};
