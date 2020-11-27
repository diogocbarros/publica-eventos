import React from 'react';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { useSelector } from 'react-redux';

function EventoCadastro() {
  const [titulo, setTitulo] = React.useState('');
  const [tipo, setTipo] = React.useState('');
  const [detalhes, setDetalhes] = React.useState('');
  const [data, setData] = React.useState('');
  const [hora, setHora] = React.useState('');
  const [foto, setFoto] = React.useState('');
  const [usuario, setUsuario] = React.useState('');

  const storage = firebase.storage();
  const db = firebase.firestore();

  let userEmail = useSelector((state) => state.usuarioEmail);

  function CadastrarEvento() {
    db.collection('eventos')
      .add({
        titulo,
        tipo,
        detalhes,
        data,
        hora,
        foto,
        usuario: userEmail,
        visualizacao: 0,
        publico: 0,
        criacao: new Date(),
      })
      .then(() => {
        // upload da foto
        storage.ref(`imagens/${foto.name}`).put(foto);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  return (
    <>
      <Navbar />
      <div className="col-12">
        <div className="row">
          <h3 className="mx-auto font-weight-bold mt-4">Novo Evento</h3>
        </div>

        <form noValidate>
          <div className="form-group">
            <label>Titulo: </label>
            <input
              type="text"
              className="form-control"
              onBlur={({ target }) => setTitulo(target.value)}
            />
          </div>

          <div className="form-group">
            <label>Tipo do evento: </label>
            <select
              className="form-control"
              onBlur={({ target }) => setTipo(target.value)}
            >
              <option disabled selected value>
                -- Selecione um tipo --
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descricao do evento: </label>
            <textarea
              className="form-control"
              row="3"
              onBlur={({ target }) => setDetalhes(target.value)}
            />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data do evento: </label>
              <input
                type="date"
                className="form-control"
                onBlur={({ target }) => setData(target.value)}
              />
            </div>
            <div className="col-6">
              <label>Hora do evento: </label>
              <input
                type="time"
                className="form-control"
                onBlur={({ target }) => setHora(target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Upload da foto: </label>
            <input
              type="file"
              className="form-control"
              onBlur={({ target }) => setFoto(target.files[0])}
            />
          </div>
        </form>

        <button
          type="button"
          className="btn brn-lg btn-block mt-3 mb-5 btn-cadastro"
          onClick={() => CadastrarEvento()}
        >
          {' '}
          Publicar Evento{' '}
        </button>
      </div>
    </>
  );
}
export default EventoCadastro;
