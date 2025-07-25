// JS file intentionally left blank after reset

    const techScroll = document.querySelector('.tech-scroll');
    let scrollSpeed = 1;

    function autoScroll() {
        techScroll.scrollLeft += scrollSpeed;
        if (techScroll.scrollLeft >= techScroll.scrollWidth - techScroll.clientWidth) {
            techScroll.scrollLeft = 0; // Loop back
        }
    }
    setInterval(autoScroll, 30); // Adjust speed