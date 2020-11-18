import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
// Paginas
import Login from './view/login';
import Home from './view/home';
import NovoUsuario from './view/new-user';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novousuario" element={<NovoUsuario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
