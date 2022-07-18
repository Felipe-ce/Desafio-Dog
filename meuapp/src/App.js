import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [dog, setDog] = useState([]);
  const [imagemAparecendo, setImagemAparecendo] = useState(false);

  //função para esse botão
  function dogApi() {
    //6º passo pegar a API e exibe no console.log
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      console.log(response);

      //9º chamar o setDog
      setDog(response.data.message);
      setImagemAparecendo(true);
    });
  }

  return (
    <>
      <h1>Clique no botão para carregar o proximo doguinho</h1>
      <button
        onClick={() => {
          dogApi();
        }}
      >
        Proximo{" "}
      </button>
      {imagemAparecendo && (
        <img className="imagem" src={dog} alt="imagem de doguinho" />
      )}
    </>
  );
}
