function DOMLoaded() {
	document.addEventListener("deviceready", phonegapLoaded, false);
}

function phonegapLoaded() {

	}

function takePicture() {

	navigator.camera.getPicture(onSuccess, onFail, {quality: 50, destinationType: camera.DestinationType.FILE_URI});
}

function onSuccess(imageURI) {

	var image = document.getElementById('image');
	image.src = imageURI;

	image.style.display = 'block';
}

function onFail(message){

	alert('Failed because: ' + message);
}