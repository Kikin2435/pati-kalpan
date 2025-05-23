<?php
include_once 'modelos/Usuario.php';
$lista_usuarios = [];

$u = new Usuario();
$u->nombre = "Juan";
$u->apellidos = "Perez";
$u->correo = "juan.perez@gmail.com";
$u->contrasenia = "123";
$u->telefono = "123-456-7890";
$u->tipo = "administrador";
$lista_usuarios[] = $u;

$u = new Usuario();
$u->nombre = "Laura";
$u->apellidos = "Ramirez";
$u->correo = "laura.ramirez@gmail.com";
$u->contrasenia = "456";
$u->telefono = "987-654-3210";
$u->tipo = "cajero";
$lista_usuarios[] = $u;

$u = new Usuario();
$u->nombre = "Ana";
$u->apellidos = "Lopez";
$u->correo = "ana.lopez@ejemplo.com";
$u->contrasenia = "123";
$u->telefono = "123-456-7890";
$u->tipo = "usuario";
$lista_usuarios[] = $u;

?>