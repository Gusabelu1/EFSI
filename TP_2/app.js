var input = document.getElementById("crearNota");
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(input.value)
        crearNota(input.value);
    }
}); 

var i = 0;
function crearNota (nota) {
    i++;
    var notaInput = document.createElement("input");
    notaInput.setAttribute("type", "checkbox");
    notaInput.setAttribute("nota" + i, "checkbox");
    
    var notaLabel = document.createElement("label");
    notaLabel.setAttribute("for", 'checkbox');
    notaLabel.innerHTML = nota;

    document.getElementById("card").appendChild(notaInput);
    document.getElementById("card").appendChild(notaLabel);
}