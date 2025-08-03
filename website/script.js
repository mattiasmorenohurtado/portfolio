document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');

    // Add event listeners to each button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Button clicked: ${button.textContent.trim()}`); // Debugging log

            // Check if the button clicked is "About Me"
            if (button.textContent.trim() === 'About Me') {
                // Hide the picture container
                const pictureContainer = document.getElementById('picture-container');
                if (pictureContainer) {
                    pictureContainer.style.display = 'none';
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

                // Reset and start the typing animation
                startTypingAnimation();
            }
        });
    });
});

function startTypingAnimation() {
    const text = "Hello World! I'm Mattias"; 
    const typingElement = document.getElementById('typing-animation');
    
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
            setTimeout(showDescription, 500); // Wait 500ms before showing description
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
