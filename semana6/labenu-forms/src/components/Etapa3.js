import React from 'react';

export class Etapa3 extends React.Component {
    render() {
    return (
      <div className="formulario3"> 
  
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <form>
    <       div>
                <label for="nome">5. Por que você não terminou um curso de graduação?</label>
                <input type="text" id="nome" />
            </div>
            <div>
                <label for="nome">Você fez algum curso complementar?</label>
                    <select>
                        <option value="cursoTecnico">Curso técnico</option>
                        <option value="cursoIngles">Cursos de inglês</option>
                        <option value="nenhumCurso">Não fiz curso complementar</option>
                    </select>

            </div>
        </form>
    </div>
    )}
}
export default Etapa3;    