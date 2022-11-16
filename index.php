<?php
    // Include Twig-templating engine
    require_once 'vendor/autoload.php';

    // Include personal enviorment variables
    include 'variables.php';

    // Get the URL of the current requested page
    $pageUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    
    // Store the page-specifier from the URL
    $pageSpecifier = str_replace($baseUrl, "", $pageUrl);

    die(var_dump($pageSpecifier));
    
    // Let twig read the templates folder
    $loader = new \Twig\Loader\FilesystemLoader('templates');
    // Create a new Twig envirorment (workspace)
    $twig = new \Twig\Environment($loader);
    // Render the base twig-file
    echo $twig->render('/layouts/base.twig', ['page' => $pageSpecifier]);
?>