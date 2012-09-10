// Google maps script
var createMap = function() {
 
	var address  = window.localStorage.getItem("search");
    var geocoder = new google.maps.Geocoder();
    
    geocoder.geocode( {'address': address}, function(results,status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var options = {
                zoom: 12,
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



