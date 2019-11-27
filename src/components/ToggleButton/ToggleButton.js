import React, { useEffect, useState } from 'react';

export const OPEN_BUTTON = 'open-btn';
export const CLOSE_BUTTON = 'close-btn';

export const ToggleButton = ({ state = false, openText, closeText, onOpen = () => {}, onClose = () => {} }) => {
  const [open, setOpen] = useState(state);

  const openHandler = () => {
    setOpen(!open);
    onOpen()
  }

  const closeHandler = () => {
    setOpen(!open);
    onClose();
  }

  return (
    <>
      {open ? (
        <button
          className={`button is-danger is-light is-hovered ${CLOSE_BUTTON}`}
          onClick={closeHandler}
        >
          {closeText}
        </button>
      ) : (
        <button 
          className={`button is-warning is-light is-hovered ${OPEN_BUTTON}`}
          onClick={openHandler}
        >
          {openText}
        </button>        
      )}
    </>
  );
};
