import   React                            from 'react';
import                                         './App.css';
import { EntityTable}                     from './entityTable/entityTable.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Сущности...
        </p> 
        <EntityTable/>
      </header>
    </div>
  );
}

export default App;
