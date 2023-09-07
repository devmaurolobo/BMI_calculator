
import { useState } from 'react';
import './app.css';


export default function App(){
  const [mensagem,setMensagem] = useState('');
  const [peso,setPeso]= useState('');
  const [altura,setAltura]= useState('');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMensagem(`Você esta abaixo do peso!!! Seu IMC: ${imc.toFixed(2)}`);
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem(`Peso ideal!!! Seu IMC: ${imc.toFixed(2)}`);
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem(`Você esta levemente acima do peso!!! Seu IMC: ${imc.toFixed(2)}`);
    }else if(imc > 34.9){
      setMensagem(`Cuidado obesidade!!! Seu IMC: ${imc.toFixed(2)}`);
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
        type = "text" 
        placeholder="Peso em (Kg) Ex: 90"
        value={peso}
        onChange={ (event) => setPeso(event.target.value)}
        />
        <input 
        type = "text" 
        placeholder="Altura em (cm) Ex: 180"
        value={altura}
        onChange={ (event) => setAltura(event.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
        <h2>{mensagem}</h2>

      </div>
    </div>
  )
}