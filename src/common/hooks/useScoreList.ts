import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { RootState } from "../../store";
import * as playerStorageReducer from '../../features/playerStorageSlice'
import { useEffect } from "react";

export interface Player {
  id: string; 
  playerName: string; 
  points: number;
}

const useScoreList = () => {

  const dispatch = useDispatch();
  const { players } = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(players)
  }, [players])

  const createPlayer = (playerName: string) => {
    dispatch(playerStorageReducer.insertPlayer(playerName));
  };

  const updatePlayer = (
    id: string, 
    newPlayerName: string, 
    newPlayerPoints: number
  ) => {
    dispatch(playerStorageReducer.updatePlayer({ id, newPlayerName, newPlayerPoints }));
  };

  const deletePlayer = (id: string) => {
    dispatch(playerStorageReducer.deletePlayer(id));
  };
  
  return {
    players,
    createPlayer,
    updatePlayer,
    deletePlayer,
  }
}

export default useScoreList