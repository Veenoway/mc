// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;


contract Chess {
    uint[8] board;
    string[] letters;
    FinalBoard[] public finalBoard;

    constructor() {
      letters = ["a","b","c","d","e","f","g","h"];
    }
    
    struct FinalBoard {
        string letter;
        uint number;
        string piece;
    }

    function initBoard() public {
        for(uint i = 0; i < board.length; i++) {
            for(uint j = 0; j < letters.length; j++){
              
                uint boardNumberIndex = i + 1;
                string memory letter = letters[j];

                if(boardNumberIndex == 2 || boardNumberIndex == 7) {
                    pushToFinalBoard(letter, boardNumberIndex,"Pawn");
                } else if(boardNumberIndex == 1 || boardNumberIndex == 8) {
                    if(letter == "a" || letter == "h") {
                      pushToFinalBoard(letter, boardNumberIndex,"Rook");
                    } else if(letter == "b" || letter == "g") {
                      pushToFinalBoard(letter, boardNumberIndex,"Knight");
                    } else if(letter == "c" || letter == "f") {
                       pushToFinalBoard(letter, boardNumberIndex,"Bishop");
                    } else if(letter == "d") {
                       pushToFinalBoard(letter, boardNumberIndex,"Queen");
                    } else {
                      pushToFinalBoard(letter, boardNumberIndex,"King");
                    }
                } else {
                  pushToFinalBoard(letter, boardNumberIndex,"");
                }
             
            }
        }
    }

    function pushToFinalBoard( string memory _letter, uint _index, string memory _piece) internal {
      finalBoard.push(FinalBoard(_letter, _index, _piece));
    }

    function getBoard(uint _i) public view returns(string memory, uint, string memory) {
      // FinalBoard memory result = finalBoard[_i];
      return (finalBoard[_i].letter, finalBoard[_i].number,finalBoard[_i].piece);
    }

}
