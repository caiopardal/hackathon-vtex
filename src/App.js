import React from 'react';
import Pergunta from './perguntas'
import MenuJs from './Menu'
import FormJs from './Form'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      botoes: [
              ['forms'], //0
              ['sexo', 'homem', 'mulher'], //1
              ['faixa etaria', '10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '60 - 70'], //2
              ['cômodo de interesse do cliente', 'cozinha', 'quarto', 'sala', 'banheiro'], //3
              ['itens', 'televisor', 'sofá', 'tapete'], //4
              ['A compra foi bem sucedida?', 'sim', 'não'],
              ['Obrigado!']
      ],
      key: 0
    }
  }
  render() {
    console.log(this.state.key);
    return(
      <div>
        <Pergunta onButtonClick={ () => {if(this.state.key < this.state.botoes.length - 1) {this.setState({ key: this.state.key + 1 }) }} } perguntas={this.state.botoes} chave ={this.state.key} />
      </div>
    )
  }
}
