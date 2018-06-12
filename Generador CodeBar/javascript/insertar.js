var departamento = document.getElementById('departamento');
var sociedad = document.getElementById('sociedad');
var tipoAF = document.getElementById('acFijo');
var anio = document.getElementById('anio');
var cantidad = document.getElementById('cant');
function generar() {
    var infoParaEnviar = {
        departamento:departamento.value,
        sociedad:sociedad.value,
        tipoAF:tipoAF.value,
        anio:anio.value,
        cantidad:cantidad.value
    };

    $.ajax({
        type: "POST",
        url: "php/insertar.php",
        data: infoParaEnviar,
        dataType: "text",
        asycn: false,
        success: function () {
            swal({
                    title: "Completado!",
                    icon: "success",
                    button: "Cerrar",
                })
                .then(function (value) {
                    swal(location.reload());
                });
        }
    });
}