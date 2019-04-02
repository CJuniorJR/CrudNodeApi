import swal from 'sweetalert';
import axios from 'axios';

let userController = {
    Excluir: (listar, id) => {
        swal({
          title: "Você tem certeza?",
          text: "Depois de Exlcuido você não conseguira recuperar este usuario!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete('http://localhost:8000/user/'+id).then(function(){
                if(typeof(listar)==='function') listar();
                swal("Poof! Usuario Excluido com sucesso!", {
                  icon: "success",
                });
             }); 
          } else {
            swal("Usuario intacto!");
          }
        });
        
      },
      Cadastrar: (usuario) => {
        axios.post('http://localhost:8000/user',usuario).then(function(response){
            swal("Cadastrado!",usuario.nome+" Cadastrado com sucesso!","success");
        }).catch(error => {
            console.log(error);
        });
      }
}

export default userController;