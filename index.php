<?php
/**
 * Autoloader for class
 */
spl_autoload_register(function ($className) {
    $namespace = str_replace("\\", "/", __NAMESPACE__);
    $className = str_replace("\\", "/", $className);
    $class = "/class/" . (empty($namespace) ? "" : $namespace . "/") . "{$className}.class.php";
    include_once($class);
});


require 'view/header.php';
require 'view/board.php';
require 'view/footer.php';