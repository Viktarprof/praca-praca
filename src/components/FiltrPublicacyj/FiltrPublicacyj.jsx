import React, { useState } from "react";
import s from "./FiltrPublicacyj.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import { content } from "../../data";

function FiltrPublicacyj() {
  const [active, setActive] = useState(true);
  const [selectedText, setSelectedText] = useState("");

  const isOpenWindow = () => {
    setActive(false);
  };

  const isCloseWindow = () =>{
    setActive(true);
  }

  const selectedCheckboxes = (textSelect) => {
    setSelectedText(textSelect.join(", "));
  }

  return (
    <div className={s.containerFilter}>
      <h3>Filtruj:</h3>
      {active ? (
        <div onClick={isOpenWindow} className={s.filter}>
          <p>{selectedText || "wszystkie publikacje"}</p>
        </div>
      ) : (
        <div className={s.window}>
          <ModalWindow 
            isCloseWindow={isCloseWindow} 
            selectedCheckboxes={selectedCheckboxes} 
            content={content}/>
        </div>
      )}
    </div>
  );
}

export default FiltrPublicacyj;