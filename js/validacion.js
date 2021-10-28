document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formConsulta").addEventListener('submit', validarFormulario);

});

function validarFormulario(evento) {
    evento.preventDefault();

    if (formServicio.selectedIndex == false) {
        alert("No has seleccionado un servicio");
        return;
    }
    var servicio = document.getElementById("formServicio");
    var eleccionServicio = servicio.options[servicio.selectedIndex].value;

    if (eleccionServicio == 1) {
        if (formAsesoria.selectedIndex == false) {
            alert("No has seleccionado tu consulta de asesoramiento");
            return;
        } else {
            var asesoramiento = document.getElementById("formAsesoria");
            var eleccion = asesoramiento.options[asesoramiento.selectedIndex].value;
            var comentario = document.getElementById("comentAsesoria").value;
            if (eleccion == 4 && comentario == false) {
                alert("No has descripto tu consulta de asesoramiento");
                return;

            }
        }
    }
    if (eleccionServicio == 2) {
        var comentario = document.getElementById("comentDiseno").value;
        if (comentario == false) {
            alert('No has descripto el diseño')
            return;
        }

    }
    if (eleccionServicio == 3) {
        var comentario = document.getElementById("comentImprimir").value;
        if (comentario == false) {
            alert('No has descripto las caractéristicas de la impresión')
            return;
        }

    }

    if (eleccionServicio == 4) {
        if (formReparacion.selectedIndex == false) {
            alert("No has seleccionado el problema");
            return;
        } else {
            var reparacion = document.getElementById("formReparacion");
            var eleccion = reparacion.options[reparacion.selectedIndex].value;
            var comentario = document.getElementById("comentReparacion").value;
            if (eleccion == 6 && comentario == false) {
                alert("No has descripto tu problema");
                return;

            }
        }
    }
    //Datos personales
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    if (nombre.length == 0) {
        alert("Completa el campo Nombre");
        return;
    }
    if (apellido.length == 0) {
        alert("Completa el campo Apellido");
        return;
    }

    function esNumero(valor) {
        var valoresAceptados = /^[0-9]+$/;
        if (valor.match(valoresAceptados)) {
            return true;
        } else {
            return false;
        }
    }
    var caract = document.getElementById('caract').value;
    if (caract == 0) {
        alert("Completa el campo Característica");
    } else if (esNumero(caract)) {
        if (caract.length < 5) {
            alert("Ingresa una característica válida");
        }
    } else {
        alert("Ingresa una característica válida");
    }

    var tel = document.getElementById('tel').value;
    if (tel == 0) {
        alert("Completa el campo Número de teléfono");
    } else if (esNumero(tel)) {
        if (tel.length < 6) {
            alert("Ingresa un número de teléfono válido");
        }
    } else {
        alert("Ingresa un número de teléfono válido");
    }

    function esEmail(valor) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
            return true;
        } else {
            return false;
        }
    }

    var email = document.getElementById('email').value;
    if (esEmail(email) == false) {
        alert("Ingresa un email válido");
    }

    this.submit


}