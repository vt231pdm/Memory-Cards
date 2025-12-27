import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { StartPage } from "./pages/StartPage";
import { GamePage } from "./pages/GamePage";
import { ResultsPage } from "./pages/ResultsPage";

function App() {
  const [screen, setScreen] = useState("start");
  const [moves, setMoves] = useState(0);

  return (
    <Layout moves={screen === "game" ? moves : undefined}>
      {screen === "start" && <StartPage onStart={() => setScreen("game")} />}

      {screen === "game" && (
        <GamePage
          moves={moves}
          setMoves={setMoves}
          onFinish={() => setScreen("results")}
        />
      )}

      {screen === "results" && (
        <ResultsPage
          finalMoves={moves}
          onRestart={() => {
            setScreen("start");
            setMoves(0);
          }}
        />
      )}
    </Layout>
  );
}

export default App;
