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
        document.getElementById("outputGameBoard").rows[clickedRow].cells[clickedCol].innerHTML="X";
        playerTurnIndicator=0;
        currentPlayerTurn="0";
        document.getElementById("turnDisplayer").innerHTML="Player 0 turn";
        checkWinner(clickedRow,clickedCol,1);   
        isMatchTied();

    }
    else
    {
        gameBoard[clickedRow][clickedCol]=0;
        document.getElementById("outputGameBoard").rows[clickedRow].cells[clickedCol].innerHTML="0";
        playerTurnIndicator=1;
        currentPlayerTurn="X";
        document.getElementById("turnDisplayer").innerHTML="Player X turn";
        checkWinner(clickedRow,clickedCol,0);
        isMatchTied();
    }
}

function restartGame()
{
    window.location.reload();
}

function checkWinner(clickedRow,clickedCol,symbol)
{
    var winner=true;
    //check winner in row
    for(var col=0;col<gameBoard[clickedRow].length;col++)
    {
        if(gameBoard[clickedRow][col]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        window.alert("Player X has won");
        restartGame();
    }
    else if(winner===true && symbol===0)
    {
        window.alert("Player 0 has won");
        restartGame();
    }

    //check winner in col
    winner=true;
    for(var row=0;row<gameBoard[clickedCol].length;row++)
    {
        if(gameBoard[row][clickedCol]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        window.alert("Player X has won");
        restartGame();
    }
    else if(winner===true && symbol===0)
    {
        window.alert("Player 0 has won");
        restartGame();
    }

    //check winner in principle diagonal
    winner=true;
    for(var diagonal=0;diagonal<gameBoard.length;diagonal++)
    {
        if(gameBoard[diagonal][diagonal]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        window.alert("Player X has won");
        restartGame();
    }
    else if(winner===true && symbol===0)
    {
        window.alert("Player 0 has won");
        restartGame();
    }

    //check winner in secondary diagonal
    winner=true;
    for(var i=0;i<gameBoard.length;i++)
    {
        if(gameBoard[i][3-i-1]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        window.alert("Player X has won");
        restartGame();
    }
    else if(winner===true && symbol===0)
    {
        window.alert("Player 0 has won");
        restartGame();
    }
}

function isMatchTied()
{
    var matchTied=true;
    for(var i=0;i<3;i++)
    {
        for(var j=0;j<3;j++)
        {
            if(gameBoard[i][j]===0 || gameBoard[i][j]===1 )
            {
                continue;
            }
            else
            {
                matchTied=false;
                break;
            }
        }
    }
    if(matchTied===true)
    {
        window.alert("Match Tied");
        window.location.reload();
    }

}