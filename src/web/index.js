$(document).ready(function(){
    axios.get('http://localhost:8000/user').then(function(resposta){
        $(resposta.data).each(function(index, user){
            $("#table").append('<tr><td>'+ user.nome +'</td>'+
            '<td>'+ user.email +'</td>'+
            '<td>'+ user.login +'</td>'+
            '<td>'+ user.senha +'</td></tr>'); 
        });
    }).catch(error => {
        console.log("SHIT")
    });
})
