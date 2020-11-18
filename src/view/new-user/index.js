import React from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './new-user.css';

function NewUser() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [msgTip, setMsgTip] = React.useState('');
  const [msg, SetMsg] = React.useState('');
  const [load, setLoad] = React.useState(false);

  function cadastrar() {
    setMsgTip('');
    SetMsg('');
    setLoad(true);
    if (!email && !password) {
      setMsgTip('Erro');
      SetMsg('Informe Usuario e Senha');
    } else if (!email) {
      setMsgTip('Erro');
      SetMsg('Informe um Usuario');
    } else if (!password) {
      setMsgTip('Erro');
      SetMsg('Informe uma Senha');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setMsgTip('Sucesso');
        SetMsg('Cadastro Criado com Sucesso!');
        setLoad(false);
        console.log(res);
      })
      .catch((erro) => {
        console.log(erro);
        setMsgTip('Erro');
        switch (erro.code) {
          case 'auth/weak-password':
            SetMsg('A senha deve possuir no minimo 6 digitos');
            break;
          case 'auth/email-already-in-use':
            SetMsg('E-mail ja utilizado em outra conta');
            break;
          case 'auth/invalid-email':
            SetMsg('E-mail incorreto');
            break;
          default:
            break;
        }
      });
  }

  return (
    <>
      <div className="form-cadastro">
        <form className="form-login text-center mx-auto mt-5" noValidate>
          <h1 className="h3 mb-3 text-black font-weight-bold">
            Cadastro de Usuario
          </h1>
          <input
            className="form-control my-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            autofocus
            onBlur={({ target }) => setEmail(target.value)}
          />
          <input
            className="form-control my-2"
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            required
            autofocus
            onBlur={({ target }) => setPassword(target.value)}
          />
          <button
            className="btn btn-lg btn-clock mt-3 btn-cadastro"
            type="button"
            onClick={cadastrar}
          >
            Enviar
          </button>

          {load && (
            <div class="spinner-border text-dark mt-3" role="status"></div>
          )}

          {msgTip === 'Erro' && (
            <small id="helper" class="form-text text-danger mt-3">
              {msg}
            </small>
          )}
          {msgTip === 'Sucesso' && (
            <small id="helper" class="form-text text-success mt-3">
              {msg}
            </small>
          )}
        </form>
      </div>
    </>
  );
}

export default NewUser;
