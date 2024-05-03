// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "hardhat/console.sol";

contract Chess {
    uint[8] xAxis;
    uint[8] yAxis;
    FinalBoard[] public finalBoard;
    
    struct FinalBoard {
        uint xAxis;
        uint yAxis;
        string piece;
    }

    function initBoard() public {
        for(uint i = 0; i < xAxis.length; i++) {
            for(uint j = 0; j < yAxis.length; j++){
              
                uint xIndex = i + 1;
                uint yIndex = j + 1;

                if(xIndex == 1 || xIndex == 8) {
                    if(yIndex == 1 || yIndex == 8) {
                      pushToFinalBoard(yIndex, xIndex,"Rook");
                    } else if(yIndex == 2 || yIndex == 7) {
                      pushToFinalBoard(yIndex, xIndex,"Knight");
                    } else if(yIndex == 3 || yIndex == 6) {
                       pushToFinalBoard(yIndex, xIndex,"Bishop");
                    } else if(yIndex == 4) {
                       pushToFinalBoard(yIndex, xIndex,"Queen");
                    } else if(yIndex == 5) {
                      pushToFinalBoard(yIndex, xIndex,"King");
                    }
                } else if(xIndex == 2 || xIndex == 7) {
                    pushToFinalBoard(yIndex, xIndex,"Pawn");
                } else {
                  pushToFinalBoard(yIndex, xIndex,"");
                }
            }
        }
    }

    function verifyLegalMove() internal returns(bool) {
     
    }

    function pushToFinalBoard(uint _y, uint _x, string memory _piece) internal {
      finalBoard.push(FinalBoard(_y, _x, _piece));
    }

    function parseString(string memory _letter) pure  internal returns (bytes32) {
      return keccak256(abi.encode(_letter));
    }

    function getBoard(uint _i) public view returns(uint, uint, string memory) {
      FinalBoard memory result = finalBoard[_i];
      return (result.yAxis, result.xAxis,result.piece);
    }

}
