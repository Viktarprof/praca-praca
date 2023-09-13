import React, { useState } from "react";
import s from "./ModalWindow.module.css";
import Input from "../UI/Input/Input";
import arrow from '../../media/arrow.png'

function ModalWindow({ content, isCloseWindow, selectedCheckboxes }) {

  const [active, setActive] = useState(
    content.map((group) => group.map(() => false))
  );

  const handleCheckboxChange = (groupIndex, elIndex) => {
    const newActiveStates = [...active];
    newActiveStates[groupIndex][elIndex] =
      !newActiveStates[groupIndex][elIndex];
    setActive(newActiveStates);

  const selected = [];
    content.forEach((group, groupIndex) => {
      group.forEach((el) => {
        if (newActiveStates[groupIndex][el.id]) {
          selected.push(el.title);
        }
      });
    });
    selectedCheckboxes(selected);
  };

  return (
    <>
      {content.map((group, groupIndex) => (
        <div className={s.groupFilter} key={groupIndex}>
          {group.map((el) => (
            <div className={s.itemList} key={el.id}>
              {el.id === 1 ? (
                <h4>{el.title}</h4>
              ) : (
                <div
                  className={active[groupIndex][el.id] ? s.activeItem : s.item}
                  key={el.id}
                >
                  <Input
                    id={`${groupIndex}-${el.id}`}
                    style="checkbox"
                    type="checkbox"
                    onChange={() => handleCheckboxChange(groupIndex, el.id)}
                    checked={active[groupIndex][el.id]}
                  />
                  <p>{active[groupIndex][el.id] ? "Selected" : el.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      <img onClick={isCloseWindow} src={arrow} alt="arrow"/>
    </>
  );
}

export default ModalWindow;