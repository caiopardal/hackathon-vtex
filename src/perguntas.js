import React from 'react'
import {Button} from 'semantic-ui-react'
import './perguntas.css'
import firebase from './utils/firebase'

export default class Pergunta extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chave: this.props.chave
    }
    this.filtraArray = this.filtraArray.bind(this);
  }

  filtraArray(){
    console.log(this.props.perguntas)
    console.log(this.props.chave)
    let palavra;
    let arrayFiltrado = this.props.perguntas[this.props.chave].map( (pergunta, i) => {
      if(i == 0){
        palavra = pergunta
        return(
          <Button className="botaoGeral">
            {pergunta}
          </Button>
        );
      }
      else{
        return(
          <Button onClick = {() => this.props.onButtonClick()} className="botao">
            {pergunta}
          </Button>
        );
      }
    })
    return arrayFiltrado
  }

  render(){
    let perguntas = this.filtraArray();
    return(
      <div className = "botoes">
        <Button.Group vertical size="massive">
          {perguntas}
        </Button.Group>
      </div>
    );
  }
}
