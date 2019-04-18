import userService from '../services/userServices'

let userController = {
    Listar: () => {
      return userService.Buscar();
    },
    Excluir: (id) => {
      return userService.Excluir(id);
    },
    Cadastrar: (usuario) => {
      if(userService.Cadastrar(usuario)){
        alert(usuario.nome+" Cadastrado com Sucesso!");
      }
      
    }
}

 export let validar = {
  validarNome: (nome) => {
    if(nome.length < 3 || null){
      return 'O nome deve ter mais de 3 caracteres';
    }else{
      return null;
    }
    
  }
}
export default userController;