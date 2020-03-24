<?php
header("Access-Control-Allow-Origin: *");

    $connection = mysqli_connect('a247837.mysql.mchost.ru', 'a247837_Egor', '45362718Ee', 'a247837_Egor');
    $resultArray = [];

    if ($connection == false) {
        echo "Не удалость соедениться с БД";
        echo mysqli_connect_error();
        exit();
    };

    $title = (string)$_POST['title'];
    $text = $_POST['text'];

    $titleToQuery = '\'' . $title . '\'';
    $textToQuery = '\'' . $text . '\'';

    $query = 'INSERT INTO `sales` (`id`, `title`, `text`) VALUES (NULL, ' . $titleToQuery . ', ' . $textToQuery . ')';

    $result = mysqli_query($connection, $query);

    echo $result;
?>