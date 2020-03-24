<?php
    header("Access-Control-Allow-Origin: *");

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $to = 'cinema_for_two@mail.ru';
    $subject = 'Новая заявка Film is';
    $message = "Здравствуйте, Сергей!\r\n"
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
