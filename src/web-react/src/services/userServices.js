import axios from 'axios';

let userServices = {
    Buscar: () => {
        return axios.get('http://localhost:8000/user').then(function(resposta){
            return resposta.data;
         });
    },
    Cadastrar: (usuario) => {
        return axios.post('http://localhost:8000/user',usuario).then(response =>{
            if(response.status === 200){
                return true;
            }
        });
    },
    Excluir: (id) => {
        return axios.delete('http://localhost:8000/user/'+id).then(function(response){
            if(response.status === 200){
                return true;
            }
        });
    }
}

export default userServices;