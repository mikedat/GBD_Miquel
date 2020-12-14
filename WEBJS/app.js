for (const alumno of datos) {
    let lista = document.createElement("ul");
    document.body.appendChild(lista);

    for (const propiedad in alumno) {
        let listali = document.createElement("li");
        {
            lista.appendChild(listali);
            listali.innerHTML = propiedad + ": " + alumno[propiedad];

        }
    }
}
