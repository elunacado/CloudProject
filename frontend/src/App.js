import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [frases, setFrases] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    fetchFrases();
  }, []);

  const fetchFrases = async () => {
    const res = await axios.get('http://localhost:5000/frases');
    setFrases(res.data);
  };

  const agregarFrase = async () => {
    if (!texto) return;
    await axios.post('http://localhost:5000/frases', { texto });
    setTexto('');
    fetchFrases();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Frases App</h1>
      <input 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe una frase" 
      />
      <button onClick={agregarFrase}>Agregar</button>
      <ul>
        {frases.map(f => <li key={f.id}>{f.texto}</li>)}
      </ul>
    </div>
  );
}

export default App;
