//const argv = require('./config/yargs').argv;
//const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log(argv.direccion);
//console.log(argv.direccion);

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }

}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//        .catch(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        let resp = await lugar.getLugarLatLng(direccion);

        let resp_clima = await clima.getClima(resp.lat, resp.lng)

        return `El clima de ${direccion} es de ${resp_clima}`;
    } catch (error) {
        return `No se pudo determinar el Clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);