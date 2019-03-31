
    ((container, $) => {

        let controller = {
            buscarUsuarios: () => {
                axios.get('http://localhost:8000/user')
                .then(view.preencherListaUsuarios)
                .catch(view.handleError);
            }
        };

        let view = {
            preencherListaUsuarios: (resp) => {
                $(resp.data).each((index, user) => {
                    var linha = "<tr>"
                    linha += "<td>" + user.nome + "</td>"
                    linha += "<td>" + user.email + "</td>"
                    linha += "<td>" + user.login + "</td>"
                    linha += "<td><a class='user-item' href='#' id='" + user._id + "'>Excluir</a></td>"
                    linha += "</tr>"
                    $("#table-content").append(linha);
                });
            },
            handleError: (err) => {
                console.log(err)
            }
        }


        let initHandlers = () => {
            $(container).on('click','element',(e)=>{

            })
        }

        let init = ()=>{
            initHandlers();
            controller.buscarUsuarios();
        };

        $(container).ready(() => {
            init();
        });
    })(document, $);


$(document).ready(function () {
    axios.get('http://localhost:8000/user').then(function (resposta) {
        $(resposta.data).each(function (index, user) {
            $("#table").append(usuario(user));
        });
    }).catch(error => {
        console.log(error);
    });

    $('form').submit(novoUsuario);

    function usuario(user) {
        let linha = $("<tr>");
        let tdNome = $("<td>").text(user.nome);
        let tdEmail = $("<td>").text(user.email);
        let tdLogin = $("<td>").text(user.login);
        let tdSenha = $("<td>").text(user.senha);
        let tdRemover = $("<td>");

        let link = $("<a>").addClass("botao-remover").attr("href", "#").text("Remover");
        link.on("click", function () {
            removerUsuario(user._id);
        });


        tdRemover.append(link);

        linha.append(tdNome);
        linha.append(tdEmail);
        linha.append(tdLogin);
        linha.append(tdSenha);
        linha.append(tdRemover);

        return linha;
    }

    function novoUsuario() {
        event.preventDefault();

        let usuario = {
            nome: $('#nome').val(),
            email: $('#email').val(),
            login: $('#login').val(),
            senha: $('#senha').val()
        }
        axios.post('http://localhost:8000/user', usuario).then(function () {
            console.log("cool");
        });
    }

    function removerUsuario(id) {
        event.preventDefault();
        $(this).parent().parent().remove();
        axios.delete('http://localhost:8000/user/' + id).then(function () {
            console.log("Usuario com id " + id + " Removido com sucesso");
        });
    }
});


