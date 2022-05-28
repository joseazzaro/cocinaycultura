<?php

    $nombre_mail=#_POST["name"];
    $direccion_mail=#_POST["mail"];
    $mensaje_mail=#_POST["message"];

    $headers="MIME-Version: 1.0\r\n";
    $headers.="Content-type: text/html; charset=iso-8859-1\r\n";
    $headers.="From: \r\n";

    $exito=mail(azzaroingenieria@gmail.com, "CyC", $mensaje_mail, $headers);

    if($exito) {
        echo "Mensaje enviado";
    } else {
        echo "Error al enviar";
    }

?>
