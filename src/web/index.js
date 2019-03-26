$(document).ready(function(){
    axios.get('http://localhost:8000/user').then(function(resposta){
        $(resposta.data).each(function(index, user){
            $("#table").append(usuario(user)); 
        });
    }).catch(error => {
        console.log("SHIT")
    });
});

function usuario(user){
    let linha = $("<tr>");
    let tdNome = $("<td>").text(user.nome);
    let tdEmail = $("<td>").text(user.email);
    let tdLogin = $("<td>").text(user.login);
    let tdSenha = $("<td>").text(user.senha);
    let tdRemover = $("<td>");

    let link = $("<a>").addClass("botao-remover").attr("href","#").text("Remover");
    link.on("click",function(){
        removerUsuario(user.id);
    });


    tdRemover.append(link);

    linha.append(tdNome);
    linha.append(tdEmail);
    linha.append(tdLogin);
    linha.append(tdSenha);
    linha.append(tdRemover);

    return linha;
}

function removerUsuario(id){
    event.preventDefault();
    $(this).hide();
    axios.delete('http://localhost:8000/user/'+id).then(function(){      
        console.log("Usuario com id "+ id + " Removido com sucesso");
    });
}
