<?php
$departamento = $_POST['departamento'];
$sociedad = $_POST['sociedad']; 
$acFijo = $_POST['acFijo'];
$anio = $_POST['anio'];
$fechaActual = $_POST['fechaActual'];
$codeBar = $_POST['codeBar'];
$subcodigo = $_POST['subcodigo']; 

$pdo=new PDO("sqlsrv:Server=PC01INFORMATICA\SQLEXPRESS;Database=InventarioAF", "", "");
$statement=$pdo->prepare("INSERT INTO [dbo].[ACTIVOFIJOSINASIGNAR]
([TIPOAF],[SOCIEDAD],[EJERCICIO],[DEPARTAMENTO],[CODEBAR],[SUBCODIGO],[TEXTO],[IMPRESO],[FECHAIMPRESO])
VALUES
('$acFijo','$sociedad','$anio','$departamento','$codeBar','$subcodigo','$fechaActual','No','0')");
$statement->execute();
if($statement){
    echo json_encode('1');
    }
else {
    echo json_encode('0');
    }
?>