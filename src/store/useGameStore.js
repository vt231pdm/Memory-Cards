import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGameStore = create(
  persist(
    (set) => ({
      cardCount: Number(localStorage.getItem("gamePairs")) || 8,

      history: [],

      setCardCount: (count) => set({ cardCount: count }),

      addResult: (result) =>
        set((state) => ({
          history: [result, ...state.history].slice(0, 10),
        })),

      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "game-storage",
    }
  )
);
