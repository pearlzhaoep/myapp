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
                if(isset($arrQueryStringParams['categoryId']) && isset($arrQueryStringParams['language'])){
                    $responseData = $userModel->getWordByCategory($arrQueryStringParams['categoryId'], $arrQueryStringParams['language']);
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

    public function dictionaryListAction(){
        $strErrorDesc = "";
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if(strtoupper($requestMethod) === 'GET') {
            try{
                $userModel = new UserModel();
                $responseData = null;
                if(isset($arrQueryStringParams['wordId'])&&isset($arrQueryStringParams['language'])){
                    $responseData = $userModel->getWordById($arrQueryStringParams['wordId'], $arrQueryStringParams['language']);
                }
                elseif(empty($arrQueryStringParams)){
                    $responseData = $userModel->getAllWordOnly();
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

    public function conversationListAction(){
        $strErrorDesc = "";
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
        if(strtoupper($requestMethod) === 'GET') {
            try{
                $userModel = new UserModel();
                $responseData = null;
                if(isset($arrQueryStringParams['conversationId'])&&isset($arrQueryStringParams['language'])){
                    $responseData = $userModel->getConversationById($arrQueryStringParams['conversationId'], $arrQueryStringParams['language']);
                }
                elseif(empty($arrQueryStringParams)){
                    $responseData = $userModel->getCoverOnly();
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