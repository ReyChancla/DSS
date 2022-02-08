/* Esta es la parte de la cabezera */
function obtenerValoresInput() {
    
    const ancho = Number(document.getElementById("ancho").value);
    const largo = Number(document.getElementById("largo").value);
    const posesAncho = Number(document.getElementById("posesAncho").value);
    const posesLargo = Number(document.getElementById("posesLargo").value);
    const pA = ancho*posesAncho;
    const pL = largo*posesLargo;
    return {
        ancho,
        largo,
        posesAncho,
        posesLargo,
        pA,
        pL,
    }
}

function calcularsize() {
    const {pA,pL} = obtenerValoresInput();

    document.getElementById("resultadoSizeBoard").innerHTML = pA + ("x") + pL;

/* Esta es una lista de Maximos y minimos de maquina, para comprobar
del listado por donde puede entrar y por donde no la plancha inicial */
    const listadoPlanchas = [
        {
            nombre: "DongFangMaquina",
            dimiensionesMinimo: {
                ancho: 605,
                largo: 600
            },
            dimiensionesMaximo: {
                ancho: 1540,
                largo: 2780
            }
        },
        {
            nombre: "BobstMaquina",
            dimiensionesMinimo: {
                ancho: 400,
                largo: 400
            },
            dimiensionesMaximo: {
                ancho: 1028,
                largo: 1550
            }
        },
        {
            nombre: "CurioniMaquina",
            dimiensionesMinimo: {
                ancho: 300,
                largo: 1
            },
            dimiensionesMaximo: {
                ancho: 2000,
                largo: 3000
            }
        },
        {
            nombre: "MartinMaquina",
            dimiensionesMinimo: {
                ancho: 300,
                largo: 800
            },
            dimiensionesMaximo: {
                ancho: 1000,
                largo: 2400
            }
        },
        {
            nombre: "OnduladoraMaquina",
            dimiensionesMinimo: {
                ancho: 605,
                largo: 600
            },
            dimiensionesMaximo: {
                ancho: 140,
                largo: 278
            }
        },
    ];

    listadoPlanchas.forEach( plancha => {
        /* const tornillo = plancha.nombre; */
        /* const anchoMinimo = plancha.dimiensionesMinimo.ancho;
        const anchoMaximo = plancha.dimiensionesMaximo.ancho;
        const altoMinimo = plancha.dimiensionesMinimo.largo;
        const altoMaximo = plancha.dimiensionesMaximo.largo; 
        
        Esto de abajo es igual que lo de arriba. Jose Antonio es un listillo.
        */
        const {nombre:tornillo, dimiensionesMaximo:{ancho:anchoMaximo, largo:altoMaximo}, dimiensionesMinimo:{ancho:anchoMinimo, largo:altoMinimo}} = plancha;
        let anchovalido = false;
        let altovalido = false;

        if (pA >= anchoMinimo && pA <= anchoMaximo) {
            anchovalido = true;
        }
        if (pL >= altoMinimo && pL <= altoMaximo) {
            altovalido = true;    
        }
        
        if (anchovalido && altovalido) {
            document.getElementById(tornillo).style.background = "green";          
        } else {
            document.getElementById(tornillo).style.background = "red";  
        }
    } ) 
}

function calcularDatosDf() {
    const {pA} = obtenerValoresInput();
    const AcopleDF = parseInt(document.getElementById("acoplesBobinaDf").value);
    console.log(pA);

    if (pA < 1600) {
        document.getElementById("DatosDF").innerHTML = ("La bobina acopla en 1600 y es de:") + (pA*AcopleDF);
    } else if (pA < 2000) {
        document.getElementById("DatosDF").innerHTML = ("La bobina acopla en 2000 y es de:") + (pA*AcopleDF);
    } else if (pA < 2500) {
        document.getElementById("DatosDF").innerHTML = ("La bobina acopla en 2500 y es de:") + (pA*AcopleDF);
    } else{
        document.getElementById("DatosDF").innerHTML = ("La plancha sobrepasa la medida de la bobina máxima, por : ") + (pA-2500)
    }
}

/* Esta es la parte de la Martin */

