<form action="action.php"
<?php 
if ($_POST) { 
$file=fopen('mes.json','a+'); 
fputs($file,json_encode($_POST)); 
fclose($file); 
}
?>
