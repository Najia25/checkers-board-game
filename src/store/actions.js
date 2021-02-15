export default {

  checkValidMoves ({ commit, dispatch }, pieceId) {
    commit('setSelectedPieceId', pieceId)
    dispatch('findPieceOnBoard')
    // getAvailableSpaces()
  },

  // gets ID and index of the board cell its on
  findPieceOnBoard ({ state, commit }) {
    const indexOfBoardPiece = state.board.indexOf(state.selectedPiece.pieceId)
    commit('setIndexOfBoardPiece', indexOfBoardPiece)
  }
}
