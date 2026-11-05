/* ALESPI Tigers Tactical Board · Offline app shell v6. */
const CACHE='alespi-tactical-v6';
const ASSETS=['./','./index.html','./theme.css','./manifest.webmanifest','./brand.svg','./icon.svg'];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting()})());
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
  const scopeURL=new URL(self.registration.scope);
  const reqURL=new URL(request.url);
  const sameApp=reqURL.pathname.startsWith(scopeURL.pathname);
  if(!sameApp)return fetch(request);
  // Actualiza la aplicación conectada; offline recurre a la copia guardada.
  try{
   const fresh=await fetch(request);
   if(fresh.ok)event.waitUntil(cache.put(request,fresh.clone()));
   return fresh;
  }catch(e){
   const stored=await cache.match(request,{ignoreSearch:true});
   if(stored)return stored;
   if(request.mode==='navigate'){
    const start=await cache.match('./index.html');
    if(start)return start;
   }
   return Response.error();
  }
 })());
});