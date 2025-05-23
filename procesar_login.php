<?php
include_once 'modelos/Usuario.php';
include_once 'carga_usuarios.php';

session_start();

if (!empty($_POST)) {
    if (isset($_POST["usuario"]) && isset($_POST["contrasenia"])) {
        for ($i = 0; $i < count($lista_usuarios); $i++) {
            if ($lista_usuarios[$i]->correo == $_POST["usuario"] && $lista_usuarios[$i]->contrasenia == $_POST["contrasenia"]) {
                $_SESSION["usuario"] = $lista_usuarios[$i]->nombre;
                $_SESSION["tipo"] = $lista_usuarios[$i]->tipo;
                header("Location: Menu.html");
                exit();
            }
        }
        header("Location: index.html?error=1"); // Error Correo y/o contraseña incorrectos
    } else {
        if (!isset($_POST["usuario"]) || trim($_POST["usuario"]) == "" || !isset($_POST["contrasenia"]) || trim($_POST["contrasenia"]) == "") {
            header("Location: index.html?error=2"); // Error Ingresa los datos
        } else {
            header("Location: index.html?error=1"); // Error Correo y/o contraseña incorrectos
        }
    }
} else {
    header("Location: index.html");
}
?>