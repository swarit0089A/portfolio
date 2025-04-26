

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');
    
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      
      if (sidebar.classList.contains('active')) {
        ham.style.display = 'none';
        cross.style.display = 'block';
      } else {
        ham.style.display = 'block';
        cross.style.display = 'none';
      }
    });
  });