🌐 [**English**](README-en.md) | **Português**

# 🎉 Formulário de Convite Festivite

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript) [![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)](https://fonts.google.com/)

## 📖 Sobre o Projeto

O Festivite é uma página de formulário para reunir informações de um evento e as preferências visuais de um convite digital. A interface é voltada a quem deseja preencher dados como título, data, formato e descrição do evento.

O formulário também oferece escolhas de cor, tema, estilo e foto de capa, além de campos de contato e opções de consentimento.

O projeto apresenta a interface e valida os campos obrigatórios de nome e e-mail. A geração do convite e o envio dos dados ainda não estão implementados.

## Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Captura de tela](#captura-de-tela)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Destaques de Design](#-destaques-de-design)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Visualizar o Projeto](#-visualizar-o-projeto)
- [Pré-requisitos e Como Usar](#-pré-requisitos-e-como-usar)
- [Conteúdo do Formulário](#conteúdo-do-formulário)
- [Desafios](#-desafios)
- [Recursos de Aprendizado](#-recursos-de-aprendizado)
- [Sugestões de Melhorias](#-sugestões-de-melhorias)
- [Autoria e Créditos](#-autoria-e-créditos)
- [Licença](#licença)

## Captura de tela

![Captura de tela do formulário Festivite](assets/images/screenshot.png)

## 🎯 Funcionalidades

- **Dados do evento:** campos para título, início, fim, tipo presencial ou online, local ou link e descrição.
- **Opções de personalização:** seleção entre 11 cores e 12 temas de evento.
- **Estilo e foto de capa:** controle que alterna o texto entre “Escuro” e “Claro” e campo para selecionar um arquivo. O controle de estilo não altera as cores da página, e a foto não é aplicada a um convite.
- **Contato e consentimentos:** campos de nome, e-mail e telefone, além de caixas para concordar com termos e escolher comunicações promocionais.
- **Validação do formulário:** nome e e-mail são obrigatórios. O e-mail precisa ter um formato válido. Após validar os dados, a página informa que a geração do convite ainda não foi implementada.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estrutura semântica do formulário e dos campos de entrada.
- **CSS3:** estilos separados por layout, elementos do formulário e estados visuais, com regras responsivas.
- **JavaScript:** criação das opções de cores e temas, validação dos campos obrigatórios e atualização do texto do controle de estilo.
- **Google Fonts:** disponibiliza as fontes Leckerli One, Baloo 2 e Open Sans usadas na interface.

## 🎨 Destaques de Design

A interface usa um fundo escuro com superfícies em tons de grafite, detalhes em azul e a marca em rosa. O layout posiciona a identidade visual e a imagem do evento ao lado do formulário em telas maiores, adaptando a composição em telas menores e tablets.

Leckerli One aparece no nome Festivite, Baloo 2 nos títulos e Open Sans nos textos e campos. As opções de tema são exibidas em cartões com imagens, enquanto cores e estados selecionados recebem destaque visual.

## 📂 Estrutura do Projeto

```text
formulario-de-convite/
├─ README.md                 # Documentação em português
├─ README-en.md              # Documentação em inglês
├─ index.html                # Estrutura do formulário
├─ script.js                 # Opções dinâmicas e validação
├─ assets/
│  ├─ icons/                 # Ícones da interface
│  ├─ themes/                # Imagens dos temas de evento
│  ├─ Logo.svg               # Marca Festivite
│  ├─ Background.png         # Imagem de fundo
│  └─ screenshot.png         # Screenshot
└─ styles/
   ├─ index.css              # Importação dos estilos
   ├─ global.css             # Variáveis e regras globais
   ├─ layout.css             # Layout responsivo
   ├─ forms.css              # Estilos dos formulários
   └─ fields/                # Estilos de campos e controles
```

## 🌐 Visualizar o Projeto

[Abra o formulário Festivite](https://erikaestudar.github.io/course-project/formulario-de-convite/index.html).

## 📋 Pré-requisitos e 📝 Como Usar

**Pré-requisitos:** um navegador atualizado. É necessária uma conexão com a internet para carregar as fontes do Google Fonts. Não há dependências ou etapas de instalação.

1. Baixe ou clone o repositório do projeto.
2. Abra a pasta `formulario-de-convite`.
3. Abra `index.html` em um navegador.
4. Preencha os campos e teste as opções disponíveis. O botão valida nome e e-mail, mas não gera nem envia um convite.

## Conteúdo do Formulário

### 1. Informações do evento

Inclui título, datas de início e fim, formato presencial ou online, local ou link e uma descrição.

### 2. Personalização

Apresenta 11 opções de cor, 12 temas ilustrados, um controle de estilo e a seleção de uma foto de capa.

### 3. Contato e consentimentos

Reúne nome, e-mail, telefone e opções para concordar com os termos e receber atualizações por e-mail ou SMS.

## 💪 Desafios

O desafio foi criar e ajustar o layout para tablets, especialmente para que a imagem permanecesse adequada em telas intermediárias.

## 💡 Recursos de Aprendizado

O projeto demonstra estruturação de formulários com HTML, organização modular de CSS, adaptação do layout a diferentes larguras de tela e manipulação do DOM com JavaScript. Também exercita validação de campos e apresentação de mensagens de retorno.

## 🚀 Sugestões de Melhorias

- [ ] Fazer com que as escolhas de cor, tema e estilo sejam aplicadas ao convite.
- [ ] Implementar a geração e a visualização do convite preenchido.
- [ ] Exibir o nome da foto selecionada e permitir visualizar a imagem de capa.
- [ ] Conectar o formulário a um serviço para armazenar ou enviar os dados.

## 👩‍💻 Autoria e Créditos

Projeto desenvolvido por [Erika Sugawara](https://github.com/Erikaestudar) como parte dos estudos da [Rocketseat](https://app.rocketseat.com.br/jornada/full-stack/conteudos).

- **GitHub:** [@Erikaestudar](https://github.com/Erikaestudar)
- **LinkedIn:** [Erika Sugawara](https://www.linkedin.com/in/erika-sugawara/)

## Licença

Este projeto está sob a licença [MIT](../LICENSE).

**Desenvolvido com ❤️ como projeto educacional**
