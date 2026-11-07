'use strict';
// board.js - draw cards, flip, match

// game state
const state = {
  flipped: [],   // cards face up now (max 2)
  moves: 0,
  pairsFound: 0,
  totalPairs: 0,
  locked: false, // true while two wrong cards show
  onWin: null
};

// draw the board from the deck
export function renderBoard(deck, boardEl, onWin) {
  // TODO
}

// handle a card click
function handleFlip(cardEl) {
  // TODO
}

// check the two flipped cards
function checkMatch() {
  // TODO
}

// reset for a new game
export function resetState() {
  // TODO
}
