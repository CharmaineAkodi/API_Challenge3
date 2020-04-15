//Mapbox API token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Frb2RpIiwiYSI6ImNrOHI4NTZjaDAwbzQzZXFiczAwc3drNW0ifQ.DLVOBQ6IOwhsOQwtd9qUlA';

//Initiate map
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11', //verplicht om aan te geven
	center: [4.319438, 52.085480],
  	zoom: 17,
  	pitch: 50, // pitch in degrees
	bearing: -85, // bearing in degrees
});

// //Zoekbalk -- niet meer gebruikt
// var geocoder = new MapboxGeocoder({ // Initialize the geocoder
//   accessToken: mapboxgl.accessToken, // Set the access token
//   mapboxgl: mapboxgl, // Set the mapbox-gl instance
//   marker: false, // Do not use the default marker style
//   placeholder: 'Search for places in the Netherlands', // Placeholder text for the search bar
// 	});

// // Add the geocoder to the map
// map.addControl(geocoder);

//openWeatherMap API token
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = '191563e5617acb679b6fed66106e9cd4';
var city = 'denhaag'








