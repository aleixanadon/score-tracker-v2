import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PlayerState {
  id: string;
  playerName: string;
  points: number;
};

export interface PlayerStorageState {
  players: PlayerState[]
};

const initialState: PlayerStorageState = {
  players: []
};

export const playerStorageSlice = createSlice({
  name: 'playerStorage',
  initialState,
  reducers: {
    insertPlayer: (
      state: PlayerStorageState, 
      action: PayloadAction<string>
    ) => {
      state.players = [
        ...state.players, {
          id: self.crypto.randomUUID(),
          playerName: action.payload,
          points: 0,
        }
      ];
    },
    updatePlayer: (
      state: PlayerStorageState, 
      action: PayloadAction<{ id: string, newPlayerName: string, newPlayerPoints: number}>
    ) => {
      let { id, newPlayerName, newPlayerPoints } = action.payload;
      state.players = state.players.map((player: PlayerState) => player.id === action.payload.id ? {
        id: id,
        playerName: newPlayerName,
        points: newPlayerPoints
      } : player);
    },
    deletePlayer: (state: PlayerStorageState, action: PayloadAction<string>) => {
      let newPlayerStorage = state.players.filter((player) => player.id !== action.payload);
      state.players = newPlayerStorage;
    },
  }
});

export const {
  insertPlayer,
  updatePlayer,
  deletePlayer,
} = playerStorageSlice.actions

export default playerStorageSlice.reducer