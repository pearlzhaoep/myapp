<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: * ');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}
require __DIR__ . "/inc/bootstrap.php";
require __DIR__ . "/util.php";


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);
require PROJECT_ROOT_PATH . "/Controller/UserController.php";

if(isset($uri[3]) && $uri[3] === "category" && !isset($uri[4])){
    $objController = new UserController();
    $objController->categoryListAction();
}

if(isset($uri[3]) && $uri[3] === "dictionary" && !isset($uri[4])){
    $objController = new UserController();
    $objController->dictionaryListAction();
}

if(isset($uri[3]) && $uri[3] === "conversation" && !isset($uri[4])){
    $objController = new UserController();
    $objController->conversationListAction();
}

if(isset($uri[3]) && $uri[3] === "contact" && !isset($uri[4])){
    $post = json_decode(file_get_contents("php://input"));
    if(isValidForm($post)){
        try{
                $recaptcha = recaptchaValidation($post->token);
                $recaptcha = json_decode($recaptcha);
                if($recaptcha->success && $recaptcha->score >= 0.5 && $recaptcha->action === "contact"){
                    $sanitizedForm = sanitizeForm($post);
                    if(@mail('info@quebec-quoi.ca', 'mail from '. $sanitizedForm->email, $sanitizedForm->message)){
                        throw new Exception("Fail To Mail");
                    }
                    else {
                            header('Content-Type: application/json');
                            header('HTTP/1.1 200 OK.');
                            exit;
                    }

                }
        } catch (Exception $e) {
            header('Content-Type: application/json');
            header('HTTP/1.1 422 Unprocessable Entity.' . $e->getMessage());
            exit;
        }
    }
    
    header('Content-Type: application/json');
    header('HTTP/1.1 500 Unprocessable Entity');
    exit;

}
?>