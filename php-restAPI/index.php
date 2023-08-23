<?php
require __DIR__ . "/inc/bootstrap.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

if(isset($uri[3]) && $uri[3] === "category" && !isset($uri[4])){
    $objController = new UserController();
    $objController->categoryListAction();
}
?>