    $(".submit-btn").on("click", function(e) {

        //function send(e) {

        console.log(e);

        var name = $(':input[name="name"]').val();
        var email = $(':input[name="email"]').val();
        var subject = $(':input[name="subject"]').val();
        var message = $(':input[name="message"]').val();

        e.preventDefault();
        var a = $(this);

        if (
            null == name || "" == name.trim() ||
            null == email || "" == email.trim() ||
            null == message ||
            null == subject || "" == subject.trim()
        ) {
            return sendMessage('error', '<strong>Erro</strong>', 'Existem campos com preenchimento obrigatório.');
        }

        a.html('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-spinner fa-w-16 fa-spin fa-lg"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" class=""></path></svg> Enviando...'), a.prop("disabled", !0);

        var object = { name: name, email: email, message: message };
        $.ajax({
            type: "POST",
            url: "send-email.php",
            data: object,
            complete: function(e) {
                switch (e.status) {
                    case 200:
                        sendMessage('success', '<strong>Sucesso</strong>', 'Sua mensagem foi enviada com sucesso. Em breve lhe responderemos.');
                        break;
                    case 422:
                        sendMessage('error', '<strong>Erro</strong>', 'Por favor, preencher corretamente os dados antes de enviar sua mensagem.');
                        break;
                    default:
                        sendMessage('error', '<strong>Erro de Envio</strong>', 'Um erro ocorreu ao enviar sua mensagem. Tente novamente mais tarde.');
                }
                a.html('Enviar Mensagem'), a.prop("enabled", !0);
            }
        });

        //}

    });


    function sendMessage(type, title, text) {
        Swal.fire({
            type: type,
            title: title,
            text: text,
            timer: 3000,
            showCloseButton: true,
            backdrop: 'rgba(123, 225, 235, 0.33)',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }