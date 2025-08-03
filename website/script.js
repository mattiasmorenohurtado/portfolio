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
            setTimeout(type, 100); // Adjust typing speed (100ms per character)
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
