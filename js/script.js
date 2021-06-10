/*============================================================

    Source Code From Prakash Shahi @ codingnepalweb.com
    3 Tutorials: Sticky Header, Toggle Menu, Scroll-Up Button
    Source: https://www.youtube.com/watch?v=tcskp-ncN0I

==============================================================*/

$(document).ready(function() {

  // (1) Sticky Navbar Script
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // (2) "Slide Up" Button Script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
  });

  // (3) Toggle Menu Navbar Script From Prakash Shahi @ codingnepalweb.com
  $('.hamburger-menu').click(function(){
      $('.navbar .menu').toggleClass("active"); // bring menu into view
      $('.hamburger-menu i').toggleClass("active"); // change hamburger menu icon to an "x"
  });


});



/*===============================================================

    PHOTO GALLERY
    Reconfigured Code From Class, Week 10
    (International Space Station Exercise)

=================================================================*/

let htmlCode = "";


// Attach JPEGS to htmlCode variable
for (let i = 1; i <= 24; i++){
  htmlCode += "<figure>";
  htmlCode += "<img alt='Pliocene Shark Fossil of the Pico Formation' src='images/LACMIP_42879-" + i + ".jpg' />";
//  htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
  htmlCode += "</figure>";
}

// Add htmlCode variable into the page
document.getElementById("gallery").innerHTML = htmlCode;



/*===================================================

    Add YEAR to the Footer
    Source Code from StackOverflow: https://stackoverflow.com/a/28627098

=====================================================*/
document.getElementById("year").innerHTML = new Date().getFullYear();
