var movesHistory = [];
var lastMove = [];
var predictedMove;
var movesCount;


$(function(){
    initBoard();
});


function initBoard(){
    $('body').append('<div class="overlayLoader"></div>');

    for(var i=0 ; i <= 16 ; i++ ) { // 0 to 15 = 16 pieces for each sides
        getPiece(i);
    }
}

/**
 * @todo dev isMoveLegal
 */
function isMoveLegal(move){}

/**
 * @todo dev getEngineMove
 */
function getEngineMove(){}

/**
 * @todo dev playMove
 */
function playMove(move,color){}



function getPiece(piece){

    // Init the first piece places

    var whitePieces = ['white_king','white_queen','white_rock1','white_rock2','white_bishop1','white_bishop2','white_knight1','white_knight2','white_pawn1','white_pawn2','white_pawn3','white_pawn4','white_pawn5','white_pawn6','white_pawn7','white_pawn8'];
    var blackPieces = ['black_king','black_queen','black_rock1','black_rock2','black_bishop1','black_bishop2','black_knight1','black_knight2','black_pawn1','black_pawn2','black_pawn3','black_pawn4','black_pawn5','black_pawn6','black_pawn7','black_pawn8'];

    var whitePositions = ['e1','d1','a1','h1','c1','f1','b1','g1','a2','b2','c2','d2','e2','f2','g2','h2'];
    var blackPositions = ['e8','d8','a8','h8','c8','f8','b8','g8','a7','b7','c7','d7','e7','f7','g7','h7'];


    var whiteParams='piece=' + whitePieces[piece];

    $.get("ajax/getPiece.php", whiteParams , function (data) {
        $("#"+whitePositions[piece]).html(data);
    });

    var blackParams='piece=' + blackPieces[piece];

    $.get("ajax/getPiece.php", blackParams , function (data) {
        $("#"+blackPositions[piece]).html(data);
        if(piece == 16) {
            $('.overlayLoader').remove();
            initPiecesBehavior();
        }
    });
}

function activateDraggablePieces(){
    $('.piece').each(function(){
        $(this).draggable({
                containment: "#board"
            }
        );
    });
}

function initPiecesBehavior() {

    activateDraggablePieces();

    $('#board div').not('.clear').each(function(){
        $(this).droppable({
                drop: function (event, ui) {
                    $('#playedMoves').prepend(event.target.id+" ");
                    var square = $("#"+event.target.id);
                    var piece = ui.draggable;
                    piece.remove();
                    square.html(piece);
                    piece.css({top:-7,left:1}); // reset initial micro css adjustments
                    setTimeout(function(){ activateDraggablePieces() },200); // for a strange reason if draggable is reactivated directly it don't work ...
                }
            }
        );
    });
}

function contains(needle,haystack){
    return needle.indexOf(haystack) !== -1;
}

function debug(data){
    $('body').prepend(data);
    console.log(data);
}
