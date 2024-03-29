import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [favorito, setFavorito] = useState({
    nombre: '',
    libro: '',
  });

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedNombre = favorito.nombre.trim();
    if (trimmedNombre.length >= 3 && !trimmedNombre.startsWith(' ') && favorito.libro.length >= 6) {
      setShow(true)
      setErr(false)
      onSubmit(favorito)
    } else {
      setErr(true)
    }
  }

  return (
    <>
      {show ? (
        <p>Gracias {favorito.nombre}, Ya enviaste tu libro favorito!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={({ target }) =>
              setFavorito({ ...favorito, nombre: target.value })
            }
          />
          <label> Libro Favorito: </label>
          <input
            type="text"
            onChange={({ target }) =>
              setFavorito({ ...favorito, libro: target.value })
            }
          />
          <button>Enviar</button>
        </form>
      )}
      {err && <p>Por favor chequea que la información sea correcta</p>}
      <hr />
    </>
  );
};

export default Form;

