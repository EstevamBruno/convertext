import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Convert() {
  const [text, setText] = useState("");
  const [textTransform, setTextTransform] = useState("");
  const [textLength, setTextLength] = useState(0);

  function transformToUpperCase(e) {
    e.preventDefault();
    setTextTransform(text.toUpperCase());
  }

  function transformToLowerCase(e) {
    e.preventDefault();
    setTextTransform(text.toLowerCase());
  }

  function transformFirstToUpperCase(e) {
    e.preventDefault();
    setTextTransform(
      text.charAt(0).toUpperCase().concat(text.substring(1).toLowerCase())
    );
  }

  function transformAlphabeticalOrder(e) {
    e.preventDefault();
    setTextTransform(text.split(" ").sort().join(" "));
  }

  function transformReverse(e) {
    e.preventDefault();
    setTextTransform(text.split("").reverse().join(""));
  }

  function reset() {
    setText("");
    setTextTransform("");
  }

  useEffect(() => {
    setTextLength(text.length);
  }, [text]);

  return (
    <>
      <Header />
      <div className="actions-area">
        <div className="actions">
          <div className="action" onClick={transformToUpperCase}>
            Texto Maiúsculo
          </div>
          <div className="action" onClick={transformToLowerCase}>
            Texto Minúsculo
          </div>
          <div className="action" onClick={transformFirstToUpperCase}>
            1º Letra Maiúscula
          </div>
          <div className="action" onClick={transformAlphabeticalOrder}>
            Ordem Alfabética
          </div>
          <div className="action" onClick={transformReverse}>
            Inverter
          </div>
          <div className="action clear" onClick={reset}>
            Limpar Campos
          </div>
        </div>
      </div>
      <div className="text-area">
        <form>
          <textarea
            placeholder="Digite ou cole seu texto para utilizar nossas funcionalidades."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className="info-text">
          <span>
            Caracteres: <strong>{textLength}</strong>
          </span>
        </div>
        <textarea
          placeholder="Confira o resultado aqui."
          value={textTransform}
          onChange={() => {}}
        />
      </div>
      <Footer />
    </>
  );
}
