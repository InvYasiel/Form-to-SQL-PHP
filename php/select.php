<?php
//---------------------------------Consulta Agenda---------------------------------   
$pdo=new PDO("sqlsrv:Server=PC01INFORMATICA\SQLEXPRESS;Database=InventarioAF", "", "");
$statement=$pdo->prepare("SELECT [ACTIVOFIJO]
FROM [dbo].[ACTIVOFIJOSINASIGNAR]");
$statement->execute();
if (!$statement){
    echo 'Error al ejecutar la consulta';
}else{
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo  json_encode($results);
}
?>