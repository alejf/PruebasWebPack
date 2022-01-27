import _ from 'lodash';
import './estilo.css';
import Imagen from './usuario.png';
import Datos from './datos.csv';

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


document.body.appendChild(componentes())