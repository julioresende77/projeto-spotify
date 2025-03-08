import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";


const Song = () => {
  const { id } = useParams(); // Pega o ID da música da URL

  // const { name, image, artist, duration, audio } = songsArray.filter(
  //   (currentSongObj) => currentSongObj.id === Number(id)
  // )[0];

  // const artistObj = artistArray.filter(
  //   (currentArtistObj) => currentArtistObj.name === artist
  // )[0];

  // Encontra a música com o ID correspondente
  const song = songsArray.find((currentSongObj) => currentSongObj._id === id);
  const { name, image, artist, duration, audio } = song;

  // Encontra o artista correspondente à música
  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  // Filtra todas as músicas do mesmo artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  // Encontra o índice da música atual na lista do artista
  const currentSongIndex = songsArrayFromArtist.findIndex(
    (currentSongObj) => currentSongObj._id === id
  );

  // Calcula o índice da música anterior e da próxima
  const prevSongIndex =
    currentSongIndex === 0
      ? songsArrayFromArtist.length - 1
      : currentSongIndex - 1;
  const nextSongIndex =
    currentSongIndex === songsArrayFromArtist.length - 1
      ? 0
      : currentSongIndex + 1;

  // Pega os IDs da música anterior e da próxima
  const prevSongId = songsArrayFromArtist[prevSongIndex]._id;
  const nextSongId = songsArrayFromArtist[nextSongIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Musica ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`}>
          <img
            className="song__artist-image"
            style={{ width: "75px", height: "75px" }}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        {/* Passa o ID da música anterior e próxima para o Player */}
        <Player
          duration={duration}
          prevSongId={prevSongId} // ID da música anterior
          nextSongId={nextSongId} // ID da próxima música
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
