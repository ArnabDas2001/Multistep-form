const progressIndicator = document.getElementById('progress-indicator');
const progressText = document.getElementById('progress-text');
const backButton = document.getElementById('back_button');
const nextButton = document.getElementById('next_button');
const backButton2 = document.getElementById('back_button2');
const nextButton2 = document.getElementById('next_button2');
const backButton3 = document.getElementById('back_button3');
const nextButton3 = document.getElementById('next_button3');
const submitButton = document.getElementById('submit_button');

let progress = 20;

function updateProgressIndicator() {
    progressIndicator.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
}

nextButton.addEventListener('click', () => {
    if (progress < 100) {
        progress += 20; // Increase the progress by 20% on each "Next" click
        updateProgressIndicator();
    }
});

backButton.addEventListener('click', () => {
    if (progress > 0) {
        progress -= 20; // Decrease the progress by 20% on each "Back" click
        updateProgressIndicator();
    }
});

nextButton2.addEventListener('click', () => {
    if (progress < 100) {
        progress += 20; 
        updateProgressIndicator();
    }
});

backButton2.addEventListener('click', () => {
    if (progress > 0) {
        progress -= 20; 
        updateProgressIndicator();
    }
});

nextButton3.addEventListener('click', () => {
    if (progress < 100) {
        progress += 20; 
        updateProgressIndicator();
    }
});

backButton3.addEventListener('click', () => {
    if (progress > 0) {
        progress -= 20; 
        updateProgressIndicator();
    }
}); 

submitButton.addEventListener('click', () => {
    if (progress > 0) {
        progress += 20; 
        updateProgressIndicator();
    }
});

// Initial setup
updateProgressIndicator();