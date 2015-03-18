<?php

class Pieces {
    private static $pieces =
        array(
            'white_king' =>'<span class="piece">&#9812;</span>' ,
            'white_queen' => '<span class="piece">&#9813</span>' ,
            'white_rock'  => '<span class="piece">&#9814</span>' ,
            'white_bishop' => '<span class="piece">&#9815</span>' ,
            'white_knight' => '<span class="piece">&#9816</span>' ,
            'white_pawn' => '<span class="piece">&#9817</span>' ,
            'black_king' => '<span class="piece">&#9818</span>' ,
            'black_queen' => '<span class="piece">&#9819</span>' ,
            'black_rock' => '<span class="piece">&#9820</span>' ,
            'black_bishop' => '<span class="piece">&#9821</span>' ,
            'black_knight' => '<span class="piece">&#9822</span>' ,
            'black_pawn' => '<span class="piece">&#9823</span>' ,
);

    /**
     * @param $piece
     * @return pieces design unicode Char
     */
    public static function getPiece($piece){
        return self::$pieces[$piece];
    }

}
