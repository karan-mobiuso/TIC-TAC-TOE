var gameBoard=new Array(3);
for(var row=0;row<3;row++)
{
    gameBoard[row]=new Array(3);
}

var playerTurnIndicator=1;
var currentPlayerTurn="X";


function updateBoard(Row,Col)
{
    if(playerTurnIndicator===1)
    {
        gameBoard[Row][Col]=1;
        document.getElementById("outputGameBoard").rows[Row].cells[Col].innerHTML="X";
        document.getElementById("outputGameBoard").rows[Row].cells[Col].style.color="black";
        document.getElementById("outputGameBoard").rows[Row].cells[Col].style.background="#728D65";
        playerTurnIndicator=0;
        currentPlayerTurn="0";
        document.getElementById("turnDisplayer").innerHTML="Player 0 turn";
        checkWinner(Row,Col,1);   
        isMatchTied();

    }
    else
    {
        gameBoard[Row][Col]=0;
        document.getElementById("outputGameBoard").rows[Row].cells[Col].innerHTML="0";
        document.getElementById("outputGameBoard").rows[Row].cells[Col].style.color="orange";
        document.getElementById("outputGameBoard").rows[Row].cells[Col].style.background="#D34509";
        playerTurnIndicator=1;
        currentPlayerTurn="X";
        document.getElementById("turnDisplayer").innerHTML="Player X turn";
        checkWinner(Row,Col,0);
        isMatchTied();
    }
}

function restartGame()
{
    for(var row=0;row<3;row++)
    {
        for(var col=0;col<3;col++)
        {
            document.getElementById("outputGameBoard").rows[row].cells[col].innerHTML="";
            document.getElementById("outputGameBoard").rows[row].cells[col].style.background="white";
            gameBoard[row][col]=2;
        }
    }
    document.getElementById("turnDisplayer").innerHTML="";
    currentPlayerTurn="X";
    playerTurnIndicator=1;
}

function checkWinner(Row,Col,symbol)
{
    var winner=true;
    //check winner in row
    for(var col=0;col<gameBoard[Row].length;col++)
    {
        if(gameBoard[Row][col]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        document.getElementById("turnDisplayer").innerHTML="Player X won";
        setTimeout(function(){restartGame()},3000);
    }
    else if(winner===true && symbol===0)
    {
        document.getElementById("turnDisplayer").innerHTML="Player 0 won";
        setTimeout(function(){restartGame()},3000);
    }

    //check winner in col
    winner=true;
    for(var row=0;row<gameBoard[Col].length;row++)
    {
        if(gameBoard[row][Col]!=symbol)
        {
            winner=false;
            break;
        }
    }

    if(winner===true && symbol===1)
    {
        document.getElementById("turnDisplayer").innerHTML="Player X won";
        setTimeout(function(){restartGame()},3000);
    }
    else if(winner===true && symbol===0)
    {
        document.getElementById("turnDisplayer").innerHTML="Player 0 won";
        setTimeout(function(){restartGame()},3000);
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
        document.getElementById("turnDisplayer").innerHTML="Player X won";
        setTimeout(function(){restartGame()},3000);
    }
    else if(winner===true && symbol===0)
    {
        document.getElementById("turnDisplayer").innerHTML="Player 0 won";
        setTimeout(function(){restartGame()},3000);
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
        document.getElementById("turnDisplayer").innerHTML="Player X won";
        setTimeout(function(){restartGame()},3000);
    }
    else if(winner===true && symbol===0)
    {
        document.getElementById("turnDisplayer").innerHTML="Player 0 won";
        setTimeout(function(){restartGame()},3000);
    }
}

function isMatchTied()
{
    var matchTied=true;
    for(var row=0;row<3;row++)
    {
        for(var col=0;col<3;col++)
        {
            if(gameBoard[row][col]===0 || gameBoard[row][col]===1 )
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
        document.getElementById("turnDisplayer").innerHTML="Match-Tied";
        setTimeout(function(){window.location.reload()},3000);
    }

}