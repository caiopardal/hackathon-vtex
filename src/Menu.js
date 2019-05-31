import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import img from './images/logo.png'

export default class MenuJs extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item>
          <img src={img} style={{ minHeight: '50px', minWidth: '100px' }} alt="logo" />
        </Menu.Item>

        <Menu.Item
          name='infos'
          active={activeItem === 'infos'}
          onClick={this.handleItemClick}
        >
          Informações Iniciais
        </Menu.Item>

        <Menu.Item
          name='sexo'
          active={activeItem === 'sexo'}
          onClick={this.handleItemClick}
        >
          Sexo
        </Menu.Item>

        <Menu.Item
          name='faixa'
          active={activeItem === 'faixa'}
          onClick={this.handleItemClick}
        >
          Faixa Etária
        </Menu.Item>

        <Menu.Item
          name='comodo'
          active={activeItem === 'comodo'}
          onClick={this.handleItemClick}
        >
          Cômodo
        </Menu.Item>

        <Menu.Item
          name='item'
          active={activeItem === 'item'}
          onClick={this.handleItemClick}
        >
          Item
        </Menu.Item>

      </Menu>
    )
  }
}