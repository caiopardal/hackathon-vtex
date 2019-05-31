import React from 'react'
import {Button, Image, Form} from 'semantic-ui-react'
import './perguntas.css'
import firebase from './utils/firebase'
import FormJs from './Form.js'
import img from './images/logo.png';

export default class Pergunta extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chave: this.props.chave,
      cpf: "",
      nome: ""
    }
    this.filtraArray = this.filtraArray.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.atualizarDados = this.atualizarDados.bind(this);
    this.atualizarDadosNomeCpf = this.atualizarDadosNomeCpf.bind(this);

   }

  atualizarDados(pergunta){
    let datas = this.props.perguntas[this.props.chave][0];
    const dia = new Date().getDate();
    const mes = new Date().getMonth();
    const ano = new Date().getYear();
    firebase.database().ref(this.state.cpf + "/" + dia + "-" + mes + "-" + ano).update({
      [datas]: pergunta
    })
  }

  atualizarDadosNomeCpf(nome, cpf){
    console.log(this.state.nome);
    console.log(this.state.cpf);
    firebase.database().ref(this.state.cpf).update({
      nome: this.state.nome,
      cpf: this.state.cpf
    })
  }


  filtraArray(){
    console.log(this.props.perguntas)
    console.log(this.props.chave)
    let arrayFiltrado = this.props.perguntas[this.props.chave].map( (pergunta, i) => {
      if(i == 0){
        return(
          <h1 className="titulo">{pergunta}</h1>
        );
      }
      else{
        return(
          <Button onClick = {() => {this.props.onButtonClick();this.atualizarDados(pergunta)}} className="botao">
            {pergunta}
          </Button>
        );
      }
    })
    return arrayFiltrado
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render(){
    let perguntass = this.filtraArray();
    if(this.props.perguntas[this.props.chave].length == 1 && this.props.perguntas[this.props.chave][0] == 'forms'){
      return(
        <div>
            <Image src={img} className="img"/>
            <div style={{ textAlign: 'center' }}>
                <span className="textInfos" style={{ fontSize: '35px', fontWeight: 'bold' }}>Informações Pessoais</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10rem' }}>
                <Form>
                    <Form.Field style={{ marginTop: '20px' }}>
                        <label style={{ fontSize: '20px', marginBottom: '20px' }}>Nome</label>
                        <input placeholder='Nome' id="nome" style={{ borderRadius: '1rem', borderColor: '#F71963', borderWidth: '.17rem' }} value={this.state.nome} onChange = {this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{ fontSize: '20px', marginBottom: '20px' }}>CPF</label>
                        <input placeholder='CPF' id="cpf" style={{ borderRadius: '1rem', borderColor: '#F71963', borderWidth: '.17rem'}} value={this.state.cpf} onChange = {this.handleChange}/>
                    </Form.Field>

                    <Button onClick = {() => {this.props.onButtonClick();this.atualizarDadosNomeCpf()}}  className="botaoGeral">Enviar</Button>
                </Form>
            </div>
        </div>
      )
    }
    else{
      return(
        <div>
          <Image src={img} className="img"/>
          <div className = "botoes">
            <Button.Group vertical size="massive">
              {perguntass}
            </Button.Group>
          </div>
        </div>
      );
    }
  }
}
