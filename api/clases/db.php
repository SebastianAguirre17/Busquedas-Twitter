
<?php
    class DB {
        private $host = 'localhost';
        private $user = 'root';
        private $pass = '';
        private $base = 'busquedas';

        //Conexion
        public function conectar(){
            $conexion_mysql = "mysql:host=$this->host;dbname=$this->base";
            $conexioDB = new PDO($conexion_mysql, $this->user, $this->pass);
            $conexioDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $conexioDB->exec("set names utf8");

            return $conexioDB;
        }
    }

?>