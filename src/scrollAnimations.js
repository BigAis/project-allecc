// Function to check if an element is in viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Function to add appear class to elements when they scroll into view
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('appear');
      }
    });
  };
  
  // Initialize scroll animations
  export const initScrollAnimations = () => {
    // Initial check on load
    handleScrollAnimation();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
    
    // Listen for resize events
    window.addEventListener('resize', handleScrollAnimation, { passive: true });
    
    return () => {
      // Cleanup function
      window.removeEventListener('scroll', handleScrollAnimation);
      window.removeEventListener('resize', handleScrollAnimation);
    };
  };