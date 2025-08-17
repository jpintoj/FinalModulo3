
import './AlbumCard.css'; // Asegúrate de que este archivo exista en la misma carpeta

function AlbumCard({ album, onAlbumClick }) { // Recibe onAlbumClick como prop
  const imageUrl = album.cover_medium || 'https://placehold.co/250x250/cccccc/333333?text=No+Image';

  return (
    <div className="album-card" onClick={() => onAlbumClick(album)}> {/* Añade el onClick */}
      <img
        src={imageUrl}
        alt={album.title}
        className="album-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/250x250/cccccc/333333?text=No+Image';
        }}
      />
      <h3 className="album-title">{album.title}</h3>
      <p className="album-artist">{album.artist.name}</p>
    </div>
  );
}

export default AlbumCard;