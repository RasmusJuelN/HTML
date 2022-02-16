{
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}


{
    $(window).ready(function(){

        let mouseX = 0;
        let mouseY = 0;
        let xp = 0;
        let yp = 0;
      
        $(document).mousemove(function(e){
          $(".custom__cursor__inner").css({
            transform: 'translate(' + (e.clientX - 0) + 'px, ' + (e.clientY - 0) + 'px)'
          });
    
          mouseX = e.clientX - 10;
          mouseY = e.clientY - 10;
        });
      
        setInterval(function(){
          xp += ((mouseX - xp)/5);
          yp += ((mouseY - yp)/5);
          $(".custom__cursor__outer").css({transform: 'translateX('+ (xp - 6) +'px) translateY('+ (yp - 7) +'px)'} );
        }, 10);
    })

}

{
  jQuery(document).ready(function($) {
    {
        if(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) 
        {
        $('.custom-cursor').remove();
      }
    }
    });

}

