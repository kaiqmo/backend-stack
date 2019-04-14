import React, { Component } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

import "./styles.css";

// a logo vira variavel

export default class main extends Component {

//  estado do react eh uma variavel/objeto que eh armazenado na propria classe
  state = {
    newBox: '',    
  };

  handleSubmit = () => {
 
  }

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  }

  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt=""/>
                <input 
                  placeholder="Criar uma caixa"
                  value={this.state.newBox}
                  onChange={this.handleInputChange}
                 />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
  }
}
