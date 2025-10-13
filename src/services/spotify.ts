// Spotify API - Optimizado para GitHub Pages
export interface SpotifyTrack {
  name: string;
  artist: string;
  album?: string;
  imageUrl?: string;
  url: string;
  isPlaying: boolean;
}

// Para GitHub Pages: usar solo datos estáticos
export async function getSpotifyData(): Promise<SpotifyTrack | null> {
  // En GitHub Pages no podemos usar variables de entorno secretas
  // ni hacer llamadas server-side, so utilizamos datos estáticos
  console.log("GitHub Pages mode: using static data");
  return null;
}

// 🎵 TU CANCIÓN PERSONALIZADA - El Valle de las Liebres 🐰
// Cambia estos datos por la canción que quieras mostrar en tu portfolio
function getMockTrack(): SpotifyTrack {
  return {
    // 📝 Nombre de la canción
    name: "Say hello like a friendly ghost",

    // 🎤 Artista
    artist: "Animales Volcánicos",

    // 🖼️ URL de la imagen del álbum
    // ⚠️ IMPORTANTE: Ve a Spotify Web, busca la canción y copia la URL de la imagen
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02dfd21e47a3b7f6b501781b1f", // Placeholder - actualizar

    // 🔗 Enlace a la canción en Spotify
    // ⚠️ IMPORTANTE: Ve a Spotify Web, busca la canción y copia el enlace
    url: "https://open.spotify.com/intl-es/track/5tiWRJqQ2I9ZSFgmyyo4de?si=434d977cb82a4d30", // Placeholder - actualizar

    // ▶️ Animación de "reproduciendo ahora"
    isPlaying: true,
  };
}

// Función principal para obtener track de Spotify
export async function getLastPlayedTrack(): Promise<SpotifyTrack> {
  try {
    const track = await getSpotifyData();
    return track || getMockTrack();
  } catch (error) {
    console.log("Using mock data:", error);
    return getMockTrack();
  }
}
