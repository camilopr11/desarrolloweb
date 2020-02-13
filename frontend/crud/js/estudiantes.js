console.log("-------------------JS CRUD ESTUDIANTES---------")

let estudiantes = [
    { id: "001", nombre: "Camilo", apellido: "Pastrana", edad: "19", correo: "camilop.rivas@gmail.com", carrera: "001" }
]

let estudianteTemporal = null

function obtenerValores() {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let correo = document.getElementById("correo").value
    let carrera = document.getElementById("carrera").value

    //Primera forma
    let miEstudiante = {}
    miEstudiante.id = id
    miEstudiante.nombre = nombre
    console.log(miEstudiante)

    //Segunda forma
    let miEstudiante2 = { id, nombre, apellido, edad, correo, carrera }
    console.log(miEstudiante2)
    return miEstudiante2

}

function crearEstudiante() {
    let estudiante = obtenerValores()

    let existeEstudiante = estudiantes.find(x => estudiante.id === x.id )
    if (existeEstudiante) {
        console.log("El estudiante ya existe")
        return;
    }

    estudiantes.push(estudiante)
    listarEstudiantes()
}

function eliminarEstudiante(index) {
    estudiantes.splice(index, 1)
    listarEstudiantes()
}

function limpiarFormulario(){
    document.getElementById("id").value = ""
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("carrera").value = ""

    document.getElementById("btnCrearEstudiante").style.display = "inline"
    document.getElementById("btnEditarEstudiante").style.display = "none"
}

function actualizarEstudiante() {
    let estudianteActualizado = obtenerValores()
    estudiantes.splice(estudianteTemporal, 1, estudianteActualizado)
    limpiarFormulario()
    listarEstudiantes()
}


function cargarInformacion(index) {
    let estudiante = estudiantes[index]
    estudianteTemporal = index
    document.getElementById("id").value = estudiante.id
    document.getElementById("nombre").value = estudiante.nombre
    document.getElementById("apellido").value = estudiante.apellido
    document.getElementById("edad").value = estudiante.edad
    document.getElementById("correo").value = estudiante.correo
    document.getElementById("carrera").value = estudiante.carrera

    document.getElementById("btnCrearEstudiante").style.display = "none"
    document.getElementById("btnEditarEstudiante").style.display = "inline"
}

function listarEstudiantes() {
    let lista = document.getElementById("listaEstudiantes")
    let data = ""
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data += "<tr>"
        data += `<td>${miEstudiante.id}</td>`
        data += `<td>${miEstudiante.nombre} ${miEstudiante.apellido}</td>`
        data += `<td>${miEstudiante.correo} </td>`
        data += `<td>${miEstudiante.carrera} </td>`
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary btn-sm">Editar</button> </td>`
        data += '<td><button type="button" onclick="eliminarEstudiante(' + i + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
        data += "</tr>"
    }
    lista.innerHTML = data
}

// LLamado a la función
listarEstudiantes()

