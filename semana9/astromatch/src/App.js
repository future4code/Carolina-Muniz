import React from 'react';
import { MatchesList } from './components/MatchesList';
import { Home } from './components/Home';

export class App extends React.Component {
  state = {
    vaiParaListaDeMatches: false
  }

  onClickIrListaMatches = () => {
    this.setState({ vaiParaListaDeMatches: true })
  }

  onClickVoltarHome = () => {
    this.setState({ vaiParaListaDeMatches: false })
  }
 
  render() {
    if(this.state.vaiParaListaDeMatches) {
      return <MatchesList onClick={this.onClickVoltarHome}/>
    } else {
      return <Home onClick={this.onClickIrListaMatches}/>
    }
  }
}  

export default App;
