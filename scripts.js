
    "use strict";


    const isMobile = {
        Android:function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry:function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS:function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera:function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows:function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    
    if (isMobile.any()) {
        document.body.classList.add('_mobile');
        let menuArrows = document.querySelectorAll('.menu__arrow');
        if (menuArrows.length > 0) {
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    } else {
        
        document.body.classList.add('_pc');
    }



    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }



    const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });
    
        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
    
                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
    
                }
    
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        }
    }



    
    /////////////////////////////////////////header color////////////////////////////////////////////////////////////////////////////  
        
    var className = "inverted";
    var scrollTrigger = 60;
    
    window.onscroll = function() { 
      // We add pageYOffset for compatibility with IE.
      if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("header")[0].classList.add(className);
      } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
      }
    };
       
   /////////////////////////////////////////header color////////////////////////////////////////////////////////////////////////////     
        


/////////////////////////////////////////////////////scroll up//////////////////////////////////////////////////////////////////////////////////////

let body = document.body;
let lastscroll = 0;


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    } 
 
    if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastscroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
    lastscroll = currentScroll;



})




/////////////////////////////////////////////////////scroll up//////////////////////////////////////////////////////////////////////////////////////