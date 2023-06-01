<?php

//https://server-of-team1.pxl.bjth.xyz/api/v1/temperature_json.php 

// example  //https://server-of-team1.pxl.bjth.xyz/api/v1/temperature_json.php --data "{\"temperature\":\"42.0\"}"
    $body = file_get_contents("php://input");
    $data = json_decode($body);
    print_r($data);
?> 