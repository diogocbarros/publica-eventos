import React from 'react';
import Navbar from '../../components/navbar';
import './recuperar-senha.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function RecuperaSenha() {
  const [emailRec, setEmailRec] = React.useState('');

  async function EnviarSenha() {
    await firebase.auth().sendPasswordResetEmail(emailRec);
    alert('Recuperacao de senha enviada.');
  }
  return (
    <>
      <Navbar />
      <div className="login-rec d-flex align-items-center pt-1">
        <form className="form-rec mx-auto" noValidate>
          <h1 className="h3 mb-3 font-weight-normal mb-4 font-weight-bold">
            Recuperar senha:
          </h1>
          <input
            type="email"
            id="inputEmail"
            className="form-control my-2"
            placeholder="Digite seu E-mail Cadastro"
            required
            autofocus
            onBlur={({ target }) => setEmailRec(target.value)}
          ></input>
          <button
            onClick={EnviarSenha}
            className="btn btn-login btn-lg btn-block mt-4"
            type="button"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
export default RecuperaSenha;
