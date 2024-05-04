// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "hardhat/console.sol";

contract Chess {
    uint[8] xAxis;
    uint[8] yAxis;
    PiecePosition[] public finalBoard;
    
    struct PiecePosition {
        uint yAxis;
        uint xAxis;
        string piece;
        uint8 color; // 0 Null 1 Black 2 White
    }

    function initBoard() public returns (PiecePosition[] memory){
        for(uint i = 0; i < xAxis.length; i++) {
            for(uint j = 0; j < yAxis.length; j++){
              
                uint xIndex = i + 1;
                uint yIndex = j + 1;
                console.log("yindex",yIndex,xIndex);
                if(yIndex == 1 || yIndex == 8) {
                    if(xIndex == 1 || xIndex == 8) {
                      pushToFinalBoard(yIndex, xIndex,"Rook", 2);
                    } else if(xIndex == 2 || xIndex == 7) {
                      pushToFinalBoard(yIndex, xIndex,"Knight", 2);
                    } else if(xIndex == 3 || xIndex == 6) {
                       pushToFinalBoard(yIndex, xIndex,"Bishop",1);
                    } else if(xIndex == 4) {
                       pushToFinalBoard(yIndex, xIndex,"Queen",1);
                    } else if(xIndex == 5) {
                      pushToFinalBoard(yIndex, xIndex,"King",2);
                    }
                } else if(yIndex == 2 || yIndex == 7) {
                    pushToFinalBoard(yIndex, xIndex,"Pawn",2);
                } else {
                  pushToFinalBoard(yIndex, xIndex,"",0);
                }
            }
        }
        return finalBoard;
    }

    event ValueLogged(string message, int256 dx);

    function movePiece(uint _xFrom, uint _yFrom, uint _xTo, uint _yTo, string memory _piece, bool _isFirstMove) public returns(bool){
        if(checkLegalMove(_xFrom,_yFrom,_xTo,_yTo,_piece,_isFirstMove)) {
          for(uint i = 0; i < finalBoard.length; i++) {
            if(finalBoard[i].xAxis == _xFrom && finalBoard[i].yAxis == _yFrom) {
                finalBoard[i].xAxis = _xTo;
                finalBoard[i].yAxis = _yTo;
                return true; 
            }
          }
        }
        return false; 
    }

    function checkLegalMove(uint _xFrom, uint _yFrom, uint _xTo, uint _yTo, string memory _piece, bool _isFirstMove) pure public returns(bool) {
        int dx = int(_xTo) - int(_xFrom);
        int dy = int(_yTo) - int(_yFrom);
        int absDx = absolute(dx);
        int absDy = absolute(dy);

        if(parseString(_piece) == parseString("Knight") ) {
            if(absDx == 1 && absDy == 2 || absDx == 2 && absDy == 1) return true;
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
            if (dy == 1 && dx == 0 || dy == 2 && dx == 0) return true;
            return false;
          } else {
            if (dy == 1 && dx == 0) return true; 
            return false;
          }
        } else if(parseString(_piece) == parseString("Queen")) {
          if(((dx == 0 && dy != 0) || (dx != 0 && dy == 0) || (absolute(dx) == absolute(dy)))) {
            // do something
            return true;
          }
          return false;
        }
        return false;
    }

    function pushToFinalBoard(uint _y, uint _x, string memory _piece, uint8 _color) internal {
      finalBoard.push(PiecePosition(_y, _x, _piece,_color));
    }

    function parseString(string memory _str) pure  internal returns (bytes32) {
      return keccak256(abi.encode(_str));
    }

    function getBoard(uint _i) public view returns(uint, uint, string memory) {
      PiecePosition memory result = finalBoard[_i];
      return (result.yAxis, result.xAxis,result.piece);
    }

    function absolute(int _n) internal pure returns(int) {
        return _n >= 0 ? _n : -_n;
    }

}
