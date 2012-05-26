//Credit to Hutley-HelloPhoneGap https:github.com/hutley/HelloPhoneGap

var pictureSource; // picture source
var destinationType; // sets the format of returned value


function onBodyLoad()
{
    document.addEventListener("deviceready",onDeviceReady,false);
}

/* When this function is called, PhoneGap has been initialized and is ready to roll */
function onDeviceReady()
{
    phoneGapReady.innerHTML = "";
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    
}

// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {

    // Get image handle
    var myImage = document.getElementById('myImage');
    
    // Unhide image elements
    myImage.style.display = 'block';
    
    // Show the captured photo
    myImage.src = "data:image/jpeg;base64," + imageData;
    
}

// Called when a photo is successfully retrieved
function onPhotoURISuccess(imageURI) {
    
    // Get image handle
    var lgImage = document.getElementById('lgImage');
    
    // Unhide image elements
    lgImage.style.display = 'block';
    
    // Show the captured photo
    lgImage.src = imageURI;
}

// A button will call this function
function capturePhoto() {
    
    // Take picture using device camera and retrieve image as base64-encoded string
     {
       navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI, encodingType:
Camera.EncodingType.JPEG, targetWidth: 2048, targetHeight: 2048 } );       
}
        

// A button will call this function
function getPhoto(source) {
    
     {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
destinationType: Camera.DestinationType.FILE_URI,
sourceType:Camera.PictureSourceType.PHOTOLIBRARY}); }

function onFail(message) {
    
    alert('Failed: ' + message);
}