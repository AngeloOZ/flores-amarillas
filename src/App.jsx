import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Flor } from "./components/Flor/flor";

function App() {
  const [nombre, setNombre] = useState("");
  const audio = useRef(null);

  useEffect(() => {
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    const nombre = params.get("nombre");
    setNombre(nombre);
  }, []);

  useEffect(() => {
    if (audio.current) {
      audio.current.play();
      audio.current.volume = 0.2;
    }
  }, [audio]);

  return (
    <>
      <main className="main">
        <h1 className="title">Para ✨{nombre}✨</h1>
        <div className="container_flores">
          <Flor hideLeaf className="flor1" />
          <Flor hideLeaf2 hideLeaf className="flor2" />
          <Flor hideLeaf2 className="forBase" />
          <Flor hideLeaf2 hideLeaf className="flor3" />
          <Flor hideLeaf2 className="flor4" />
        </div>
        <p className="parrafo">
          🌼 ¡Hola! Espero que en tu camino hoy, encuentres tantas flores
          amarillas 🌻 como las que Floricienta tenía en sus sueños. Que cada
          una de esas flores te traiga alegría 😊, esperanza 🌟 y amor ❤️.
          ¡Deseo que tengas un día mágico ✨ y lleno de encanto, al mejor estilo
          de Floricienta! ¡Feliz día! 🌈🌼
        </p>
      </main>
      <audio ref={audio} src="audio/flores2.mp3" />
    </>
  );
}

export default App;
