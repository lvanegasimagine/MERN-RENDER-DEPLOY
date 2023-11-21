import './App.css'
import { useState } from 'react';

const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000' 
function App() {
  const [result, setResult] = useState('')
  return (
    <>
      <h1>Render App</h1>
      <div className="card">
        <button onClick={async () => {
          const res = await fetch(`${URL}/ping`)
          const data = await res.json()
          setResult(data)
        }}>
          Users

        </button>
          <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
