var input = document.getElementById("crearNota");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(input.value)
        crearNota(input.value);
    }
}); 

var i = 0;
function crearNota (nota) {
    if (nota === '') {
        alert("No puedes crear una nota vacía.");
    } else {
        i++;
        var notaDiv = document.createElement("div");
        notaDiv.setAttribute("class", "notaDiv");

        var notaInput = document.createElement("input");
        notaInput.setAttribute("type", "checkbox");
        notaInput.setAttribute("class", "notaInput")
        notaInput.setAttribute("id", "nota");
        
        var notaLabel = document.createElement("label");
        notaLabel.setAttribute("for", 'nota');
        notaLabel.setAttribute("class", 'notaLabel');
        notaLabel.setAttribute("id", 'nota')
        notaLabel.innerHTML = nota;

        notaDiv.appendChild(notaInput);
        notaDiv.appendChild(notaLabel);
        document.getElementById("card").appendChild(notaDiv);
    }
}