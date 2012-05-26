function onBodyLoad()
            {
            
                //if phonegap, need to toggle these
                 if (typeof navigator.device == "undefined"){
                      document.addEventListener("deviceready", onDeviceReady, false);
                 } else {
                 onDeviceReady();
                 }

            }
            /* When this function is called, PhoneGap has been initialized and is ready to roll */
            function onDeviceReady()
            {
                    phoneGapReady.innerHTML = "";
                    
                }
                
                function checkConnection() {
                    var networkState = navigator.network.connection.type;
                    
                    var states = {};
                    states[Connection.UNKNOWN] = 'Unknown connection';
                    states[Connection.ETHERNET] = 'Ethernet connection';
                    states[Connection.WIFI] = 'WiFi connection';
                    states[Connection.CELL_2G] = 'Cell 2G connection';
                    states[Connection.CELL_3G] = 'Cell 3G connection';
                    states[Connection.CELL_4G] = 'Cell 4G connection';
                    states[Connection.NONE] = 'No network connection';
                    
                    alert('Connection type: ' + states[networkState]);
                }