import React from "react";

function App() {
  let numbers = [1, 555, 3];
  return (
    <div className="App">
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button>Новое число</button>
    </div>
  );
}

export default App;
