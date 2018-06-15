<?php
$tiempo = $_POST['tiempo'];

$del = new PDO("sqlsrv:Server=PC01INFORMATICA\SQLEXPRESS;Database=InventarioAF", "", "");
$delete = $del->prepare("UPDATE [dbo].[ACTIVOFIJOSINASIGNAR] SET [IMPRESO] = 'Si',[FECHAIMPRESO] = '$tiempo' WHERE [IMPRESO] = 'No' ");
$delete->execute();
if($delete){
    echo json_encode('1');
    }
else {
    echo json_encode('0');
    }
?>