import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  if (!isOpen) {
    return <button onClick={handleOpen}>Open Modal</button>;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={handleClose}>Close Modal</button>
      </div>
    </div>,
    document.body
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Modal>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
