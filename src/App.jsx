import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => [...state, game]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            required=""
            type="text"
            name="text"
            autoComplete="off"
            className="input"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <label className="user-label">Título:</label>
        </div>
        <div className="input-group">
          <input
            required=""
            type="text"
            name="text"
            autoComplete="off"
            className="input"
            value={cover}
            onChange={({ target }) => setCover(target.value)}
          />
          <label className="user-label">Capa:</label>
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <p>{game.title}</p>
              <button>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
