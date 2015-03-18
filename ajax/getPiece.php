<?php
require '../class/Pieces.php';

$piece = isset($_GET['piece']) ? $_GET['piece'] : '';
$piece = str_replace(range(0,9),'',$piece); // don't need to know the pieces positions for getting her graphics


echo Pieces::getPiece($piece);