<?php 
if ($_POST) {
$file=fopen('mes.json','a+');
echo json_encode($_POST);
fputs($file,','.json_encode($_POST)); 
fclose($file); 
}
?>
