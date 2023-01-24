
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


  
    
    /////////////////////////////////////////header color ////////////////////////////////////////////////////////////////////////////  
        
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
        


/////////////////////////////////////////////////////header hide//////////////////////////////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////header hide/////////////////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////Reveal Elements On Scroll JavaScript Intersection Observer///////////////////////////////////////////////////////////////////////////////////

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
        }
    });
} 
 
let options = {threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.loading-lazy__li');


for (let elm of elements) {
    observer.observe(elm);
}
/////////////////////////////////////////////////////Reveal Elements On Scroll JavaScript Intersection Observer///////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////Lazy Loading Images with JavaScript Intersection Observer///////////////////////////////////////////////////////
const images = document.querySelectorAll(".imglazy");

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newURL = image.getAttribute('data-src');
    image.src = newURL;
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
//////////////////////////////////////Lazy Loading Images with JavaScript Intersection Observer///////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {

	const swiper = new Swiper('.swiper-carousel', {
		loop: true,
		slidesPerView: 1,
        speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-slider__navigation-next',
			prevEl: '.swiper-slider__navigation-prev'
		}
    
	})

	document.querySelector('video').playbackRate = 2

});


//////////////////////////////////////3d slider with swiper slider///////////////////////////////////////////////////////











//////////////////////////////////////3d slider with swiper slider///////////////////////////////////////////////////////
const tabs = document.querySelectorAll('.tabs_section-ul .tabs_section-li');
const divs = document.querySelectorAll('.tabs_section_buttom-content .tabs_section_buttom-box');

tabs.forEach((tab) => {
    //Add click for each li
    tab.addEventListener("click", function (e) {
        tabs.forEach((tab) => {
            //On click remove class Active from all Li
            tab.classList.remove("active");
        });
        //Add Class Active On the li 
        e.currentTarget.classList.add("active");
        divs.forEach((div) => {
            //Display None for all content Divs on click
            div.style.display = 'none';
            //Select the div the contain the class of data-content and make it display flex
            document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'flex';
        });
    });
})





const btnLeft = document.querySelector(".tab-slider-left-btn");
const btnRight = document.querySelector(".tab-slider-right-btn");
const tabMenu = document.querySelector(".tab-slider-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth ;
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    setTimeout (() => IconVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    setTimeout (() => IconVisibility(), 50);
});

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}

window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}


let activeDrag = false;
tabMenu.addEventListener("mousemove", (drag) => {
   if(!activeDrag) return;
   tabMenu.scrollLeft -= drag.movementX;  
   IconVisibility();
   tabMenu.classList.add("dragging");
});
document.addEventListener("mouseup", () => {   
    activeDrag = false;
    tabMenu.classList.remove("dragging");
});
tabMenu.addEventListener("mousedown", () => {   
    activeDrag = true;
});








const tabcontenttab = document.querySelectorAll(".tab-content-tab");
const tabsliderbtn = document.querySelectorAll(".tab-slider-btn");

const tab_Nav = function(tabBtnClick){


    tabsliderbtn.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });

    tabcontenttab.forEach((tab) => {
        tab.classList.remove("active");
    });




    tabsliderbtn[tabBtnClick].classList.add("active");
    tabcontenttab[tabBtnClick].classList.add("active");


}

    tabsliderbtn.forEach((tabBtn, i) => {
        tabBtn.addEventListener("click", () => {
            tab_Nav(i);
        });
    });


