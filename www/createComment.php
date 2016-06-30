<?php
//header('Content-type: application/json');
//create a json file if not created.
$file = is_file("test.json");
//$x = file_get_contents("test.json");

$data = array("id" => "comment", "app" => "the app name", "comment" => $_POST['comment']);
$about = array("app"=>1, "picture_comments"=> "true");

if($file){
	//$newData = array();
	echo "file exists ";
	$existingData = file_get_contents("test.json");
	echo $existingData;
	$newData = json_decode($existingData, true);
	$oldData = $data;
	$newData[]= $oldData;
	$new = json_encode($newData);
	file_put_contents("test.json", $new);
	
	}else{
		echo "no file ";
		//file_put_contents("test.json", json_encode($about));
		file_put_contents("test.json", "");
		
		$existingData = file_get_contents("test.json");
	echo $existingData;
	$newData = json_decode($existingData, true);
	$oldData = $data;
	$newData[]= $oldData;
	$new = json_encode($newData);
	file_put_contents("test.json", $new);
		
		}

?>