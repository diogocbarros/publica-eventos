import React from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [msgTip, setMsgTip] = React.useState('');

  async function Logar() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await setMsgTip('Sucesso!');
    } catch (error) {
      await setMsgTip(error.message);
    }
  }

  return (
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto" noValidate>
        <h1 className="h3 mb-3 font-weight-normal text-center mb-4 font-weight-bold">
          {' '}
          Login{' '}
        </h1>
        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
          required
          autofocus
          onBlur={({ target }) => setEmail(target.value)}
        ></input>

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          required
          onBlur={({ target }) => setPassword(target.value)}
        ></input>

        <button
          className="btn btn-login btn-lg btn-block mt-4"
          type="button"
          onClick={Logar}
        >
          Entrar
        </button>
        <div className="opcoes-login mt-2">
          <a href="#" className="mx-2">
            Recuperar Senha
          </a>
          <a href="#" className="mx-2">
            Quero Cadastrar
          </a>
        </div>

        <small id="helper" class="form-text text-muted">
          {msgTip}
        </small>
      </form>
    </div>
  );
}
export default Login;
