window.addEventListener('scroll', function() {
    var header = document.getElementById('site-header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) { 
      header.style.backgroundColor = 'rgba(0,0,0,0.65)'; 
    } else {
      header.style.backgroundColor = 'rgba(0,0,0,0)'; 
    }
  });