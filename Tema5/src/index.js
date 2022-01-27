import _ from 'lodash';
import './estilo.css';
import Imagen from './usuario.png';
import Datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';
import './estilo.scss';

function componentes(){
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola', 'webpac'],' ');
    elemento.classList.add('fondo');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    console.log(Datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.unquoted);
document.body.appendChild(componentes())
document.body.classList.add('fondo');