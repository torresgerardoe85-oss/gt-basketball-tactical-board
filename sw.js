/* ALESPI Tigers Tactical Board · Offline app shell v3. */
const CACHE='alespi-tactical-v3';
const ASSETS=['./','./index.html','./theme.css','./manifest.webmanifest','./brand.svg','./icon.svg'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    // La instalación no se completa hasta que la app completa está disponible sin red.
    await cache.addAll(ASSETS);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>/^(gt-board-|alespi-tactical-)/.test(k)&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    if(request.mode==='navigate'){
      // El inicio instalado abre la pizarra guardada aun si no hay conexión.
      const offlineApp=await cache.match('./index.html');
      if(offlineApp)return offlineApp;
    }
    const stored=await cache.match(request,{ignoreSearch:true});
    if(stored)return stored;
    try{
      const response=await fetch(request);
      if(response.ok && new URL(request.url).pathname.startsWith(new URL(self.registration.scope).pathname)){
        const copy=response.clone();
        event.waitUntil(cache.put(request,copy));
      }
      return response;
    }catch(error){
      if(request.mode==='navigate'){
        const fallback=await cache.match('./index.html');
        if(fallback)return fallback;
      }
      return Response.error();
    }
  })());
});
