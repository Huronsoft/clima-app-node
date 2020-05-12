const axios = require('axios');

const getLugarLatLng = async(dire) => {

    const Direccion = encodeURI(dire);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${Direccion}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '1db7968b65msh81437d424a3e134p10dba5jsnc1f22cfd27ab' }
    });

    const resp = await instance.get();

    if (resp.data.Results.Length === 0) {
        throw new Error(`No hay resultados para ${dire}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}