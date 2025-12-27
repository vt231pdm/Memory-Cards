import "./App.css";
import { useState } from "react";
import { StartPage } from "./pages/StartPage";
import { GamePage } from "./pages/GamePage";
import { ResultModal } from "./components/ResultModal";
import { Layout } from "./components/Layout";

function App() {
  const [screen, setScreen] = useState("start");
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFinish = () => setShowModal(true);

  const restartCurrent = () => {
    setShowModal(false);
    setScreen("reset");
    setTimeout(() => setScreen("game"), 10);
  };

  const goToStart = () => {
    setShowModal(false);
    setScreen("start");
  };

  return (
    <Layout>
      {screen === "start" && <StartPage onStart={() => setScreen("game")} />}

      {screen === "game" && (
        <GamePage setMoves={setMoves} onFinish={handleFinish} />
      )}

      {showModal && (
        <ResultModal
          moves={moves}
          onRestart={restartCurrent}
          onNewGame={goToStart}
        />
      )}
    </Layout>
  );
}

export default App;
