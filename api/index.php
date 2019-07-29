<?php
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    require_once './vendor/autoload.php';
    require_once './clases/AccesoDatos.php';

    include "twitter-php/twitter.class.php";

   

    $config['displayErrorDetails'] = true;
    $config['addContentLengthHeader'] = false;

    $app = new \Slim\App(["settings" => $config]);


    $app->group('/buscar', function () {
        $this->get('/', function ($request, $response, $args) {
            $response->getBody()->write("HOLA, Bienvenido a la apirest... ingresá un termino de busqueda");
        });
        $this->get('/{termino}', function ($request, $response, $args) {
            $termino = buscar($args['termino']);
    
            $response->getBody()->write($termino);
        });
    });
    

    $app->run();

    function buscar($termino){
        $consumerKey = 'R5dqmwj39qDKLuPaibVoPhwpu';
        $consumerSecret = 'hgapGawwxUvyGRXkKeuxIj6k0RplJyBfsLgP7LsSnlDNYPFGte';    
        $accessToken = '1549041253-SKzrdJO1SX5ventqvdDm6mD6ccQWDlbJIKkvCwW';         
        $accessTokenSecret = 'iPyJV0nndSeYhL97c0fS3OuEww7Omy1IrA3YBAElNQbJx';

        $twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

        $mensajes = [];
        $statuses = $twitter->search($termino);
        foreach ($statuses as $status) {
            array_push($mensajes, Twitter::clickable($status));
            // echo " posted at " , $status->created_at .PHP_EOL;
            // echo " posted by " , $status->user->name .PHP_EOL;
        }
        // var_dump($mensajes);    
        return json_encode($mensajes);
    }

?>
    
