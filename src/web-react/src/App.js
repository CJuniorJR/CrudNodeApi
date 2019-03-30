import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import axios from 'axios';
import $ from 'jquery';
import InputCustomizado from './components/InputCustomizado';

class App extends Component {

  constructor() {
    super();
    this.state = {lista: [],nome:"",email:"",login:"",senha:""};
    this.Cadastrar = this.Cadastrar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

componentDidMount(){
  this.Listar();
}

Listar(){
  axios.get('http://localhost:8000/user').then(function(resposta){
    this.setState({lista: $(resposta.data)});
  }.bind(this));
}

Cadastrar(event){
  event.preventDefault();
  
  let usuario = {
    nome: this.state.nome,
    email: this.state.email,
    login: this.state.login,
    senha: this.state.senha
  }

  axios.post('http://localhost:8000/user',usuario).then(function(response){
    this.Listar();
  }.bind(this));
}

setNome(event){
  this.setState({nome: event.target.value});
}

setEmail(event){
  this.setState({email: event.target.value});
}

setLogin(event){
  this.setState({login: event.target.value});
}

setSenha(event){
  this.setState({senha: event.target.value});
}

  render() {
    return (
<div id="layout">
    
    <a href="#menu" id="menuLink" className="menu-link">
        
        <span></span> 
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Cadastrar usuario</a></li>

                
            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1>Cadastro de Autores</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.Cadastrar} method="post">

                  <InputCustomizado id="nome" type="text" name="nome" label="Nome" value={this.state.nome} onChange={this.setNome} />
                  
                  <InputCustomizado id="email" type="email" name="email" label="Email" value={this.state.email} onChange={this.setEmail} />
                  
                  <InputCustomizado id="login" type="text" name="login" label="Login" value={this.state.login} onChange={this.setLogin} />
                  
                  <InputCustomizado id="senha" type="password" name="senha" label="Senha" value={this.state.senha} onChange={this.setSenha} />
                  
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Login</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.lista.map((index,user) => {
                          return <tr key={user._id}>
                          <td>{user.nome}</td>
                          <td>{user.email}</td>
                          <td>{user.login}</td>
                        </tr>
                      })
                    }
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            


</div>     
    );
  }
}

export default App;
