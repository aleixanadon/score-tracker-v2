import './scoreList.css';
import { Player } from "../../../../common/hooks/useScoreList";
import ScoreItem from "../ScoreItem/ScoreItem";

const ScoreList: React.FC<{players: Player[]}> = ({ players }) => {
  return (
    <ul className="score-list">
      {
        players.map((player: Player, index: number) => (
          <ScoreItem key={index} {...player} />
        ))
      }
    </ul>
  )
}

export default ScoreList