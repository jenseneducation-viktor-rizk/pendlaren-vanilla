// api-nyckel-reseplaneraren = a467c024-e7c6-4821-bd29-c47689dd6a7b
// api-nyckel-stolptidtabeller = 7c8fd7e3-9be1-49af-921f-ebd3ea3d61c8


window.onload=function (){
    let geoLocation = document.querySelector("#location");
    let geoBtn = document.querySelector("#geoButton");
    let myLong = "";
    let myLat = "";
    
    function getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
           });
    }

    async function getLocation () {
       try {
            let position = await getCurrentPosition();
            writeLocation(position)
       } catch (error) {
            getLocation.innerHTML = error;
       }
    };

    function writeLocation(position) {
        myLong = position.coords.longitude;
        myLat = position.coords.latitude;

        geoLocation.innerHTML = "Latitude: " + myLong + "<br>Longitude: " + myLat
    };

    geoBtn.addEventListener("click", function(){
        getLocation();
    });
    
    

    
    
}