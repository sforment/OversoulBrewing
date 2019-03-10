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

//function handling icon color change
iconColorChange = () => {
	document.getElementById("homeIcon").src="images/lightHopsIcon.png";
}
iconColorRevert = () => {
	document.getElementById("homeIcon").src="images/darkHopsIcon.png";
}

document.querySelector('.colorChange').addEventListener('mouseover', iconColorChange);
document.querySelector('.colorChange').addEventListener('mouseout', iconColorRevert);

//function that handles navigation scrolling
scrollToHome = () => {
	document.getElementById('homeScroll').scrollIntoView({behavior: 'smooth'});
}
scrollToAbout = () => {
	document.getElementById('aboutScroll').scrollIntoView({behavior: 'smooth'});
}
scrollToBeer = () => {
	document.getElementById('beerScroll').scrollIntoView({behavior: 'smooth'});
}
scrollToVisit = () => {
	document.getElementById('visitScroll').scrollIntoView({behavior: 'smooth'});
}
scrollToContact = () => {
	document.getElementById('contactScroll').scrollIntoView({behavior: 'smooth'});
}


document.getElementById('home').addEventListener('click', scrollToHome);
document.getElementById('about').addEventListener('click', scrollToAbout);
document.getElementById('beer').addEventListener('click', scrollToBeer);
document.getElementById('visit').addEventListener('click', scrollToVisit);
document.getElementById('contact').addEventListener('click', scrollToContact);

//Function handling social media link hover effects

facebookChange = () => {
	document.getElementById("facebook").src="images/facebookHov.png";
}
facebookRevert = () => {
	document.getElementById("facebook").src="images/facebook.png";
}
twitterChange = () => {
	document.getElementById("twitter").src="images/twitterHov.png";
}
twitterRevert = () => {
	document.getElementById("twitter").src="images/twitter.png";
}
instagramChange = () => {
	document.getElementById("instagram").src="images/instagramHov.png";
}
instagramRevert = () => {
	document.getElementById("instagram").src="images/instagram.png";
}

document.querySelector('.facebook').addEventListener('mouseover', facebookChange);
document.querySelector('.facebook').addEventListener('mouseout', facebookRevert);
document.querySelector('.twitter').addEventListener('mouseover', twitterChange);
document.querySelector('.twitter').addEventListener('mouseout', twitterRevert);
document.querySelector('.instagram').addEventListener('mouseover', instagramChange);
document.querySelector('.instagram').addEventListener('mouseout', instagramRevert);