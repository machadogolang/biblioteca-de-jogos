import { useState } from "react";
import Input from "./components/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css';

export default function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => [...state, game]);
  };

  const removeGame = (id) => {
    const game = games.filter((game) => game.id !== id);
    return setGames(game);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  // Notificação ao adicionar um jogo na biblioteca.
  const notify = () => toast(`"${title}" adicionado à lista de jogos.`);

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <Input value={title} onChange={({ target }) => setTitle(target.value)}>
          Título:
        </Input>
        <Input value={cover} onChange={({ target }) => setCover(target.value)}>
          Capa:
        </Input>
        <button type="submit" className="buttonAdd" onClick={notify}>
          <span className="button__text">Adicionar à biblioteca</span>
          <span className="button__icon">
            <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" height="24">
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </span>
        </button>
      </form>

      {/* div games para agrupar jogos adicionados */}
      <div className="games">
        {games.map((game) => (
          <div key={game.id} className="animate__animated animate__fadeInDown">
            <img src={game.cover} alt="" />
            <div className="contentGame">
              <p>{game.title}</p>
              <button className="buttonRemove" onClick={() => removeGame(game.id)}>
                <svg viewBox="0 0 448 512" className="svgIcon">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Atributos das notificações: */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </div>
  );
}
