import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