function obtenerValoresMartin() {
    const anchoMartin = parseInt(document.getElementById("anchoMartin").value);
    const largoMartin = parseInt(document.getElementById("largoMartin").value);
    const altoMartin = parseInt(document.getElementById("altoMartin").value);
    const trimMartin = parseInt(document.getElementById("trimMartin").value);
    const canalesMartin = document.getElementById("canalesMartin").value;
    /* const canalE = document.getElementById("canalE").value;
    const canalB = document.getElementById("canalB").value;
    const canalC = document.getElementById("canalC").value;
    const canalEB = document.getElementById("canalEB").value;
    const canalBC = document.getElementById("canalBC").value;
    const canalAC = document.getElementById("canalAC").value; */
    return {
        anchoMartin,
        largoMartin,
        altoMartin,
        trimMartin,
        canalesMartin
        /* canalE,
        canalB,
        canalC,
        canalEB,
        canalBC,
        canalAC */
    };
};

const DatosCanalesMartin = [
    {
        nombre: "canalB",
        valoresDiferenciaMartin: {
            c1: 3,
            c2: 5,
            s: 30
        }
     },
     {
        nombre: "canalC",
        valoresDiferenciaMartin: {
            c1: 4,
            c2: 7,
            s: 30
        }
     },
     {
        nombre: "canalEB",
        valoresDiferenciaMartin: {
            c1: 5,
            c2: 10,
            s: 40
        }
    },
     {
        nombre: "canalBC",
        valoresDiferenciaMartin: {
            c1: 7,
            c2: 14,
            s: 40
        }
    },
    
];



/* Esta función calcula los tres lados de la B1 (largo, ancho y alto) */

function CalcularB1 (){
    const {anchoMartin, largoMartin, altoMartin, canalesMartin} = obtenerValoresMartin();
    const {nombre, valoresDiferenciaMartin:{c1, c2, s}} = DatosCanalesMartin();
    const largoHendidosB1 = largo + c1;
    const anchoHendidosB1 = ancho + c1;
    const altoHendidosB1 = alto + c1;
    const PestanaPegado = s;

    return {
        largoHendidosB1,
        anchoHendidosB1,
        altoHendidosB1,
        PestanaPegado
    }
}

/* DatosCanalesMartin.forEach( HendidosMartin => {
    const {anchoMartin, largoMartin, altoMartin, canalesMartin} = obtenerValoresMartin();
    const {nombre, valoresDiferenciaMartin:{c1, c2, s}} = HendidosMartin;

    const anchoMartinT = anchoMartin + 3;
    console.log(anchoMartinT);
}
); */

function calcularMartin() {
    const {anchoMartin, largoMartin, altoMartin, trimMartin, canalesMartin} = obtenerValoresMartin();
   /*  const {nombre, valoresDiferenciaMartin:{c1, c2, s}} = DatosCanalesMartin(); */
    
    if (anchoMartin < largoMartin) {
        alert("Has introducido una medida mal, revisalo.");
        
    } else {
        
        DatosCanalesMartin.forEach(CanalesB1 => {
            const {nombre, valoresDiferenciaMartin: {c1, c2, s}} = CanalesB1;
            const {canalesMartin} = obtenerValoresMartin();
        
            /* console.log(nombre)
            console.log(c1)
            console.log(c2)
            console.log(s) */
            if (nombre === canalesMartin) {
                const largoTotalMartinPlancha = (anchoMartin+c1)*2+ (largoMartin+c1)*3 + trimMartin+ s;
                const anchoTotalMartinPlancha = (altoMartin+c2) + (largoMartin+c1);
                console.log(largoTotalMartinPlancha);
                console.log(anchoTotalMartinPlancha);
                document.getElementById("DatosMartin").innerHTML = ("El tamaño de la plancha es: ") + anchoTotalMartinPlancha +( "x" ) + largoTotalMartinPlancha + (" mm");
            }
        });
    }

            
        
};

function verificarValorParametros (valor,minimo,maximo){
    if (valor >= minimo && valor <=maximo ) {
        return true;        
    };
    return false
    
}

/* console.log(DatosCanalesMartin); */

/* DatosCanalesMartin.forEach(CanalesB1 => {
    const {nombre, valoresDiferenciaMartin: {c1, c2, s}} = CanalesB1;
    const {canalesMartin} = obtenerValoresMartin();

    console.log(nombre)
    console.log(c1)
    console.log(c2)
    console.log(s)
    console.log(canalesMartin);
    if (nombre == canalesMartin) {
        console.log(c1);
        console.log(c2);
        console.log(s);
    }
}); */




/* 'use strict'

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
 */
