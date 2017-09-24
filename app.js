 // Initialize Firebase
 var config = {
 	apiKey: "AIzaSyBSPVLSakdUQAhH_p00huTzfqD7z9I-Vis",
 	authDomain: "credentials-ca785.firebaseapp.com",
 	databaseURL: "https://credentials-ca785.firebaseio.com",
 	projectId: "credentials-ca785",
 	storageBucket: "credentials-ca785.appspot.com",
 	messagingSenderId: "792698712460"
 };
 firebase.initializeApp(config);

 var slider = new Slider('#rojoSlider', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#verdeSlider', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

var slider = new Slider('#azulSlider', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$(window).load(function(){
    setTimeout(function(){ $('#formSaludo').modal('show'); }, 10000);

});