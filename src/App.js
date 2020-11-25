import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
// Paginas
import Login from './view/login';
import Home from './view/home';
import NovoUsuario from './view/new-user';
import RecuperaSenha from './view/recuperar-senha';
import EventoCadastro from './view/evento-cadastro';

// Reducer
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novousuario" element={<NovoUsuario />} />
          <Route path="/recuperasenha" element={<RecuperaSenha />} />
          <Route path="/eventocadastro" element={<EventoCadastro />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
