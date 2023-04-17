const webcamsTreatment = function(webcams){
    webcams.forEach(webcam => {
        if (webcam.player.live.available) {
          webcam.updated = "Live"
          webcam.url = webcam.player.live.embed
        } else if (webcam.player.day.available) {
          webcam.updated = "Day"
          webcam.url = webcam.player.day.embed
        // } else if (webcam.player.week.available) {
          // webcam.updated = "Week"
          // webcam.url = webcam.player.week.embed
        } else if (webcam.player.month.available) {
          webcam.updated = "Month"
          webcam.url = webcam.player.month.embed
        } else if (webcam.player.year.available) {
          webcam.updated = "Year"
          webcam.url = webcam.player.year.embed
        } else {
          webcam.updated = "No data available"
          webcam.url = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
    });
        return webcams
}

const order = ['Live', 'Day', 'Month', 'Year'];
const orderWebcams = function(webcams){
    // sort webcams by updated
    webcams.sort(function(a, b){
        if (order.indexOf(a.updated) < order.indexOf(b.updated)) {
            return -1;
        }
        if (order.indexOf(a.updated) > order.indexOf(b.updated)) {
            return 1;
        }
        return 0;
    })
    return webcams
}

export {webcamsTreatment, orderWebcams}