export class MailSender {
  constructor(
    form,
    body,
    url,
    response
  ) {
    this.form = form;
    this.body = body;
    this.url = url;
    this.response = document.querySelector(response);
  }

  submit(e) {
    e.preventDefault();

    if (this.response)
      this.response.style.display = 'flex'
      this.response.innerHTML = "Enviando! Aguarde..."

    fetch(this.url,
      {
        method: 'POST',
        body: new FormData(this.form)
      }).then(res => {
        if (this.response)
          this.response.innerHTML = "<i class='fa fa-check-circle'></i> Tudo certo! E-mail enviado."
      })
      .catch(err => {
        if (this.response)
          this.response.innerHTML = "<i class='fa fa-times-circle'></i> Algo deu errado. Atualize a página e tente novamente."
      })
  }
}