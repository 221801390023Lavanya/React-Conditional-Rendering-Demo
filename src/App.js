import { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Conditional Rendering Demo</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Component
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>Hello! I am visible.</h2>
        </div>
      )}
    </div>
  );
}

export default App;
