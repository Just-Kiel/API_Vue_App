import axios from "axios"

const getWebcamData = async function(x, y, limit){
    const myToken = "cCzlu11lXZ8slp53bMbXvfv48AuOy8op";

    // let x = 48.85860507115709
    // let y = 2.352069309731294
    // let limit = 10

    let endpoint = 'https://api.windy.com/api/webcams/v2/list/';
    
    let url = endpoint + `orderby=popularity/nearby=${x},${y},10/limit=${limit}?show=webcams:player&key=${myToken}`;

    let config = {
        timeout: 6500
    }

    try {
        let response = await axios.get(url, config);
        return  response.data;
    } catch (error) {
        console.log('ERROR', error);
        return null;
    }
}

export {getWebcamData}