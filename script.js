var ancho = document.getElementById("ancho").value,
    largo = document.getElementById("largo").value,
    alto = document.getElementById("alto").value;

function calcular() {
    let ancho = parseInt(document.getElementById("ancho").value),
        largo = parseInt(document.getElementById("largo").value),
        alto = parseInt(document.getElementById("alto").value),
        x = (ancho *2) +(largo *2),
        y = (alto) +(largo *2);
        
    var CanalE = document.getElementById("E"),
        CanalB = document.getElementById("B"),
        CanalC = document.getElementById("C"),
        CanalBC = document.getElementById("BC"),
        CanalEB = document.getElementById("EB"),
        Canales = document.getElementById("Canales").value;
    /*
    E = 2;
    B = 3;
    C = 4;
    BC = 6;
    EB = 5,
    */
    
    CanalesDos =parseInt(Canales);
       
        
    console.log(ancho);
    console.log(largo);
    console.log(alto);

    console.log(ancho +largo +alto);
    
    console.log(x);
    console.log(y);

    document.getElementById("Tamaño_de_plancha").innerHTML = x+("x")+y;

    console.log(CanalesDos);

    if (CanalesDos == 6) {
        alert("Cuidado la pestaña debe de ser de 40 cm");
    } else if (CanalesDos == 5) {
        alert("Cuidado la pestaña debe de ser de 40 cm");
    } else {
        console.log("Pestaña normal de 30 cm");
    }{
        
    }
  

}
