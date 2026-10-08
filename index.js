function GameBoard() {
  const gameboard = [];
  for (let i = 0; i < 3; i++) {
    gameboard[i] = []
    for (let j = 0; j < 3; j++) {
      gameboard[i][j] = "";
    }    
  }


  const getGameBoard = () => gameboard


  const selectPiece = (player, row, col) => {
    if (gameboard[row][col] === "") {
        gameboard[row][col] = player.token
    }
  }
  return {getGameBoard, selectPiece}
}


const playersController = (firstPlayerName = "First Player", secondPlayerName = "Second Player") => {
    const players = [
        {
            firstPlayerName,
            token: "X"
        },
        {
            secondPlayerName,
            token: "O"
        }
    ]


    const playerTurn = players[0]
   
    const switchPlayer = () => playerTurn == players[0] ? players[1] : players[0]
    return {players, playerTurn, switchPlayer}
}


const gameController = (function () {
  const gameboard = GameBoard()  
 
  function checkIFGameOver() {}
  return {
    gameboard,
    playerOneSymbol,
    playerTwoSymbol,
  };
})();


console.log(gameController.gameboard.gameboard[0]);
