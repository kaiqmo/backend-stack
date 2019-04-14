import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import api from "../../services/api";
import {MdInsertDriveFile} from 'react-icons/md';

import "./styles.css";

export default class box extends Component {
  state = {box:''};
  async componentDidMount(){
    // desparado de forma automatica qd vai para a tela
    const box = this.props.match.params.id;
    // box carrega o id que foi criado
    const response = await api.get(`boxes/${box}`);
    // toda info que for manipular no componente guarda na variavel estado
    this.setState({ box: response.data});
  }
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt=""/>
          <h1>{this.state.box.title}</h1>
        </header>
        {/* listagem de arquivo  ul melhor */}
        <ul>
          {/* no react da pra inserir js de qlqr tipo */}
          { this.state.box.files && this.state.box.files.map( file => (
            // faz o retorno de forma automatica  com () ao invez de {}
          <li>
            <a className="fileInfo" href={file.url} target="blank">
              <MdInsertDriveFile size={24} color="#a5cfff"/>
              <strong>{file.title}</strong>
            </a>
            <span>{file.createdAt} </span>
          </li>
          )) }
        </ul>
      </div>
    )
  }
}
