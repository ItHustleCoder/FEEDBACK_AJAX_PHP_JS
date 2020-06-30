<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $subject ="=?utf-8?B?".base64_encode('Test message')."?=";
    $headers = "From: $eamil\r\nReplay-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";
    $success = mail("admin@ithustlecoder.com", $subject, $message, $headers);
    echo $success;


?>