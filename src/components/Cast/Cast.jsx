import React from 'react';
import defaultImg from '../images/defaultImg.png';

const Cast = ({ cast }) => {
  return (
    <>
      <ul>
        {cast.map(({ profile_path, name, character, id }) => {
          const avatar = `https://image.tmdb.org/t/p/w300${profile_path}`;
          return (
            <li key={id}>
              <img src={profile_path ? avatar : defaultImg} alt={name} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
