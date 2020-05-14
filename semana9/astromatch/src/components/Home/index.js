import React from 'react'
import axios from 'axios'

export class Home extends React.Component {
    state = {
        perfil: {}
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
                <button onClick={this.pegaPerfil}>Descartar</button>
                <button onClick={this.darMatch}>Dar Match</button>
            </div>
        );
    }
      
} 



