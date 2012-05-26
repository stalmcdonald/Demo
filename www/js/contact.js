

    var deviceInfo = function(){      
      document.getElementById("platform").innerHTML = device.platform;
      document.getElementById("version").innerHTML = device.version;
      document.getElementById("uuid").innerHTML = device.uuid;
    }
    
    var getLocation = function() {
      var suc = function(p){
		    alert(p.coords.latitude + " " + p.coords.longitude);
      };
      var fail = function(){};
      navigator.geolocation.getCurrentPosition(suc,fail);
    }
    
    var beep = function(){
	    navigator.notification.beep(2);
    }
	
  	var vibrate = function(){
  	  navigator.notification.vibrate(0);
  	}
	
  	var getContact = function(){
  	  var suc = function(c){ alert("Contact 4: " + c.contacts[3].name); };
  		var fail = function(){};
  		navigator.ContactManager.get(suc, fail);
  	}
  	
  	var watchAccel = function() {
  		var suc = function(a){
  			document.getElementById('x').innerHTML = roundNumber(a.x);
  			document.getElementById('y').innerHTML = roundNumber(a.y);
  			document.getElementById('z').innerHTML = roundNumber(a.z);
  		};
  		var fail = function(){};
  		var opt = {};
  		opt.frequency = 100;
  		timer = navigator.accelerometer.watchAcceleration(suc,fail,opt);
  	}
    	
    function roundNumber(num) {
      var dec = 3;
      var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
      return result;
    }
    
	var preventBehavior = function(e) { 
      e.preventDefault(); 
    };

    function show_pic()
    {
      navigator.camera.getPicture(dump_pic, fail, { quality: 50 }); 
    }

    function dump_pic(data)
    {
      var viewport = document.getElementById('viewport');
      console.log(data);
      viewport.style.display = "";
      viewport.style.position = "absolute";
      viewport.style.top = "10px";
      viewport.style.left = "10px";
      document.getElementById("test_img").src = "data:image/jpeg;base64," + data;
    }

    function close()
    {
      var viewport = document.getElementById('viewport');
      viewport.style.position = "relative";
      viewport.style.display = "none";
    }

    function fail(fail)
    {
      alert(fail);
    }

	function init(){
		document.addEventListener("touchmove", preventBehavior, false);
		setTimeout(deviceInfo, 1);
	}
		

