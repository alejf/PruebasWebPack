import _ from 'lodash';
import './estilo.css';
import Imagen from './usuario.png';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

if('serviceWorker' in navigator){
   window.addEventListener('load', () => {
        navigator.serviceWorker.register('/.serviceworker.js').then(registro => {
            console.log('SW registrado', registro);
        }).catch(error => {
            console.log('SW no registrado', error);
        });
    
            
     });
}

function componentes(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', 'webpac'],' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    console.log(Datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.unquoted);
document.body.appendChild(componentes())