
# 📖 Blog React

O projeto consiste em um blog desenvolvido em **React**, permitindo a navegação entre páginas, visualização de posts dinâmicos, renderização de conteúdo em **Markdown** e tratamento de rotas não encontradas.

---

## 🚀 Tecnologias Utilizadas

* **React (Create React App)** ⚛️
* **React Router** 🛣️
* **React Markdown** ✍️
* **JavaScript (ES6+)** 🟡
* **CSS Modules** 🎨

---

## 📂 Estrutura do Projeto

<details>
  <summary>Clique para ver</summary>
  
  ```bash
├── .gitignore
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
    ├── assets
    │   └── posts
    │   │   ├── 1
    │   │       ├── capa.png
    │   │       ├── gif-1.gif
    │   │       └── gif-2.gif
    │   │   ├── 2
    │   │       └── capa.png
    │   │   ├── 3
    │   │       └── capa.png
    │   │   ├── 4
    │   │       └── capa.png
    │   │   ├── 5
    │   │       └── capa.png
    │   │   ├── 6
    │   │       └── capa.png
    │   │   ├── 7
    │   │       └── capa.png
    │   │   └── 8
    │   │       └── capa.png
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
├── src
    ├── assets
    │   ├── Gustavo José Soares Santana.jpg
    │   ├── circulo_colorido.png
    │   ├── erro_404.png
    │   ├── marca_registrada.svg
    │   ├── minha_foto.png
    │   ├── minha_fotoss.png
    │   ├── posts
    │   │   ├── 1
    │   │   │   ├── capa.png
    │   │   │   ├── gif-1.gif
    │   │   │   └── gif-2.gif
    │   │   ├── 2
    │   │   │   └── capa.png
    │   │   ├── 3
    │   │   │   └── capa.png
    │   │   ├── 4
    │   │   │   └── capa.png
    │   │   ├── 5
    │   │   │   └── capa.png
    │   │   ├── 6
    │   │   │   └── capa.png
    │   │   ├── 7
    │   │   │   └── capa.png
    │   │   └── 8
    │   │   │   └── capa.png
    │   ├── sobre_mim_capa.png
    │   └── sobre_mim_foto.png
    ├── componentes
    │   ├── Banner
    │   │   ├── Banner.module.css
    │   │   └── index.js
    │   ├── BotaoPrincipal
    │   │   ├── BotaoPrincipal.module.css
    │   │   └── index.js
    │   ├── Menu
    │   │   ├── Menu.module.css
    │   │   └── index.js
    │   ├── MenuLink
    │   │   ├── MenuLink.module.css
    │   │   └── index.js
    │   ├── PaginaPadrao
    │   │   └── index.js
    │   ├── PostCard
    │   │   ├── Post.module.css
    │   │   └── index.js
    │   ├── PostModelo
    │   │   ├── PostModelo.module.css
    │   │   └── index.js
    │   ├── Rodape
    │   │   ├── Rodape.module.css
    │   │   └── index.js
    │   └── ScrollToTop
    │   │   └── index.js
    ├── index.css
    ├── index.js
    ├── json
    │   └── posts.json
    ├── paginas
    │   ├── Inicio
    │   │   ├── Inicio.module.css
    │   │   └── index.js
    │   ├── NaoEncontrada
    │   │   ├── NaoEncontrada.module.css
    │   │   └── index.js
    │   ├── Post
    │   │   ├── Post.css
    │   │   ├── Post.module.css
    │   │   └── index.js
    │   └── SobreMim
    │   │   ├── SobreMim.module.css
    │   │   └── index.js
    └── routes.js
└── vercel.json
```

</details>

---

## 📌 Funcionalidades

* Navegação entre páginas sem recarregar a aplicação
* Página inicial com posts e rodapé
* Página **Sobre Mim** personalizada
* Visualização de posts individuais com `useParams`
* Renderização de conteúdo em **Markdown**
* Página **Não Encontrada (404)** com botão de retorno à Home
* Seção de posts recomendados + **ScrollToTop** automático
* Estrutura padronizada com `PaginaPadrao` utilizando `Outlet`

---

## ▶️ Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/gustavojoze/blog-react.git
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Rode o projeto:

   ```bash
   npm start
   ```
4. Agora abra no navegador em:

   ```bash
   http://localhost:3000
   ```


