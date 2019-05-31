import React from 'react';
import { Image, Form, Button } from 'semantic-ui-react';
import img from './images/logo.png';
import './perguntas.css'

export default class FormJs extends React.Component {
  render() {
    return (
        <div>
            <Image src={img} />
            <div style={{ textAlign: 'center' }}>
                <span className="textInfos" style={{ fontSize: '35px', fontWeight: 'bold' }}>Informações Pessoais</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10rem' }}>
                <Form>
                    <Form.Field style={{ marginTop: '20px' }}>
                        <label style={{ fontSize: '20px', marginBottom: '20px' }}>Nome</label>
                        <input placeholder='Nome' style={{ borderRadius: '1rem' }} />
                    </Form.Field>
                    <Form.Field>
                        <label style={{ fontSize: '20px', marginBottom: '20px' }}>CPF</label>
                        <input placeholder='CPF' style={{ borderRadius: '1rem' }} />
                    </Form.Field>

                    <Button onClick = {() => this.props.onButtonClick()}  className="botaoGeral">Submit</Button>
                </Form>
            </div>
        </div>
    );
  }
}
