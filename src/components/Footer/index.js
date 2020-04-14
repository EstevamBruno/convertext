import React from "react";
import "./styles.css";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        <span>Desenvoldido por</span> <span>Estevam Bruno</span>
      </p>
      <p>
        <a target="_blank" href="https://github.com/EstevamBruno">
          GitHub <FiGithub className="git-hub" size={24} color="#8661C1" />
        </a>
      </p>
    </div>
  );
}
