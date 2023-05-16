import axios from "axios"

const getGeolocationData = async function(city){
    let endpoint = "https://api.api-ninjas.com/v1/";

    let url = endpoint + `city?name=${city}`;

    let config = {
        headers: {
            'X-Api-Key': 'nose66C/EJD9WRk/hMJUnQ==XNH9yXIBC0L5o1T7'
        },
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

export {getGeolocationData}