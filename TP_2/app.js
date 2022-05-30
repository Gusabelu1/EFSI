var input = document.getElementById("crearNota");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(input.value);
        crearNota(input.value);
        event.currentTarget.value = "";
    }
}); 

var notas = [];
var notasBorradas = [];
var cont = 0;

function borrarNotas() {
    const element = document.getElementsByClassName("notaDiv");
    for(var i = element.length - 1; 0 <= i; i--) {
        if(element[i] && element[i].parentElement) {
            element[i].parentElement.removeChild(element[i]);
        }
    }
}

function cargarNotas() {
    borrarNotas();
    if (notas.length > 0) {
        for (let i = 0; i < notas.length; i++) {
            if (notasBorradas.includes(i)) {
                console.log("Esta nota fue borrada");
                return i++;
            } else {
                let num = notas[i].id;

                var notaDiv = document.createElement("div");
                notaDiv.setAttribute("class", "notaDiv border-bottom");
                notaDiv.setAttribute("id", num);

                var notaInput = document.createElement("input");
                notaInput.setAttribute("type", "checkbox");
                notaInput.setAttribute("class", "notaInput");
                notaInput.setAttribute("id", "nota_" + num);
                notaInput.setAttribute("onclick", "fechaTerminado(this);")
                
                var notaLabel = document.createElement("label");
                notaLabel.setAttribute("for", "nota_" + num);
                notaLabel.setAttribute("class", "notaLabel");
                notaLabel.setAttribute("id", "nota_" + num);
                notaLabel.innerHTML = notas[i].nota;

                var fechaLabel = document.createElement("span");
                fechaLabel.setAttribute("class", "fechaLabel");
                fechaLabel.innerHTML = "Se creó: " + notas[i].fechaCreacion;

                var notaBorrar = document.createElement("i");
                notaBorrar.setAttribute("class", "fa-solid fa-trash-xmark borrar");
                notaBorrar.setAttribute("id", num);
                notaBorrar.setAttribute("onclick", "borrarNota(this.id);");

                notaDiv.appendChild(notaInput);
                notaDiv.appendChild(notaLabel);
                notaDiv.appendChild(notaBorrar);
                notaDiv.appendChild(fechaLabel);
                document.getElementById("card").appendChild(notaDiv);
            }
        }
    } else {
        console.info("No hay ninguna nota.");
    }
}

function crearNota(nota) {
    if (nota === '') {
        alert("No puedes crear una nota vacía.");
    } else {
        cont++;
        notas.push( 
            {
                id: cont,
                nota: nota,
                fechaCreacion: new Date().toLocaleString().replace(',',''),
                fechaTerminado: null
            }
        )
        console.log(notas);

        cargarNotas();
    }
}

function borrarNota(idNota) {
    let found = notas.find(x => x.id === parseInt(idNota));

    if(found) {
        notas = notas.filter(object => {
            return object.id !== parseInt(idNota);
        });
        notasBorradas.push(idNota);
        cargarNotas();
    } else {
        console.error("No existe esa nota.");
    }
}

function fechaTerminado(nota) {
    let element = document.getElementById(nota.id);
    let result = obtenerIdNotas(nota);

    if (element.checked) {
        let fecha = new Date().toLocaleString().replace(',','');

        notas[result].fechaTerminado = fecha;

    } else {
        notas[result].fechaTerminado = null;
    }
}

function verNotas() {
    console.log(notas);
}

function obtenerIdNotas(nota) {
    let result;

    if (nota.id.length <= 6) {
        result = nota.id.substr(nota.id.length-1, 1);
    } else if (nota.id.length <= 7) {
        result = nota.id.substr(nota.id.length-2, 2);
    } else if (nota.id.length <= 8) {
        result = nota.id.substr(nota.id.length-3, 3);
    } else {
        result = nota.id.substr(nota.id.length-4, 4);
    }

    return result - 1;
}