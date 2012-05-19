function onBodyLoad()
                {
                    document.addEventListener("deviceready",onDeviceReady,false);
                }
                
                /* Phonegap ready */
                function onDeviceReady()
                {
                    phoneGapReady.innerHTML = "PhoneGap is Ready";
                    
                }
                
                function getLocation() {
                    try {
                        navigator.geolocation.getCurrentPosition(onSuccess, onError);
                    }
                    catch (err)
                    {
                        alert(err);
                    }
                }
                
                
                function onSuccess(position) {
                    var element = document.getElementById('location');
                    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                    'Longitude: ' + position.coords.longitude + '<br />' +
                    'Altitude: ' + position.coords.altitude + '<br />' +
                    'Accuracy: ' + position.coords.accuracy + '<br />' +
                    'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                    'Heading: ' + position.coords.heading + '<br />' +
                    'Speed: ' + position.coords.speed + '<br />' +
                    'Timestamp: ' + new Date(position.timestamp) + '<br />';
                }
                
                //gives an Error
                function onError(error) {
                    alert('code: ' + error.code + '\n' +
                          'message: ' + error.message + '\n');
                }

                var watchID;
                var updates = 0;
                function followMe() {
                    // Update every few seconds
                    var options = { frequency: 1000 };
                    watchID = navigator.geolocation.watchPosition(onWatchSuccess, onError, options);
                }
                
                
                function onWatchSuccess(position) {
                    updates++;
                    
                    var element = document.getElementById('watchResult');
                    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                    'Longitude: ' + position.coords.longitude + '<br /> updates: '+ updates +
                    '<hr />';
                }

               /*  Stop Following Location */
                function noFollow() {
                    if (watchID != null) {
                        navigator.location.clearWatch(watchID);
                        watchID = null;
                        updates = 0;
                    }
                }