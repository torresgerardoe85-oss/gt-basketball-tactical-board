# GT Basketball · Pizarra Táctica (base Claude)

Versión web unificada a partir de la aplicación original de Claude facilitada por el propietario del proyecto (Netlify), con mejoras para uso de entrenadores.

## Herramientas
- Cuatro estilos de cancha, cancha completa / media cancha, orientación adaptable y personalización del logo.
- Mover fichas ofensivas y defensivas; balón asociado al jugador que lo tiene.
- Dibujar al mismo tiempo con un segundo contacto (dedo y Apple Pencil), sin alternar herramientas.
- Lápiz, cortes, pases, borrador, deshacer y rehacer; modo solo marcador.
- Guardado automático de la pizarra, biblioteca de jugadas con nombre y exportación/importación de respaldos JSON.
- Web app instalable y respaldo offline tras abrirla en línea una vez.

## Publicación
GitHub Pages desde main:
https://torresgerardoe85-oss.github.io/gt-basketball-tactical-board/

Este repositorio no controla el sitio original en Netlify. La versión anterior a la integración quedó en la rama `backup/antes-de-integrar-claude-netlify-2026-11-08`.

## Antes de usar en un partido
1. Abrir la aplicación en Safari (iPad), probar Apple Pencil, dedo, guardado y carga de jugadas.
2. Instalar con Compartir > Añadir a pantalla de inicio.
3. Después de una apertura en línea, probar modo avión.
4. Hacer un respaldo antes de borrar los datos de Safari o cambiar de dominio.

El almacenamiento web no se comparte entre dominios (Netlify y GitHub Pages no sincronizan los datos).

## Logos pequeños en cualquier lugar (v3)

Desde **Más → Logos pequeños**, selecciona un logo guardado y pulsa **Poner logo**. Arrástralo con el dedo o Apple Pencil para ubicarlo en otra parte de la cancha. Puedes crear hasta 15 logos pequeños, ajustar su tamaño con **− / +**, ocultarlos o quitarlos independientemente del logo grande central. Los logos se conservan en autoguardado, jugadas, deshacer/rehacer y respaldos JSON (versión 3; acepta respaldos anteriores).

Los logos secundarios se colocan en coordenadas de cancha; los de la mitad inferior no se muestran en la vista de media cancha, y reaparecen al volver a cancha completa.

## Panel fuera de la cancha (v4, iPad)

- El modo «Limpia» coloca la barra de herramientas **fuera del lienzo de juego**, en la franja superior, sin cubrir esquinas, jugadores ni logos. Al rotar a vertical, la barra permanece fuera de la cancha; en pantallas estrechas, admite desplazamiento horizontal.
- El nuevo botón rápido **Fichas ON / Fichas OFF** en el modo limpio permite ocultar o mostrar las fichas de ataque/defensa/balón sin abrir el panel Más. Mantiene sus posiciones al ocultarlas.
- La cancha se reajusta al entrar o salir del modo limpio, y se conserva el acceso a lápiz, borrador, deshacer, rehacer, borrar dibujos y volver al modo normal.
- Caché offline incrementada a versión 3.

Se probó el diseño en Chromium con dimensiones de tablet horizontal, vertical y móvil; resta prueba física con Apple Pencil en Safari iPadOS.

## Tres herramientas independientes (v5)

- **Mover (predeterminado):** solo permite arrastrar fichas, balón y logos pequeños. Tocar o deslizar sobre un espacio libre no dibuja ni guarda trazos por accidente. Tampoco genera rastro de drible automático.
- **Lápiz:** permite dibujar incluso encima de las fichas, sin moverlas.
- **Ambas:** permite arrastrar fichas y dibujar en espacios libres a la vez, inclusive con Apple Pencil y dedo como contactos independientes. Si la opción de rastro de drible está activa, funciona en Ambas.
- Los botones Mover, Lápiz y Ambas aparecen en la barra principal y en la barra del modo limpio fuera de la cancha. La última herramienta elegida se recuerda localmente en cada dispositivo.
- No cambia fichas, posiciones, logos, jugadas, respaldo ni el funcionamiento offline. Service worker actualizado a v4.
