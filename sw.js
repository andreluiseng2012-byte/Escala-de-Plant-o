const CACHE_NOME = "escala-plantao-v1";

const ARQUIVOS_PARA_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

// Instala o service worker e guarda os arquivos essenciais em cache
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NOME).then((cache) => {
            return cache.addAll(ARQUIVOS_PARA_CACHE);
        })
    );
    self.skipWaiting();
});

// Remove caches antigos quando uma nova versão do service worker assume
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((nomes) => {
            return Promise.all(
                nomes
                    .filter((nome) => nome !== CACHE_NOME)
                    .map((nome) => caches.delete(nome))
            );
        })
    );
    self.clients.claim();
});

// Estratégia: tenta a rede primeiro, se falhar (offline) usa o cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(event.request)
            .then((resposta) => {
                const copia = resposta.clone();
                caches.open(CACHE_NOME).then((cache) => {
                    cache.put(event.request, copia);
                });
                return resposta;
            })
            .catch(() => caches.match(event.request))
    );
});
