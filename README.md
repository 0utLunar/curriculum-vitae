# 📄 Currículos em HTML — Lucas Cirino

Currículos profissionais desenvolvidos em HTML puro, com alternância de idioma (PT/EN), dois modos de exportação para PDF e palavras-chave em negrito para facilitar a leitura de recrutadores.

---

## 📁 Arquivos

| Arquivo | Descrição |
|---|---|
| `developer.html` | Currículo voltado para **Desenvolvimento de Software** |
| `eletromechanics.html` | Currículo voltado para **Técnico em Eletromecânica** |

---

## ✨ Funcionalidades

- 🇧🇷 / 🇺🇸 **Toggle de idioma** — alterna todo o conteúdo entre Português e Inglês sem recarregar a página
- ⎙ **PDF Normal** — exporta com fontes maiores, preenchendo a página inteira
- ⎙ **PDF Compacto** — exporta em fonte menor, para quando houver mais informações no currículo
- **Palavras-chave em negrito** para facilitar a leitura rápida por recrutadores
- Layout responsivo de coluna única
- Links clicáveis no PDF (quando exportado pelo Chrome)

---

## 🖨️ Como exportar para PDF com links funcionando

> ⚠️ **Use o Google Chrome** para garantir que links e texto fiquem funcionais no PDF.

1. Abra o arquivo `.html` no **Google Chrome**
2. Pressione **Ctrl+P** (ou Cmd+P no Mac)
3. Em **Destino**, selecione **"Salvar como PDF"**
4. Clique em **"Mais configurações"**
5. **Desmarque** a opção **"Cabeçalhos e rodapés"**
6. Clique em **Salvar**

O PDF gerado terá texto copiável, links clicáveis e sem marcações do browser.

---

## 🛠️ Tecnologias

- HTML5 + CSS3 puro (sem frameworks)
- JavaScript vanilla para alternância de idioma e modos de print
- Google Fonts (EB Garamond + DM Mono) para a interface web
- Arial/Helvetica no corpo do texto para legibilidade no PDF

---


## 📌 Observações

- O email está codificado em HTML (`&#64;`) para evitar ofuscação por proxies como o Cloudflare ao hospedar o arquivo online
- O toggle de idioma usa classes `.pt-content` / `.en-content` para blocos com formatação rich text (`<strong>`, links etc.), e atributos `data-pt` / `data-en` para textos simples
- Os dois modos de PDF são controlados pela classe `.print-compact` no `<body>`, que ativa um `@media print` alternativo via CSS

---

## 👤 Autor

**Lucas Cirino**  
[linkedin.com/in/lucascir](https://linkedin.com/in/lucascir) · [github.com/0utLunar](https://github.com/0utLunar)