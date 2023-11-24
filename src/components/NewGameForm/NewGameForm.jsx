import { useState } from "react";
import Input from "../TextInput/Input";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.css";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (title === "" || cover === "") {
      // Notificação se os inputs estiverem vazios.
      toast.error("Escreva nos campos!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      // Notificação ao adicionar um jogo na biblioteca.
      toast.success(`"${title}" adicionado à lista de jogos.`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      addGame({ title, cover });
      setTitle("");
      setCover("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={title} setValue={setTitle}>
        Título:
      </Input>
      <Input value={cover} setValue={setCover}>
        Capa:
      </Input>
      <button type="submit" className={styles.buttonAdd} onClick={handleSubmit}>
        <span className={styles.button__text}>Adicionar à biblioteca</span>
        <span className={styles.button__icon}>
          <svg viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" height="24">
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
          </svg>
        </span>
      </button>
      {/* Atributos das notificações: */}
      <ToastContainer />
    </form>
  );
}
