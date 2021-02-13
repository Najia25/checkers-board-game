// import store from './index'

export default {
  selectedBlockColor: "#374360",
  blockColors: ["#374360", "#00796B", "#0277BD"],
  pieceColors: ["Red","Black","Blue","Yellow", "Orange"],
  selectedPieceColorFirstTeam: "Red",
  selectedPieceColorSecondTeam: "Black",
  board: [
    1, null, 3, null, 5, null, 7, null,
    null, 10, null, 12, null, 14, null, 16,
    17, null, 19, null, 21, null, 23, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, 42, null, 44, null, 46, null, 48,
    49, null, 51, null, 53, null, 55, null,
    null, 58, null, 60, null, 62, null, 64
  ],
  player: {
    turn: true, // if true firstteam's turn, else second team
    playerPieces: []
  },
  selectedPiece: {
    pieceId: -1,
    indexOfBoard: -1,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false
  }
}
