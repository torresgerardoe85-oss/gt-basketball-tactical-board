/* GT Basketball · Claude-base Unified Board · offline v1 */
const CACHE='gt-basketball-claude-base-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./brand.svg','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);await cache.addAll(ASSETS);await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>(k.startsWith('gt-basketball-claude-base-')||k.startsWith('alespi-tactical-')||k.startsWith('gt-board-'))&&k!==CACHE).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url),scope=new URL(self.registration.scope);
 if(req.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  try{const res=await fetch(req);if(res.ok)event.waitUntil(cache.put(req,res.clone()));return res;}
  catch(e){return await cache.match(req,{ignoreSearch:true})||(req.mode==='navigate'&&await cache.match('./index.html'))||Response.error();}
 })());
});
