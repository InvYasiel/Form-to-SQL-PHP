<?php
$departamento = $_POST['departamento'];
$sociedad = $_POST['sociedad']; 
$tipoAF = $_POST['tipoAF'];
$anio = $_POST['anio'];
$fechaActual = $_POST['fechaActual'];
$codeBar = $_POST['codeBar'];
$subcodigo = $_POST['subcodigo']; 

$pdo=new PDO("sqlsrv:Server=PC01INFORMATICA\SQLEXPRESS;Database=InventarioAF", "", "");
$statement=$pdo->prepare("INSERT INTO [dbo].[ACTIVOFIJOSINASIGNAR]
([TIPOAF]
,[SOCIEDAD]
,[EJERCICIO]
,[DEPARTAMENTO]
,[CODEBAR]
,[SUBCODIGO]
,[TEXTO])
VALUES
('$tipoAF'
,'$sociedad'
,'$anio'
,'$departamento'
,'$codeBar'
,'$subcodigo'
,'$fechaActual')");
$statement->execute();
?>