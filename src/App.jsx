import { useState } from 'react'
import './App.css'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function App() {

  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState("");

  async function jogo() {
    const response = await fetch("https://opentdb.com/api.php?amount=30&category=15");

    const json = await response.json();

    const randomnum = Math.floor(Math.random() * 99);
    const randomjogos = json.data.jogos[randomnum];

    setType(randomjogos.type);
    setDifficulty(randomjogos.difficulty);
    setQuestion(randomjogos.question);
  }

  return (
    <>
      <h1 >{type}</h1>
      <p>{difficulty}</p>
      <p>{question}</p>
      <button onClick={jogo}>
        Trocar
        </button>
    </>
  );

}

