/*====================================================

    jQuery Examples From YouTube Tutorials
    Source Code From Prakash Shahi @ codingnepalweb.com

======================================================*/

$(document).ready(function() {

  // Sticky Navbar Script
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  // Toggle Menu Navbar Script From Prakash Shahi @ codingnepalweb.com
  $('.hamburger-menu').click(function(){
      $('.navbar .menu').toggleClass("active"); // bring menu into view
      $('.hamburger-menu i').toggleClass("active"); // change hamburger menu icon to an "x"
  });


});



/*===================================================

    PHOTO GALLERY
    Code From Class, Week 10
    (International Space Station Exercise)

=====================================================*/

let htmlCode = "";


// Attach JPEGS to htmlCode variable

for (let i = 1; i <= 24; i++){
  htmlCode += "<figure>";
  htmlCode += "<img alt='Pliocene Shark Fossil of the Pico Formation' src='images/LACMIP_42879-" + i + ".jpg' />";
//  htmlCode += "<figcaption>" + captions[i] + "</figcaption>";
  htmlCode += "</figure>";
}

// Add variable to the page
document.getElementById("gallery").innerHTML = htmlCode;



/*===================================================

    Let's f*ckin go, JSON.

=====================================================*/
// var sharks;
//
// function preload() {
//     sharks = loadJSON("sharks.json");
// }
//
