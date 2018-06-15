var ArImpresos = []
impresos()

function impresos() {

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var datos = JSON.parse(this.responseText);
            for (let i = 0; i < datos.length; i++) {
                if (datos[i] == 'No') {
                    ArImpresos.push(datos[i]);
                }

            }
            
        }
    };
    xmlhttp.open("GET", "php/departamentos.php", true);
    xmlhttp.send();
};

function limpiar() {
    var f = new Date();
var tiempo = f.getDay() + "/" + f.getMinutes() + "/" + f.getDate() + " " +f.getHours()+':'+f.getMinutes()+':'+f.getSeconds(); 
    var infoParaEnviar = {
        tiempo:tiempo
    };
    swal({
        title: "CUIDADO!!!",
        text: "Al ejecutar esta función perderás todas las etiquetas que NO ESTÉN REALMENTE IMPRESAS",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(function (value) {
        $.ajax({
            type: "POST",
            url: "php/update.php",
            data: infoParaEnviar,
            dataType: "text",
            async:true,
            complete: function (sam) {
                var datos = JSON.parse(sam.responseText);
                if(datos != "0" ){
                    swal({
                        title: "Completado ",
                        text: 'Has limpiado las etiquetas ya impresas',
                        icon: "success",
                        button: "Cerrar",
                    }).then(function (value) {
                        location.reload();
                    }); 
                }else{
                    swal({
                        title: "Error en la base de datos ",
                        text: 'Contacte con Yasiel Hernández',
                        icon: "error",
                        button: "Aceptar",
                    })
                }
            }
        });
    }); 
}