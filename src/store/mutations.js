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
  setPlayerPieces (state, payload) {
    state.player.playerPieces.push(payload)
  }
}
