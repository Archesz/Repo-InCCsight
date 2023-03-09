# Template Electron.js + React.js

## Overview

- Electron.js é um framework Javascript para construção de aplicações desktop que utiliza o HTML, CSS e Javascript para renderizar e para funcionalidades.
- React.js é um framework Javascript para criação de componentes e interfaces.

### Pastas
- Public: Localiza os arquivos públicos do projeto:
  - favicon.ico: Altera o icone da aplicação.
  - index.html: É a tela que será renderizada. A `<div id="root"> </div>` é onde o React renderiza seus componentes.
  - main.js: É a aplicação Electron, onde executa e exibe as janelas desktop.
- src: Exibe os principais códigos para interface:
  - components: Os componentes disponiveis para a interface. Cada componente possui uma pasta com arquivos .jsx e .scss, respectivamente responsaveis pela renderização e pela estilização.
  - pages: As páginas da interface.
  - styles: Estilizações gerais/globais da aplicação. 
  - data: É a pasta que armazena os dados que estão sendo analisados. (Esses dados são substituidos toda vez que o programa é executado novamente com outros dados)
  - 
