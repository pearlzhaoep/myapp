<?php

function isValidForm($contactBody){
    if(isset($contactBody->token)){
        return true;
    }
}

function sanitizeForm($contactBody){
    $email = trim($contactBody->email);
    $message = trim($contactBody->message);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($message);
    $message = wordwrap($message,70);
    $contactBody->email = $email;
    $contactBody->message = $message;
    return $contactBody;
}

function recaptchaValidation($token){
    $data = [
        'secret' => RECAPTCHA_SECRET_KEY,
        'response' => $token,
    ];
    $options = [
        'http' => [
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => "POST",
            'content' => http_build_query($data)
        ]
        ];
    $context = stream_context_create($options);
    return file_get_contents(RECAPTCHA_URL, false, $context);
}

?>