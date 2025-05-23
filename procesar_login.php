<?php
include_once '../pati-kalpan/modelos/Usuario.php';
require_once '../pati-kalpan/datos/DAOUsuario.php';

session_start();

if (!empty($_POST)) {
    if (isset($_POST["correo"]) && isset($_POST["contrasenia"])) {
        $correo = $_POST["correo"];
        $contrasenia = $_POST["contrasenia"];

        $dao = new DAOUsuario();
        $usuario = $dao->autentica($correo, $contrasenia);
        if ($usuario !== null) {
            header("Location: Menu.html");
            exit;
        } else {
            header("Location: index.html?error=1");
            exit;
        }
    }
} else {
    header("Location: index.html");
    exit;
}
?>
