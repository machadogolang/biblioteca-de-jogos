import Game from "./components/Game/Game";
import NewGameForm from "./components/NewGameForm/NewGameForm";
import useGameColletion from "./hooks/useGameColletion";

export default function App() {
  const { games, addGame, removeGame } = useGameColletion();
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      {/* div games para agrupar jogos adicionados */}
      <div className="games">
        {games.map((game) => (
          <Game key={game.id} title={game.title} cover={game.cover} onRemove={() => removeGame(game.id)} />
        ))}
      </div>
    </div>
  );
}
