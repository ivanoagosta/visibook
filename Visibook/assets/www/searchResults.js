// Google maps script 
var createMap = function(search) {
 
	var geocoder = new google.maps.Geocoder();
     
    geocoder.geocode( {'address': search}, function(results,status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var options = {
                zoom: 14,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        
            var map = new google.maps.Map(document.getElementById('map'), options);
            var marker = new google.maps.Marker({position: results[0].geometry.location, map: map});
        
        } else {
            alert("Problem searching address: " + status);
        }
    });
    
}

function getPOI(search) {
    
    $.getJSON("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+search+"&sensor=true&language=it&output%20json&key=AIzaSyAOAjM3pXBnvPOwvmx4Djep4lj6Z-hPub0", 
    function(data) {
        $.each(data.items, function(i,item){
            $.each(item.items, function(j,field){
             $('#stage').html('<p> Name: ' + field.name + '</p>');
             $('#stage').append('<p>type : ' + field.type+ '</p>');
            })
        })     
    });
}

function init() {
  
  // Global search string
  var search = window.localStorage.getItem("search");
 
  if (search == null || search == '') {return;};
        
  createMap(search);
  
  getPOI(search);
  
  window.localStorage.removeItem("search"); 
      
}




