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
            })
                .catch(view.handleError);
        },
        excluirUsuario: function (e) {
            let id = $(this).attr('id');

            axios.delete('http://localhost:8000/user/' + id)
                .then(controller.buscarUsuarios)
                .catch(view.handleError);
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
    }

    let init = () => {
        initHandlers();
        controller.buscarUsuarios();
    };

    $(container).ready(() => {
        init();
    });
})(document, $);