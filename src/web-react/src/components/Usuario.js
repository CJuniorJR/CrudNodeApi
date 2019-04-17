import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './InputCustomizado';
import axios from 'axios';
import userController from '../controller/userController';

class FormUsuario extends Component {
    
    constructor(){
    super();
    this.state = {nome:"",email:"",login:"",senha:""}
    this.Cadastrar = this.Cadastrar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
    }

    limparCampos(){
      this.state = {nome:"",email:"",login:"",senha:""};
    }

    Cadastrar(event){
        event.preventDefault();
        
        let usuario = {
          nome: this.state.nome,
          email: this.state.email,
          login: this.state.login,
          senha: this.state.senha
    }
      userController.Cadastrar(usuario);
      this.props.Listar();
      this.limparCampos();
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
      

    render(){
        return(
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
                <InputCustomizado id="search-by-name" type="text" name="search" label="Procurar" value={this.state.nome} />
            </div>     
        )
    }
}

class TabelaUsuario extends Component{

  listar = () =>{
    this.props.Listar();
  }

    render(){
        return (
            <div>            
                <table className="pure-table pure-table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Login</th>
                      <th colSpan="2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.lista.map((index,user) => {
                          return <tr key={user._id}>
                          <td>{user.nome}</td>
                          <td>{user.email}</td>
                          <td>{user.login}</td>
                          <td><button className="pure-button button-success" >Editar</button></td>
                          <td><button onClick={() => userController.Excluir(this.listar,user._id)} className="pure-button button-success" >Excluir</button></td>
                        </tr>
                      })
                    }
                  </tbody>
                </table> 
              </div>           
        );
    }
}

export default class UsuarioBox extends Component{

    constructor() {
        super();
        this.state = {lista: []};
    }
    
    componentDidMount(){
      this.Listar();
    }
    
    Listar = () => {
      axios.get('http://localhost:8000/user').then(function(resposta){
        this.setState({lista: $(resposta.data)});
      }.bind(this))
    }

    
    render(){
        return(
            <div>
                <FormUsuario Listar={this.Listar} />
                <TabelaUsuario lista={this.state.lista} Listar={this.Listar} />
            </div>
        );
    }
}