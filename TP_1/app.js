function checkInputs() {
    var inputs = document.getElementsByTagName("input");
    var validado = true;
    
    for (let i = 0; i < inputs.length; i++) {
        var values = parseInt(inputs[i].value);
        if (values >= 1 && values <= 10) {
            inputs[i].style.backgroundColor = 'green';
        } else {
            inputs[i].style.backgroundColor = 'red';
            validado = false;
        }
    }

    if (!validado) {
        alert("[ERROR] \nSe requiere que complete todas las notas \nO inserte un valor entre 0 y 10.");
    } else {
        console.log("Todo salio bien")
        muestraInputs();
    }
}

function muestraInputs () {
    var inputs = document.getElementsByTagName("input");
    var btn = document.getElementById("envio");
    var element = document.createElement("div");

    btn.disabled = true;
    for (let i = 0; i < inputs.length; i++) {
        var values = parseInt(inputs[i].value);
        var para = document.createElement("p");
        
        element.appendChild(para);
        para.appendChild(document.createTextNode("Nota de " + inputs[i].id + ": " + values));
        document.body.appendChild(element);
    }
}

function promediar () {
    var inputs = document.getElementsByTagName("input");
    var btn = document.getElementById("promedio");
    var element = document.createElement("div");
    var promedio = 0;

    btn.disabled = true;
    for (let i = 0; i < inputs.length; i++) {
        var values = parseInt(inputs[i].value);

        promedio += values;
    }

    promedio = promedio / inputs.length;

    element.appendChild (
        document.createElement("p")
            .appendChild (
                document.createTextNode("Promedio: " + promedio)
            )
    );

    if (promedio >= 6) {
        element.style.color = 'green';
    } else {
        element.style.color = 'red';
    }

    document.body.appendChild(element);
}

function mayorNumero () {
    var inputs = document.getElementsByTagName("input");
    var btn = document.getElementById("mayor");
    var element = document.createElement("div");
    var numMayor = 0;
    var matMayor;

    btn.disabled = true;
    for (let i = 0; i < inputs.length; i++) {
        var values = parseInt(inputs[i].value);

        if (values > numMayor) {
            matMayor = inputs[i].id;
        }
    }

    element.appendChild (
        document.createElement("p")
            .appendChild (
                document.createTextNode("Nota mayor: " + matMayor)
            )
    )
    element.style.color = 'blue';

    document.body.appendChild(element);
}