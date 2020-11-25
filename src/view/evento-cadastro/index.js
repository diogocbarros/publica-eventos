import React from 'react';
import Navbar from '../../components/navbar';

function EventoCadastro() {
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
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>Tipo do evento: </label>
            <select className="form-control">
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
            <textarea className="form-control" row="3" />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data do evento: </label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-6">
              <label>Hora do evento: </label>
              <input type="time" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label>Upload da foto: </label>
            <input type="file" className="form-control" />
          </div>
        </form>

        <button
          type="button"
          className="btn brn-lg btn-block mt-3 mb-5 btn-cadastro"
        >
          {' '}
          Publicar Evento{' '}
        </button>
      </div>
    </>
  );
}
export default EventoCadastro;
