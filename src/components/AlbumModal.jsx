import React, { useState } from 'react';
import './AlbumModal.css'; // Asegúrate de que este archivo exista en la misma carpeta

function AlbumModal({ album, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!album) return null; // No renderiza si no hay álbum

  const imageUrl = album.cover_big || 'https://placehold.co/500x500/cccccc/333333?text=No+Image';

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    // Aquí podrías añadir lógica para detener la reproducción real
  };

  const handlePrev = () => {
    // Lógica para ir a la pista anterior (visual por ahora)
    console.log("Pista anterior");
  };

  const handleNext = () => {
    // Lógica para ir a la pista siguiente (visual por ahora)
    console.log("Pista siguiente");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Evita cerrar el modal al hacer clic en el contenido */}
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={imageUrl}
          alt={album.title}
          className="modal-album-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/500x500/cccccc/333333?text=No+Image';
          }}
        />
        <h2 className="modal-album-title">{album.title}</h2>
        <p className="modal-album-artist">{album.artist.name}</p>

        <div className="modal-controls">
          <button className="modal-control-button" onClick={handlePrev}>
            {/* Icono de retroceder */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
          </button>
          <button className="modal-control-button play-pause" onClick={handlePlayPause}>
            {isPlaying ? (
              // Icono de pausa
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
            ) : (
              // Icono de play
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            )}
          </button>
          <button className="modal-control-button" onClick={handleStop}>
            {/* Icono de stop */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="12" height="12"></rect></svg>
          </button>
          <button className="modal-control-button" onClick={handleNext}>
            {/* Icono de avanzar */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumModal;