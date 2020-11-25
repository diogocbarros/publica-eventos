import React from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/navbar';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [msgTip, setMsgTip] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  async function Logar() {
    try {
      await setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      await setMsgTip('Sucesso!');
      await dispatch({ type: 'LOG_IN', usuarioEmail: email });
      await setLoading(false);
    } catch (error) {
      await setMsgTip(error.message);
      await setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-content d-flex align-items-center pt-1">
        {useSelector((state) => state.usuarioLogado) > 0 ? (
          <Navigate to="/" />
        ) : null}
        <form className="form-signin mx-auto" noValidate>
          <h1 className="h3 mb-3 font-weight-normal text-center mb-4 font-weight-bold">
            {''}
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
            <Link to="/recuperasenha" className="mx-2">
              Recuperar Senha
            </Link>
            <Link to="/novousuario" className="mx-2">
              Quero Cadastrar
            </Link>
          </div>

          <small id="helper" class="form-text text-muted">
            {msgTip}
          </small>
          {loading ? (
            <div class="d-flex justify-content-center mt-4">
              <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
}
export default Login;
