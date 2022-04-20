export default class MarkerManager{
    constructor(map){
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches){
        // console.log("time to update");
        benches.forEach(bench => {
            if(this.markers[bench.id] === undefined){
                this.markers[bench.id] = this.createMarkerFromBench(bench);
            }
        });
    }

    createMarkerFromBench(bench){
        const map = this.map
        this.markers[bench.id] = new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng},
            map
        })
    }
}