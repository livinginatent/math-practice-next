import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  score: number;
  lives:number;
  time:number;
  gameOver:boolean
}

const initialState: GameState = {
  score: 0,
  lives:3,
  time:20,
  gameOver:false
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increaseScore: (state) => {
      state.score += 100;
    },
    decreaseScore: (state) => {
      state.score -= 100;
    },
    increaseLives: (state, action: PayloadAction<number>) => {
      state.lives += action.payload;
    },
    decreaseLives:(state)=>{
        state.lives-=1
    },
    gameOver:(state)=>{
      state.gameOver=!state.gameOver
      
    },
    resetGame:()=>{
      return initialState
    }
 
  },
});

export const { increaseScore, decreaseScore,increaseLives,decreaseLives,gameOver,resetGame} = gameSlice.actions;

export default gameSlice.reducer;
