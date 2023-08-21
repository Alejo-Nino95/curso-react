import { TodoProvider } from '../TodoContext/index.jsx';
import { AppUI } from './AppUI.jsx';
import React from "react";

function App() {
  return (
    <TodoProvider>
          <AppUI />
    </TodoProvider>
  );
}

export default App;

