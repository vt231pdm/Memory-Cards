import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { GamePage } from "./pages/GamePage";
import { ResultModal } from "./components/ResultModal";
import { Layout } from "./components/Layout";
import styles from "./styles/App.module.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);

  const handleFinish = (finalMoves) => {
    setMoves(finalMoves);
    setShowModal(true);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/game/:userId"
            element={<GamePage onFinish={handleFinish} />}
          />
        </Routes>
      </Layout>

      {showModal && (
        <ResultModal
          moves={moves}
          onRestart={() => {
            setShowModal(false);
            window.location.reload();
          }}
          onNewGame={() => {
            setShowModal(false);
            window.location.href = "/";
          }}
        />
      )}
    </Router>
  );
}

export default App;
