import React from "react";
import "./styles.css";
import { FiGithub } from "react-icons/fi";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="content">
          <h1>Convertexto</h1>
          <span>Transforme seu texto com apenas um click.</span>
        </div>
        <a target="_blank" href="https://github.com/EstevamBruno">
          <FiGithub size={24} color="#8661C1" />
        </a>
      </div>
    </>
  );
}
