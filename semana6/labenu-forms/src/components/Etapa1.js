import React from 'react';

export class Etapa1 extends React.Component {
  render() {
    return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form>
            <div>
                <label for="nome">1. Qual o seu nome?</label>
                <input type="text" id="nome" />
            </div>
            <div>
                <label for="number">2. Qual a sua idade?</label>
                <input type="number" id="number" />
            </div>
            <div>
                <label for="email">3. Qual o seu e-mail?</label>
                <input type="email" id="email" />
            </div>    
            <div>
                <label for="nome">4. Qual o grau de escolaridade?</label>
                    <select>
                        <option value="emIncompleto">Ensino Médio Incompleto</option>
                        <option value="semCompleto">Ensino Médio Completo</option>
                        <option value="esIncompleto">Ensino Superior Incompleto</option>
                        <option value="esCompleto">Ensino Superior Completo</option>
                    </select>
            </div>
        </form>   
    </div>
    )
  }
}

export default Etapa1;
