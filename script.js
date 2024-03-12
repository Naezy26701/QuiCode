function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  document.querySelector(".nav-part2 .link #home").addEventListener("click", () => {
    scroll.scrollTo(".page2");
  });
  document.querySelector(".nav-part2 .link #about").addEventListener("click", () => {
    scroll.scrollTo(".page3");
  });
  document.querySelector(".nav-part2 .link #contact").addEventListener("click", () => {
    scroll.scrollTo(".page5");
  });
  document.querySelector(".page5 .back").addEventListener("click", () => {
    scroll.scrollTo(".page1");
  });
}
loco();
  //mouse cursor animations
  Shery.mouseFollower();
  //logo animation
  Shery.makeMagnet(".magnet");
  
  
  document.querySelector(".heading button")
  .addEventListener("mouseover", function(){
      gsap.to(".page2 video", {
          opacity: 1,
          duration: 1,
          ease: Power4
      })
     var head = document.querySelector(".heading")
     head.style.color ="white"

     var nav = document.querySelector(".navbar")
     nav.style.boxShadow = "0px 15px 20px rgba(0,0,0,0.5)";
  })
  
  
  document.querySelector(".heading button")
  .addEventListener("mouseleave", function(){
      gsap.to(".page2 video", {
          opacity: 0,
          duration: 1,
          ease: Power4
      })
      var head = document.querySelector(".heading")
     head.style.color ="black"
  })


  //loadingAnimation
  var tl = gsap.timeline()
  
  tl.from(".loader h3",{
    x: 40,
    opacity: 0,
    stagger: 0.1
  })
  
  tl.to(".loader h3",{
    opacity:0,
    x: -10,
    duration: 2,
    stagger: 0.1
  })
  
  tl.to(".loader",{
    opacity: 0
  })
  
  tl.from(".page2 .heading > #head1, #head2, #head3, button",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration: 0.8,
    delay: 0.2
  })
  
  tl.to(".loader",{
    display: "none"
  })
  
  tl.to(".page5 h3",{
    y: -30,
    repeat: -1,
    duration: 0.7,
    yoyo: true

})
  
  // navbarAnimation
  function navbarAnimation(){
      gsap.to(".nav-part1 h3",{
          transform:"translateY(-100%)",
          opacity: 0,
          scrollTrigger:{
              trigger: ".page1",
              scroller: ".main",
              start: "top 0",
              end: "top -5%",
              scrub: true
          }
      })
      
      gsap.to(".navbar .nav-part2",{
          transform:"translateY(-100%)",
          opacity: 0,
          scrollTrigger:{
              trigger: ".page1",
              scroller: ".main",
              start: "top 0",
              end: "top -5%",
              scrub: true
          }
      })
  }
  navbarAnimation()
  
//Testemonial Animations
let userTexts = document.getElementsByClassName("user-text")
let userPics = document.getElementsByClassName("user-pic")
  

function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic")
    }
    for(userText of userTexts){
        userText.classList.remove( "active-text")
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

