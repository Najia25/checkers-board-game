export default {
  changeBlockColor (state, payload) {
    state.selectedBlockColor = payload
  },
  changePieceColorFirstTeam (state, payload) {
    state.selectedPieceColorFirstTeam = payload
  },
  changePieceColorSecondTeam (state, payload) {
    state.selectedPieceColorSecondTeam = payload
  },
  setSelectedPieceId (state, payload) {
    state.selectedPiece.pieceId = payload
  },
  setIndexOfBoardPiece (state, payload) {
    state.selectedPiece.indexOfBoard = payload
  }
}
