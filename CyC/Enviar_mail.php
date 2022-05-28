<?php
    if (isset($_POST["submit"]) {

        $name_mail=$_POST["name"];
        $mail_from=$_POST["mail"];
        $message_mail=$_POST["message"];

        $message_to = "azzaroingenieria@gmail.com"
        $headers = "From: ".$mail_from;
        $txt = "Has recibido un correo de ".$name_mail."\r\n".$message;

        mail($mail_to, "CyC", $txt, $headers);
        header("Location: contact.php?mailsend");
    
    }
?>
