/*
function take_pic(){
  var viewport = document.getElementById('viewport');
  viewport.style.display = "";
  navigator.camera.getPicture(dump_pic, fail, { quality: 50 }); 
}

function dump_pic(data){
  var viewport = document.getElementById('viewport');
  console.log(data);
  viewport.style.display = "block";
  viewport.style.position = "absolute";
  viewport.style.top = "10px";
  viewport.style.left = "10px";
  document.getElementById("test_img").src = "data:image/jpeg;base64," + data;
}
*/
function PictureSourceType() {};
PictureSourceType.PHOTO_LIBRARY = 0;
PictureSourceType.CAMERA = 1;
 
function getPicture(sourceType)
{
     var options = { quality: 10 };
     if (sourceType != undefined) {
          options["sourceType"] = sourceType;
     }
     // if no sourceType specified, the default is CAMERA 
     navigator.camera.getPicture(getPicture_Success, null, options);
};

 
function getPicture_Success(imageData)
{
         alert("getpic success");
        document.getElementById("test_img").src = "data:image/jpeg;base64," + imageData;
}