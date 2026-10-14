import { useState } from 'react'

const API = import.meta.env.VITE_API_URL

function App() {
  const [status, setStatus] = useState('Not called yet')

  const checkApi = async () => {
    try {
      const res = await fetch(`${API}/api/menu`)
      setStatus(`Status: ${res.status}`)
    } catch (e) {
      setStatus(`Error: ${e.message}`)
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>CampusEats</h1>
      <p>API URL: {API}</p>
      <button onClick={checkApi}>Test API</button>
      <p>{status}</p>
    </div>
  )
}

export default App