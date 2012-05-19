var watchID;
        var geo;    //geolocation object
        var map;    //google map object
        var mapMarker;  //google map marker object

        // position options
        var MAXIMUM_AGE = 200; // miliseconds
        var TIMEOUT = 300000;
        var HIGHACCURACY = true;
			
			//find coords
        function getGeoLocation() {
            try {
                if( !! navigator.geolocation ) return navigator.geolocation;
                else return undefined;
            } catch(e) {
                return undefined;
            }
        }
			//Display map & coords
        function show_map(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var latlng = new google.maps.LatLng(lat, lon);

            if(map) {
                map.panTo(latlng);
                mapMarker.setPosition(latlng);
            } else {
                var myOptions = {
                    zoom: 18,
                    center: latlng,

                   
                    // ROADMAP displays the default road map view
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                map.setTilt(0); //default view override

                mapMarker = new google.maps.Marker({
                    position: latlng,
                    title:"I see you! You are right here."
                });
                mapMarker.setMap(map);
            }
        }
		//Errors 
        function geo_error(error) {
            stopWatching();
            switch(error.code) {
                case error.TIMEOUT:
                    alert('Hmmm, this seems to be taking to long I quit.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('I can\'t seem to find you');
                    break;
                case error.PERMISSION_DENIED:
                    alert('You Deny Me? Feel my wrath! Burn! Just kidding.');
                    break;
                default:
                    alert('OMG there was an error! This like never happens to me, you must be special: ' + error.code);
            }
        }

        function stopWatching() {
            if(watchID) geo.clearWatch(watchID);
            watchID = null;
        }

        function startWatching() {
            watchID = geo.watchPosition(show_map, geo_error, {
                enableHighAccuracy: HIGHACCURACY,
                maximumAge: MAXIMUM_AGE,
                timeout: TIMEOUT
            });
        }

        window.onload = function() {
            if((geo = getGeoLocation())) {
                startWatching();
            } else {
                alert('Geolocation isn\'t receiving the support it requires it is now on strike!')
            }
        }
