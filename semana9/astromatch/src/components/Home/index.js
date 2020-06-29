import React from 'react'
import axios from 'axios'

export class Home extends React.Component {
    state = {
        vaiParaListaDeMatches: false, 
        perfil: {}
    }
    
  onClickIrListaMatches = () => {
    this.setState({ vaiParaListaDeMatches: true })
  }

    componentDidMount() {
        this.pegaPerfil()
    }
    
    pegaPerfil = () => {
        axios
          .get(
            'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina-muniz-julian/person',
            {
              headers: {
                Authorization: "carolina-muniz-julian"
              }
            }
          )
          .then(resposta => {
            this.setState({perfil: resposta.data.profile})
          })
          .catch(error => {
            console.log(error);
          });
      }

      escolherPessoa = () => {

      }

      darMatch = () => {
        this.pegaPerfil()
        this.escolherPessoa()
      }
    
    render() {
        console.log(this.state.perfil)
        return(
            <div className='Home'>
              <h1>astromatch</h1>
              <div><img src={this.state.perfil.photo}/></div>
              <span><strong>{this.state.perfil.name}, </strong></span>
              <span>{this.state.perfil.age} anos</span>
              <p>{this.state.perfil.bio}</p>
              <button onClick={this.pegaPerfil}>Descartar</button>
              <button onClick={this.darMatch}>Dar Match</button>
            </div>
        );
    }
      
} 



