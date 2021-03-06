import React, { Component } from 'react';
import './css/pure.css';
import './css/side-menu.css';
import UsuarioBox from './components/Usuario';

class App extends Component {

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
              <h1>Cadastro de Usuarios</h1>
            </div>
            <div className="content" id="content">
              <UsuarioBox />
            </div>
          </div>            


</div>     
    );
  }
}

export default App;
