import { useState } from "react";

export default function useGameColletion() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("lib-games");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("lib-games", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("lib-games", JSON.stringify(newState));
      return newState;
    });
  };

  return { games, addGame, removeGame };
}
