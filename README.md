# ALESPI Tigers Tactical Board

Pizarra táctica profesional de baloncesto, basada en GT Basketball.

## Funciones
- Dos superficies: cancha blanca y cancha de madera.
- Estética ALESPI Tigers: azul navy, azul cielo, anaranjado, logo oficial proporcionado por el usuario.
- Fichas de ataque, defensa y balón: ocultar/mostrar por separado, arrastrar con ratón o dedo, o esconder todo.
- Dibujar con marcador mientras mueves fichas; bloquear dibujo; cambiar grosor, borrador, deshacer y rehacer.
- Media cancha, cancha completa, pantalla completa, guardar y cargar jugadas desde el dispositivo.
- PWA offline con caché versionada (v2).

## Publicación
GitHub Pages desde main/(root). Enlace esperado: https://torresgerardoe85-oss.github.io/gt-basketball-tactical-board/

Los cambios se guardan localmente en el dispositivo. Se recomienda comprobar en iPad y Android antes de usar durante un juego real.

## Modos de trabajo (v6)

- **Solo marcador:** la cancha queda completamente libre, sin fichas ofensivas, defensivas ni balón. Se permite escribir y dibujar inmediatamente.
- **Fichas + dibujo:** se muestran fichas y balón, se arrastran sin cambiar de herramienta y se dibuja en los espacios libres. Soporta gestos de varios punteros (Apple Pencil y dedo al mismo tiempo).
- El cambio de modo conserva trazos, ubicación de fichas, jugadas guardadas, acciones de deshacer/rehacer y respaldo local.
- Los controles para mostrar u ocultar grupos de fichas se deshabilitan en Solo marcador, y vuelven a estar disponibles al activar Fichas + dibujo.

La aplicación se actualiza automáticamente al abrirla con conexión; prueba la vista instalada sin conexión antes de usarla en un partido.
