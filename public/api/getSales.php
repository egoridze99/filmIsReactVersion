<?php
    header("Access-Control-Allow-Origin: *");

    $connection = mysqli_connect('a247837.mysql.mchost.ru', 'a247837_Egor', '45362718Ee', 'a247837_Egor');
    $resultArray = [];

    if ($connection == false) {
        echo "Не удалость соедениться с БД";
        echo mysqli_connect_error();
        exit();
    };

    $result = mysqli_query($connection, "SELECT * FROM `sales`");
    
    while ( ($record = mysqli_fetch_assoc($result)) ) {
        array_push($resultArray, $record);
    }

    echo json_encode($resultArray);

    mysqli_close($connection);
?>