// Flag to track if typing animation is running (global scope)
let isTypingAnimationRunning = false;

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');

    // Add event listeners to each button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${button.textContent.trim()}`); // Debugging log

            // About Me Button
            if (button.textContent.trim() === 'About Me') {
                // Hide the picture container
                const pictureContainer = document.getElementById('picture-container');
                if (pictureContainer) {
                    pictureContainer.style.display = 'none';
                }

                // Hide the Experience section
                const experienceSection = document.getElementById('experiences-sections');
                if (experienceSection) {
                    experienceSection.style.display = 'none';
                }

                // Show the About Me section
                const aboutMeSection = document.getElementById('about-me-section');
                if (aboutMeSection) {
                    aboutMeSection.style.display = 'block';
                }

                // Reset the description
                const descriptionElement = document.getElementById('about-description');
                if (descriptionElement) {
                    descriptionElement.style.opacity = '0';
                    descriptionElement.style.transform = 'translateY(20px)';
                }

                // Only start typing animation if it's not already running
                if (!isTypingAnimationRunning) {
                    startTypingAnimation();
                }
            }

            // Experience Button
            if (button.textContent.trim() === 'Experience') {
                // Hide the picture container
                const pictureContainer = document.getElementById('picture-container');
                if (pictureContainer) {
                    pictureContainer.style.display = 'none';
                }

                // Hide the About Me section
                const aboutMeSection = document.getElementById('about-me-section');
                if (aboutMeSection) {
                    aboutMeSection.style.display = 'none';
                }

                // Show the Experience section
                const experienceSection = document.getElementById('experiences-sections');
                if (experienceSection) {
                    experienceSection.style.display = 'block';
                }
            }
        });
    });
});

function startTypingAnimation() {
    const text = "Hello World! I'm Mattias"; 
    const typingElement = document.getElementById('typing-animation');
    
    // Set the flag to indicate animation is running
    isTypingAnimationRunning = true;
    
    // Reset the element
    typingElement.innerHTML = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            
            if (text.charAt(index) === '\n') {
                typingElement.innerHTML += '<br>';
            } else {
                typingElement.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(type, 50); // Adjust typing speed (50ms per character)
        } else {
            // After typing animation completes, show the description
            setTimeout(() => {
                showDescription();
                // Reset the flag when animation is complete
                isTypingAnimationRunning = false;
            }, 500); // Wait 500ms before showing description
        }
    }

    type(); // Start the typing animation
}

function showDescription() {
    const descriptionElement = document.getElementById('about-description');
    if (descriptionElement) {
        descriptionElement.style.opacity = '1';
        descriptionElement.style.transform = 'translateY(0)';
    }
}




const jobData = {
    hvac:{
        title:"Junior Web Developer & API Integrations Intern",
        dates:"July 2025 - August 2025",
        company:"HVAC365",
        description:"Developing web-based tools and automations for the HVAC industry, including serverless applications using Cloudflare Workers. Responsibilities include integrating third-party APIs, building backend logic for rebate calculators and sizing widgets, and enhancing workflows through webhooks and event-driven automation. Also involved in frontend development for internal tools and client-facing dashboards."
    },



     fiu:{
        title:"Cybersecurity Researcher",
        dates:"Summer 2023 & Summer 2024",
        company:"Florida International University - SeRLoP Research Lab",
        description:"At FIU’s SeRLoP research lab, I’ve conducted research on spam email detection using AI, collaborating with a team to analyze data and develop machine learning algorithms that improve filtering accuracy and reduce false positives. I also led a team of two interns in a separate project focused on facial detection, where we developed a program for binary-based face identification. This involved guiding data analysis, algorithm implementation, and ensuring the successful completion of the project—demonstrating both technical skill and leadership. "
        }

}














let popup, popupOverlay;

// Initialize popup elements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    popup = document.getElementById('popup');
    popupOverlay = document.getElementById('popup-overlay');
    
    console.log('Popup element:', popup);
    console.log('Popup overlay element:', popupOverlay);
});

function openPopup(button) {
    console.log('openPopup called');
    const jobType = button.getAttribute('data-job');
    const job = jobData[jobType];
    
    if (popup && popupOverlay && job) {
        // Update popup content dynamically
        document.querySelector('#popup h2').textContent = job.title;
        document.querySelector('#popup .job-dates').textContent = job.dates;
        document.querySelector('#popup .job-company').textContent = job.company;
        document.querySelector('#popup .job-description').textContent = job.description;
        
        // Show the popup
        popup.classList.add('open-popup');
        popupOverlay.classList.add('open');
        console.log('Popup opened for:', job.title);
    } else {
        console.error('Popup elements not found or job data missing');
    }
}

function closePopup(){
    console.log('closePopup called');
    if (popup && popupOverlay) {
        popup.classList.remove('open-popup');
        popupOverlay.classList.remove('open');
        console.log('Popup closed');
    }
}