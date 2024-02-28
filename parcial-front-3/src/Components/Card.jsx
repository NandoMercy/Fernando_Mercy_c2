import React from 'react';

const Card = ({ favorito }) => {
  return (
    <div>
      <h4>Nombre: {favorito.nombre}</h4>
      <p>Libro Favorito: {favorito.libro}</p>
    </div>
  );
};

export default Card;