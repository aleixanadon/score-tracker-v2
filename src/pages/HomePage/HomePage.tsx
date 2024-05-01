import useScoreList from "../../common/hooks/useScoreList"
import AddPlayerInput from "./components/AddPlayerInput/AddPlayerInput"
import ScoreList from "./components/ScoreList/ScoreList"

const HomePage = () => {

  const { players, createPlayer } = useScoreList();

  return (
    <main>
      <AddPlayerInput onAddPlayer={createPlayer} />
      <ScoreList players={players} />
    </main>
  )
}

export default HomePage