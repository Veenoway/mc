export const chessABI = [
  {
    inputs: [],
    name: "initBoard",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "xAxis",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "yAxis",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "piece",
            type: "string",
          },
        ],
        internalType: "struct Chess.PiecePosition[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_xFrom",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yFrom",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xTo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yTo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_piece",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isFirstMove",
        type: "bool",
      },
    ],
    name: "movePiece",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "dx",
        type: "int256",
      },
    ],
    name: "ValueLogged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_xFrom",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yFrom",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xTo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_yTo",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_piece",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_isFirstMove",
        type: "bool",
      },
    ],
    name: "checkLegalMove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "finalBoard",
    outputs: [
      {
        internalType: "uint256",
        name: "xAxis",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "yAxis",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "piece",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
    ],
    name: "getBoard",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
