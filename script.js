document.querySelectorAll('.image-section').forEach(section => {
  section.addEventListener('mouseover', () => {
    document.querySelectorAll('.image-section').forEach(otherSection => {
      if (otherSection !== section) {
        otherSection.classList.add('darken');
      }
    });
  });

  section.addEventListener('mouseout', () => {
    document.querySelectorAll('.image-section').forEach(otherSection => {
      otherSection.classList.remove('darken');
    });
  });
});
