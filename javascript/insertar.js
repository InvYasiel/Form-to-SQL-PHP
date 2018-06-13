var hecho = false;
function generar() {
    var cantidad = document.getElementById('cant').value; //veces que se envíe
   
    var n = 0;
    for (let i = 0; i < cantidad; i++) {
        n = 0;
         n++;
        numeroCodeBar = parseInt(numeroCodeBar) + n;
       
        var cadenaNumerica = '0000000';
        var resultado= cadenaNumerica + numeroCodeBar;
        resultado = resultado.toString().substring(resultado.length - cadenaNumerica.length);

        var departamento = document.getElementById('departamento');
        var sociedad = document.getElementById('sociedad');
        var tipoAF = document.getElementById('acFijo');
        var anio = document.getElementById('anio');
        var f = new Date();
        var fechaActual = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
        var codeBar = departamento.value + sociedad.value + tipoAF.value + anio.value.substring(2, 4) + resultado;
        var subcodigo = departamento.value + '-' + sociedad.value + '-' + tipoAF.value + '-' + anio.value.substring(2, 4) + '-' + resultado;
        var contador = '';
        if (departamento.value == '' || sociedad.value == '' || tipoAF.value == '') {
            swal({
                title: "Seleccione correctamente todos los campos",
                text: 'Intentalo de nuevo',
                icon: "error",
                button: "Cerrar",
            })
        } else {
            if (parseInt(anio.value) < 2000 || parseInt(anio.value) > 2030) {
                swal({
                    title: "Fecha erronea",
                    text: 'escoja un año entre 2000 y 2030',
                    icon: "error",
                    button: "Cerrar",
                })
            } else {
                var infoParaEnviar = {
                    departamento: departamento.value,
                    sociedad: sociedad.value,
                    tipoAF: tipoAF.value,
                    anio: anio.value,
                    fechaActual: fechaActual,
                    codeBar: codeBar,
                    subcodigo: subcodigo
                };

                $.ajax({
                    type: "POST",
                    url: "php/insertar.php",
                    data: infoParaEnviar,
                    dataType: "text",
                    asycn: false,
                    success: function () {
                        hecho = true;

                    }
                });
            }
        }

    }
    if (hecho) {
        swal({
            title: "Etiquetas Enviadas",
            text: 'Las estiquetas ya están disponibles en la base de datos',
            icon: "success",
            button: "Cerrar",
        }).then(function (value) {
            location.reload();
        });
    }

}