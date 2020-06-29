import React from 'react'

export class MatchesList extends React.Component {
    render() {
        return <div className={'Matches'}>
            <header>
            <h2>Astromatch</h2>
            <button onClick={this.props.onClick}>Voltar para Home</button>
            </header>
            <main>
                <ul>
                    <li>
                        <img/>
                        <p>Nome:</p>
                    </li>
                </ul>
                <button>Limpar Descartados e Matches</button>
            </main> 
        </div>
    }
}  
