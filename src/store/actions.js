export default {
  getPlayerPieces ({ commit, state }, piece) {
    if(state.player.turn) {
      if(piece.isFirstTeam) {
        commit('setPlayerPieces', piece.id)
      }
    } else {
      if(piece.isSecondTeam) {
        commit('setPlayerPieces', piece.id)
      }
    }
  }
}
