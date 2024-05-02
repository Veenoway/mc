// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "hardhat/console.sol";

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

                if(boardNumberIndex == 1 || boardNumberIndex == 8) {
                    bytes32 parsedLetter = parseString(letter);

                    if(parsedLetter == parseString("a") || parsedLetter == parseString("h")) {
                      pushToFinalBoard(letter, boardNumberIndex,"Rook");
                    } else if(parsedLetter == parseString("b") || parsedLetter == parseString("g")) {
                      pushToFinalBoard(letter, boardNumberIndex,"Knight");
                    } else if(parsedLetter == parseString("c") || parsedLetter == parseString("f")) {
                       pushToFinalBoard(letter, boardNumberIndex,"Bishop");
                    } else if(parsedLetter == parseString("d")) {
                       pushToFinalBoard(letter, boardNumberIndex,"Queen");
                    } else if(parsedLetter == parseString("e")) {
                      pushToFinalBoard(letter, boardNumberIndex,"King");
                    }
                } else if(boardNumberIndex == 2 || boardNumberIndex == 7) {
                    pushToFinalBoard(letter, boardNumberIndex,"Pawn");
                } else {
                  pushToFinalBoard(letter, boardNumberIndex,"");
                }
            }
        }
    }

    function pushToFinalBoard( string memory _letter, uint _index, string memory _piece) internal {
      finalBoard.push(FinalBoard(_letter, _index, _piece));
    }

    function parseString(string memory _letter) pure  internal returns (bytes32) {
      return keccak256(abi.encode(_letter));
    }

    function getBoard(uint _i) public view returns(string memory, uint, string memory) {
      FinalBoard memory result = finalBoard[_i];
      return (result.letter, result.number,result.piece);
    }

}
