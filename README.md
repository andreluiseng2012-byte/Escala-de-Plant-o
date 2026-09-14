# Escala de Plantão

App para gerar e gerenciar escala de plantão de técnicos, com suporte a instalação como app (PWA).

## Como subir no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público).
2. Envie todos os arquivos desta pasta para a raiz do repositório:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
3. No repositório, vá em **Settings → Pages**.
4. Em **Branch**, selecione `main` (ou `master`) e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde alguns minutos. O GitHub vai te dar um link parecido com:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
6. Abra esse link no celular (Chrome/Safari) e escolha **"Adicionar à tela inicial"** ou **"Instalar app"** — o navegador vai reconhecer o app como instalável por causa do `manifest.json`.

## Observações

- Os dados (funcionários e escalas) ficam salvos no armazenamento local do navegador (`localStorage`) **do próprio aparelho**. Isso significa que cada dispositivo tem seus próprios dados — eles não são sincronizados entre celulares/computadores diferentes.
- O `sw.js` (service worker) permite abrir o app mesmo sem internet, depois da primeira vez que ele for carregado.
- Se quiser trocar o ícone do app, basta substituir os arquivos em `icons/` mantendo os mesmos nomes e tamanhos (192x192 e 512x512).
