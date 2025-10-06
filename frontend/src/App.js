import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = 'https://ebrkiusmchvc.us-west-1.clawcloudrun.com';

function App() {
  const [frases, setFrases] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    fetchFrases();
  }, []);


const fetchFrases = async () => {
  const res = await axios.get(`${BACKEND_URL}/frases`);
  setFrases(res.data);
};

const agregarFrase = async () => {
  if (!texto) return;
  await axios.post(`${BACKEND_URL}/frases`, { texto });
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
