// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "hardhat/console.sol";

contract Chess {
    uint[8] xAxis;
    uint[8] yAxis;
    PiecePosition[] public finalBoard;
    
    struct PiecePosition {
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

    event ValueLogged(string message, int256 dx);

    function checkLegalMove(uint _xFrom, uint _yFrom, uint _xTo, uint _yTo, string memory _piece, bool _isFirstMove)  public returns(bool) {
        int256 dx = int256(_xTo) - int256(_xFrom);
        int256 dy = int256(_yTo) - int256(_yFrom);
        emit ValueLogged("Value is DX: ", dx);
        emit ValueLogged("Value is DY: ", dy);
        uint absDx = absolute(dx);
        uint absDy = absolute(dy);
        if(parseString(_piece) == parseString("Knight") ) {
            if((dy == 2 && dx == 1) || 
            (dy == 1 && dx == 2) || 
            (dy == -2 && dx == -1) || 
            (dy == -2 && dx == 1) || 
            (dy == -1 && dx == -2) || 
            (dy == -1 && dx == 2) || 
            (dy == 2 && dx == -1) || 
            (dy == 1 && dx == -2)) {
              return true;
             } 
             return false;
        } else if(parseString(_piece) == parseString("Bishop")) {
          if(absDy == absDx) return true;
          return false;
        } else if(parseString(_piece) == parseString("Rook")) {
          if(dx == 0 || dy == 0) return true;
          return false;
        } else if(parseString(_piece) == parseString("King")) {
          if(absDx == 1 && absDy == 1 || absDx == 1 && absDy == 0 || absDx == 0 && absDy == 1) 
            return true;
          return false;
        } else if(parseString(_piece) == parseString("Pawn")) {
          if (_isFirstMove) {
            if (dy == 1 && dx == 0) return true; 
            if (dy == 2 && dx == 0) return true; 
            return false;
          } else {
            if (dy == 1 && dx == 0) return true; 
            return false;
          }
        }
        return false;
    }

    function pushToFinalBoard(uint _y, uint _x, string memory _piece) internal {
      finalBoard.push(PiecePosition(_y, _x, _piece));
    }

    function parseString(string memory _letter) pure  internal returns (bytes32) {
      return keccak256(abi.encode(_letter));
    }

    function getBoard(uint _i) public view returns(uint, uint, string memory) {
      PiecePosition memory result = finalBoard[_i];
      return (result.yAxis, result.xAxis,result.piece);
    }

    function absolute(int _n) internal pure returns(int) {
        return _n >= 0 ? _n : -_n;
    }

}
