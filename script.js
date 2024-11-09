// script.js

document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speakers__card');
    const popover = document.querySelector('.popover');
    const closeButton = document.querySelector('.popover__close');
    const popoverContent = document.querySelector('.popover__content');
    
    speakerCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const speakerName = e.target.closest('.speakers__card').querySelector('.speakers__name').textContent;
        const speakerTitle = e.target.closest('.speakers__card').querySelector('.speakers__title').textContent;
  
        // Populate popover with speaker details
        const popoverTitle = popover.querySelector('.popover__title');
        const popoverBio = popover.querySelector('.popover__bio');
        
        popoverTitle.textContent = speakerName;
        popoverBio.textContent = `Position: ${speakerTitle} \nDetailed information about ${speakerName} goes here.`;
  
        // Show popover
        popover.setAttribute('aria-hidden', 'false');
        popover.classList.add('visible');
  
        // Push slider down
        document.querySelector('.speakers__slider').style.marginTop = '400px'; // Adjust as per your design
      });
    });
  
    closeButton.addEventListener('click', () => {
      // Close the popover and hide it
      popover.setAttribute('aria-hidden', 'true');
      popover.classList.remove('visible');
  
      // Reset the slider margin
      document.querySelector('.speakers__slider').style.marginTop = '0';
    });
  });
  