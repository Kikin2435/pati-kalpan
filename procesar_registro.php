<?php
     include_once 'modelos/Usuario.php';
     include_once 'carga_usuarios.php';

     session_start();

     if (!empty($_POST)) {
         $nombre = trim($_POST['nombre']);
         $apellidos = trim($_POST['apellidos']);
         $email = trim($_POST['email']);
         $password = trim($_POST['password']);
         $telefono = trim($_POST['telefono']);

         
         if (empty($nombre) || empty($apellidos) || empty($email) || empty($password) || empty($telefono)) {
             header("Location: RegistroUsuario.html?error=2");
             exit();
         }

         
         foreach ($lista_usuarios as $usuario) {
             if ($usuario->correo === $email) {
                 header("Location: RegistroUsuario.html?error=1");
                 exit();
             }
         }

         
         $nuevoUsuario = new Usuario();
         $nuevoUsuario->nombre = $nombre;
         $nuevoUsuario->apellidos = $apellidos;
         $nuevoUsuario->correo = $email;
         $nuevoUsuario->contrasenia = $password;
         $nuevoUsuario->telefono = $telefono;
         $nuevoUsuario->tipo = "usuario";
         $lista_usuarios[] = $nuevoUsuario;

         
         $fileContent = "<?php\n";
         $fileContent .= "include_once 'modelos/Usuario.php';\n";
         $fileContent .= "\$lista_usuarios = [];\n\n";
         foreach ($lista_usuarios as $usuario) {
             $fileContent .= "\$u = new Usuario();\n";
             $fileContent .= "\$u->nombre = \"" . addslashes($usuario->nombre) . "\";\n";
             $fileContent .= "\$u->apellidos = \"" . addslashes($usuario->apellidos) . "\";\n";
             $fileContent .= "\$u->correo = \"" . addslashes($usuario->correo) . "\";\n";
             $fileContent .= "\$u->contrasenia = \"" . addslashes($usuario->contrasenia) . "\";\n";
             $fileContent .= "\$u->telefono = \"" . addslashes($usuario->telefono) . "\";\n";
             $fileContent .= "\$u->tipo = \"" . addslashes($usuario->tipo) . "\";\n";
             $fileContent .= "\$lista_usuarios[] = \$u;\n\n";
         }
         $fileContent .= "?>";
         file_put_contents('carga_usuarios.php', $fileContent);

         
         header("Location: index.html");
         exit();
     } else {
         header("Location: RegistroUsuario.html");
     }
     ?>