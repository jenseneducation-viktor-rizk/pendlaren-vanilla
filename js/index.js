// let resekey = "a467c024-e7c6-4821-bd29-c47689dd6a7b"
// api-nyckel-stolptidtabeller = 7c8fd7e3-9be1-49af-921f-ebd3ea3d61c8


window.onload=function (){
    let geoLocation = document.querySelector("#location");
    let stationBtn = document.querySelector("#station-button");
    let nearbyStns = document.querySelector("#nearby-stations");
    
    let baseUrlStns = "https://api.resrobot.se/v2/location.nearbystops?key=a467c024-e7c6-4821-bd29-c47689dd6a7b&format=json";
    let myLong = "";
    let myLat = "";

    getLocation();
    
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

    function getNearbyStations() {
        let urlStns = baseUrlStns + "&originCoordLong=" + myLong + "&originCoordLat=" + myLat;
        let data = fetch(urlStns)
        .then(res => res.json())

        return data;
    } 

    async function getStations() {
        try {
            let stations = await getNearbyStations()
            writeStations(stations.StopLocation)
        } catch (error) {
            console.error(error)
        }
    }

    function writeStations(stns) {
        for (let i = 0; i < stns.length; i++) {
            console.log(stns[i].name);
        }
    }


    stationBtn.addEventListener("click", function() {
        getStations();
    })
    
    

    
    
}