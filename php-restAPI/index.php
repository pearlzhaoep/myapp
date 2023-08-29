<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: * ');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}
require __DIR__ . "/inc/bootstrap.php";
//$data = file_get_contents('php://input');
//$data = json_decode($data);


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

if(isset($uri[3]) && $uri[3] === "category" && !isset($uri[4])){
    $objController = new UserController();
    $objController->categoryListAction();
}
?>