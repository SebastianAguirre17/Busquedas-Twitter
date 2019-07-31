<?php
    date_default_timezone_set('America/Argentina/Buenos_Aires');
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    require_once './vendor/autoload.php';
    require_once './clases/db.php';

    include "twitter-php/twitter.class.php";

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $app = new \Slim\App(["settings" => $config]);


    $app->group('/buscar', function () {
        $this->get('/{termino}', function ($request, $response, $args) {
            $termino = buscar($args['termino']);
            $response->getBody()->write($termino);
        });
    });
    
    $app->get('/busquedas', function (Request $request, Response $response) {
        $consulta = 'SELECT * FROM busquedas';

        try {
            //Instancia
            $db = new DB();
            //Conexion
            $db = $db->conectar();
            $ejecutar = $db->query($consulta);
            $busquedas = $ejecutar->fetchAll(PDO::FETCH_OBJ);
            $db = null;

            return json_encode($busquedas);

        }catch( PDOExeption $e){
            echo '{"error": {"text": ' . $e->getMessage().'}';
        }

    });

    $app->run();

    function buscar($termino){
        /* Datos Twiter */
        $consumerKey = 'R5dqmwj39qDKLuPaibVoPhwpu';
        $consumerSecret = 'hgapGawwxUvyGRXkKeuxIj6k0RplJyBfsLgP7LsSnlDNYPFGte';    
        $accessToken = '1549041253-SKzrdJO1SX5ventqvdDm6mD6ccQWDlbJIKkvCwW';         
        $accessTokenSecret = 'iPyJV0nndSeYhL97c0fS3OuEww7Omy1IrA3YBAElNQbJx';
        $twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);
        
        /* Tweets */
        $mensajes = [];
        $statuses = $twitter->search($termino);
        foreach ($statuses as $status) {
            array_push($mensajes, $status);
        }
        guadarDato($termino);
        return json_encode($mensajes);
    }

    function guadarDato($termino){
        /* Guardar datos */
        $fecha = date("D M j G:i:s T Y"); 
        $consulta = 'INSERT INTO busquedas (busqueda, fecha) VALUES (:busqueda, :fecha)';
        try{
            $db = new DB();
            $db = $db->conectar();

            $stmt = $db->prepare($consulta);
            $stmt->bindParam(':busqueda', $termino);
            $stmt->bindParam(':fecha', $fecha);

            $stmt->execute();

        }catch( PDOExeption $e){
            echo '{"error": {"text": ' . $e->getMessage().'}';
        }

    }

?>
    
