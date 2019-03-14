//google maps API functionality
function initMap() {
  var uluru = {lat: 33.296634, lng: -86.843608};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

//functin handling header fade
fadeHeader = () => {
	let scrollPosition = window.pageYOffset;
	let windowHeight = window.innerHeight;
	let subtrahend = (scrollPosition/windowHeight * 2);
	let elementToFade = document.querySelector('.fade');
	elementToFade.style.opacity = 1 - (subtrahend);
}

document.addEventListener('scroll', fadeHeader);

//function handling home button icon color change
hopsIcon = document.querySelector('.colorChange');

iconColorChange = (source) => {
	document.getElementById("homeIcon").src = source;
}

hopsIcon.addEventListener('mouseover', () => {iconColorChange("images/iconImages/lightHopsIcon.png")});
hopsIcon.addEventListener('mouseout', () => {iconColorChange("images/iconImages/darkHopsIcon.png")});

// Function handling navigation scrolling
scrollToSection = (elmt) => {
	document.getElementById(elmt).scrollIntoView({behavior: 'smooth'});
}

document.getElementById('home').addEventListener('click', () => {scrollToSection('homeScroll')});
document.getElementById('about').addEventListener('click', () => {scrollToSection('aboutScroll')});
document.getElementById('beer').addEventListener('click', () => {scrollToSection('beerScroll')});
document.getElementById('visit').addEventListener('click', () => {scrollToSection('visitScroll')});
document.getElementById('contact').addEventListener('click', () => {scrollToSection('contactScroll')});

// Function handling social media link hover effects
const facebook = document.querySelector('.facebook');
const twitter = document.querySelector('.twitter');
const instagram = document.querySelector('.instagram');

changeImageSource = (elmt, source) => document.getElementById(elmt).src = source;

facebook.addEventListener('mouseover',() => {changeImageSource('facebook', 'images/iconImages/facebookHov.png')});
facebook.addEventListener('mouseout', () => {changeImageSource('facebook', 'images/iconImages/facebook.png')});
twitter.addEventListener('mouseover', () => {changeImageSource('twitter', 'images/iconImages/twitterHov.png')});
twitter.addEventListener('mouseout', () => {changeImageSource('twitter', 'images/iconImages/twitter.png')});
instagram.addEventListener('mouseover', () => {changeImageSource('instagram', 'images/iconImages/instagramHov.png')});
instagram.addEventListener('mouseout', () => {changeImageSource('instagram', 'images/iconImages/instagram.png')});