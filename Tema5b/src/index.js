import _ from 'lodash';


function componentes(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', 'webpac'],' ');
    return elemento;
}


document.body.appendChild(componentes())