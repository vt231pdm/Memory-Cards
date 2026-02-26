import CookieConsent from "react-cookie-consent";
import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useGameStore } from "./store/useGameStore";
import { StartPage } from "./pages/StartPage";
import { GamePage } from "./pages/GamePage";
import { Leaderboard } from "./pages/Leaderboard";
import { ResultModal } from "./components/ResultModal";
import { Layout } from "./components/Layout";
import styles from "./styles/App.module.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);
  const addResult = useGameStore((state) => state.addResult);

  const lastSavedTime = useRef(0);

  const handleFinish = (finalMoves, userId) => {
    const now = Date.now();
    if (now - lastSavedTime.current < 1500) return;

    lastSavedTime.current = now;
    setMoves(finalMoves);

    addResult({
      id: now,
      player: userId || "Гравець",
      moves: finalMoves,
      date: new Date().toLocaleString(),
    });

    setShowModal(true);
  };

  return (
    <Router>
      <div className={styles.appLayout}>
        <Layout>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route
              path="/game/:userId"
              element={<GamePage onFinish={handleFinish} />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>

        <CookieConsent
          location="bottom"
          buttonText="Прийняти"
          cookieName="memoryGame_GDPR_Consent"
          expires={150}
          overlay
          style={{
            background: "#2d3436",
            color: "#ffffff",
            fontSize: "14px",
            padding: "20px",
            textAlign: "center",
          }}
          buttonStyle={{
            background: "#4a86b8",
            color: "#ffffff",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Для використання проєкту потрібно прийняти Cookie
          <a
            href="/PRIVACY_POLICY.txt"
            style={{ color: "#ff793f", marginLeft: "8px" }}
          >
            Докладніше
          </a>
        </CookieConsent>

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
      </div>
    </Router>
  );
}

export default App;
