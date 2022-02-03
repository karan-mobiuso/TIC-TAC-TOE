var gameBoard=new Array(3);
for(var row=0;row<3;row++)
{
    gameBoard[row]=new Array(3);
}

var playerTurnIndicator=1;
var currentPlayerTurn="X";


function updateBoard(clickedRow,clickedCol)
{
    if(playerTurnIndicator===1)
    {
        gameBoard[clickedRow][clickedCol]=1;
        //checkWinner();
        playerTurnIndicator=0;
        currentPlayerTurn="0";
        document.getElementById("turnDisplayer").innerHTML="Player 0 turn";
        document.getElementById("outputGameBoard").rows[clickedRow].cells[clickedCol].innerHTML="X";
    }
    else
    {
        gameBoard[clickedRow][clickedCol]=0;
        //checkWinner();
        playerTurnIndicator=1;
        currentPlayerTurn="X";
        document.getElementById("turnDisplayer").innerHTML="Player X turn";
        document.getElementById("outputGameBoard").rows[clickedRow].cells[clickedCol].innerHTML="0"
    }
}

function restartGame()
{
    window.location.reload();
}