const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       console.log(entry)
       if (entry.isIntersecting) {
           entry.target.classList.add('show-epik');
           
       }
       else{
           
           entry.target.classList.remove('show-epik');
       }
  
  
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden-epik');
  
  hiddenElements.forEach((el) => observer.observe(el));
  