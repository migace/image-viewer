import React, { useState } from 'react';

export const ToggleButton = ({ openText, closeText, onOpen, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <button className="button is-danger is-light">{closeText}</button>
      ) : (
        <button className="button is-warning is-light">{openText}</button>        
      )}
    </>
  );
};
