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
