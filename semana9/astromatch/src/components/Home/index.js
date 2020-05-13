import React from 'react'

export class Home extends React.Component {
    render() {
        return <div className={'App'}>
            <header>
                <h2>Astromatch</h2>
                <button onClick={this.props.onClick}>Meus Matches</button>
            </header>
            <main>
                <img src="https://picsum.photos/200" alt=""/>
                <button>Descastar</button>
                <button>Match</button>
            </main>
        </div>
    }
}  

