<?php

    // include "twitter-php/twitter.class.php";

    // $consumerKey = 'R5dqmwj39qDKLuPaibVoPhwpu';
    // $consumerSecret = 'hgapGawwxUvyGRXkKeuxIj6k0RplJyBfsLgP7LsSnlDNYPFGte';    
    // $accessToken = '1549041253-SKzrdJO1SX5ventqvdDm6mD6ccQWDlbJIKkvCwW';         
    // $accessTokenSecret = 'iPyJV0nndSeYhL97c0fS3OuEww7Omy1IrA3YBAElNQbJx';

    // $twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

    // $statuses = $twitter->search("azul");

    // foreach ($statuses as $status) {
    //     echo " message: ", Twitter::clickable($status);
    //     echo " posted at " , $status->created_at;
    //     echo " posted by " , $status->user->name;
    //     echo "<br><br>";
    // }

    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];

        echo $nombre;
    }
?>