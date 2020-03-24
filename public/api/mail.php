<?php
    header("Access-Control-Allow-Origin: *");
    
    $json_str = file_get_contents('php://input');
    # Получить объект
    $json_obj = json_decode($json_str);

    $name = $json_obj->name;
    $tel = $json_obj->tel;
    $to = 'cinema_for_two@mail.ru';
    $subject = 'Новая заявка Film is';
    $message = "Здравствуйте!\r\n"
        ."На вашем сайте новая заявка!\r\n\n"
        .'Имя: '.$name."\r\n\n"
        ."Телефон: "."$tel"."\r\n\n"
        .'Пожалуйста, перезвоните!';
    $from = "FilmIs";
    $headers  = "From: $from\r\nContent-type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo 1;
    } else {
        echo 0;
    };
?>
