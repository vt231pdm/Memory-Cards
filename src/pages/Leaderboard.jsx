import React from "react";
import { useGameStore } from "../store/useGameStore";
import { useNavigate } from "react-router-dom";
import styles from "../styles/App.module.css";

export const Leaderboard = () => {
  const history = useGameStore((state) => state.history);
  const clearHistory = useGameStore((state) => state.clearHistory);
  const navigate = useNavigate();

  const sortedHistory = [...history].sort((a, b) => a.moves - b.moves);

  return (
    <div className={styles.content}>
      <div className={styles.startCard} style={{ maxWidth: "700px" }}>
        <h1>🏆 Таблиця результатів</h1>
        {history.length === 0 ? (
          <p style={{ margin: "20px 0" }}>Ігор ще не було. Будьте першим!</p>
        ) : (
          <div style={{ overflowX: "auto", width: "100%" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr
                  style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}
                >
                  <th style={{ padding: "10px" }}>Гравець</th>
                  <th style={{ padding: "10px" }}>Хиби</th>
                  <th style={{ padding: "10px" }}>Дата</th>
                </tr>
              </thead>
              <tbody>
                {sortedHistory.map((item) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px" }}>{item.player}</td>
                    <td style={{ padding: "10px", fontWeight: "bold" }}>
                      {item.moves}
                    </td>
                    <td style={{ fontSize: "0.8rem", color: "#666" }}>
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className={styles.modalButtons} style={{ marginTop: "30px" }}>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            На головну
          </button>
          {history.length > 0 && (
            <button className="btn btn-secondary" onClick={clearHistory}>
              Очистити історію
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
