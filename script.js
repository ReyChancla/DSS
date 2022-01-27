'use strict'

const bloque = document.querySelectorAll('.Indice');
const Indice = document.querySelectorAll('.bloque');

bloque.forEach( (cadaBloque , i) => {
    bloque[i].addEventListener('click', () =>{
        bloque.forEach( ( cadaBloque , i)=>{
            bloque[i].classList.remove('activo')
            Indice[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
        Indice[i].classList.add('activo')
    })
});
