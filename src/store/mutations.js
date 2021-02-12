export default {
  changeBlockColor (state, payload) {
    state.selectedBlockColor = payload
  },
  changePieceColorFirstTeam (state, payload) {
    state.selectedPieceColorFirstTeam = payload
  },
  changePieceColorSecondTeam (state, payload) {
    state.selectedPieceColorSecondTeam = payload
  }
}
