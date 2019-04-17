((container, $) => {
    let controller = {
        buscarUsuarios: () => {
            axios.get('http://localhost:8000/user')
                .then(view.preencherListaUsuarios)
                .catch(view.handleError);
        },
        salvarUsuario: () => {
            let usuario = {
                nome: $('#nome').val(),
                email: $('#email').val(),
                login: $('#login').val(),
                senha: $('#senha').val()
            }
            axios.post('http://localhost:8000/user', usuario).then(function () {
                controller.buscarUsuarios();
                controller.limparCampos();
            })
                .catch(view.handleError);
        },
        excluirUsuario: function (e) {
            let id = $(this).attr('id');
            axios.delete('http://localhost:8000/user/' + id)
                .then(controller.buscarUsuarios)
                .catch(view.handleError);
        },
        atualizarUsuario: function (e){
            let id = $(this).prop('id');
            axios.get('http://localhost:8000/user/' + id)
                .then(resp => {
                    document.getElementById("editar").style.visibility = "visible";
                    $('#nome').val(resp.data.nome);
                    $('#email').val(resp.data.email);
                    $('#login').val(resp.data.login);
                    $('#senha').val(resp.data.senha);
                });

            $('#editar').on('click',() => {
                let usuario = {
                    nome: $('#nome').val(),
                    email: $('#email').val(),
                    login: $('#login').val(),
                    senha: $('#senha').val()
                }
    
                axios.put('http://localhost:8000/user/'+id,usuario).then(() => {
                    controller.buscarUsuarios();
                    controller.limparCampos();
                })
                console.log(id);
            })
        },
        limparCampos: () => {
            $('#nome').val("");
            $('#email').val("");
            $('#login').val("");
            $('#senha').val("");
        }
    };

    let view = {
        preencherListaUsuarios: (resp) => {
            $("#table-content").empty();

            if (resp.data.length == 0) {
                var linha = "<tr><td colspan='4'>Não há registros</td></tr>"
                $("#table-content").append(linha);
                return;
            }

            $(resp.data).each((index, user) => {
                var linha = "<tr>"
                linha += "<td>" + user.nome + "</td>"
                linha += "<td>" + user.email + "</td>"
                linha += "<td>" + user.login + "</td>"
                linha += "<td><a class='user-item-delete' href='#' id='" + user._id + "'>Excluir</a></td>"
                linha += "<td><a class='user-item-update' href='#' id='" + user._id + "'>Editar</a></td>"
                linha += "</tr>"
                $("#table-content").append(linha);
            });
        },
        handleError: (err) => {
            console.log(err)
        }
    }

    let initHandlers = () => {
        $(container)
            .on('click', '#enviar', controller.salvarUsuario)
            .on('click', '.user-item-delete', controller.excluirUsuario)
            .on('click', '.user-item-update', controller.atualizarUsuario)
    }

    let init = () => {
        initHandlers();
        controller.buscarUsuarios();
    };

    $(container).ready(() => {
        init();
    });
})(document, $);