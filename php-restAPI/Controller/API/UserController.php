<?php
class UserController extends BaseController{
    public function categoryListAction(){
        $strErrorDesc = "";
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();

        if(strtoupper($requestMethod) === 'GET') {
            try{
                $userModel = new UserModel();
                $responseData = null;
                if(isset($arrQueryStringParams['categoryId'])){
                    $responseData = $userModel->getWordByCategory($arrQueryStringParams['categoryId']);
                }
                else throw new Exception('Error. Invalid parameters.');
            } catch (Exception $e) {
                $strErrorDesc = $e->getMessage() . "Something went wrong! Please contact support.";
                $strErrorHeader = "HTTP/1.1 500 Internal Server Error.";
            }
        }
        else {
            $strErrorDesc = "Method not supported";
            $strErrorHeader = "HTTP/1.1 422 Unprocessable Entity";
        }

        if(!$strErrorDesc){
            $this->sendOutput($responseData, array('Content-Type: application/json', 'HTTP/1.1 200 OK'));
        }
        else {
            $this->sendOutput(json_encode(array('error'=>$strErrorDesc)), array('Content-Type: application/json', $strErrorHeader));
        }
    } 
}
?>