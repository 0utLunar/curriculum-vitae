# 📄 Currículos em HTML — Lucas Cirino

Currículos profissionais desenvolvidos em HTML puro, com alternância de idioma (PT/EN), dois modos de exportação para PDF e palavras-chave em negrito para facilitar a leitura de recrutadores.

_Professional résumés built in pure HTML, with PT/EN language toggle, two PDF export modes and bolded keywords to make recruiter skimming easier._

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
![Build](https://img.shields.io/badge/build-none%20%2F%20no%20deps-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge)

---

## 📁 Arquivos — _Files_

| Arquivo | Descrição |
|---|---|
| `developer.html` | Currículo voltado para **Desenvolvimento de Software** |
| `eletromechanics.html` | Currículo voltado para **Técnico em Eletromecânica** |
| `styles.css` | Estilos compartilhados por ambos os currículos |
| `app.js` | Toggle de idioma e modos de impressão (compartilhado) |

> ⚠️ **Os currículos não são arquivos únicos.** `styles.css` e `app.js` precisam estar ao lado dos `.html`. Para enviar a alguém, mande os 3 arquivos ou use o PDF exportado.

---

## ✨ Funcionalidades — _Features_

- 🇧🇷 / 🇺🇸 **Toggle de idioma** — alterna todo o conteúdo entre Português e Inglês sem recarregar a página
- ⎙ **PDF Normal** — exporta com fontes maiores, preenchendo a página inteira
- ⎙ **PDF Compacto** — exporta em fonte menor, para quando houver mais informações no currículo
- **Palavras-chave em negrito** para facilitar a leitura rápida por recrutadores
- Layout responsivo de coluna única
- Links clicáveis no PDF (quando exportado pelo Chrome)

---

## 🖨️ Como exportar para PDF com links funcionando — _How to export to PDF with working links_

> ⚠️ **Use o Google Chrome** para garantir que links e texto fiquem funcionais no PDF.

1. Abra o arquivo `.html` no **Google Chrome**
2. Pressione **Ctrl+P** (ou Cmd+P no Mac)
3. Em **Destino**, selecione **"Salvar como PDF"**
4. Clique em **"Mais configurações"**
5. **Desmarque** a opção **"Cabeçalhos e rodapés"**
6. Clique em **Salvar**

O PDF gerado terá texto copiável, links clicáveis e sem marcações do browser.

---

## 🛠️ Tecnologias — _Technologies_

- HTML5 + CSS3 puro (sem frameworks) — estilos em `styles.css`
- JavaScript vanilla em `app.js` para alternância de idioma e modos de print
- Google Fonts (EB Garamond + DM Mono) para títulos e interface web
- Arial/Helvetica no corpo do texto para legibilidade no PDF

---


## 📌 Observações — _Notes_

- O email está codificado em HTML (`&#64;`) para evitar ofuscação por proxies como o Cloudflare ao hospedar o arquivo online
- O toggle de idioma usa classes `.pt-content` / `.en-content` para blocos com formatação rich text (`<strong>`, links etc.), e atributos `data-pt` / `data-en` para textos simples
- Os dois modos de PDF são controlados pela classe `.print-compact` no `<body>`, que ativa um `@media print` alternativo via CSS

---

## 👤 Autor — _Author_

**Lucas Cirino**  
[linkedin.com/in/lucascir](https://linkedin.com/in/lucascir) · [github.com/0utLunar](https://github.com/0utLunar)

## 📄 Licença — _License_

[MIT](./LICENSE) — Copyright (c) 2026 0utLunar

_MIT — Copyright (c) 2026 0utLunar_
