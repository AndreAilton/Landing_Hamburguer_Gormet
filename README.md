# Prime Burger Gourmet 🍔

Uma Landing Page moderna, responsiva e de alta performance desenvolvida para uma hamburgueria artesanal premium. Este projeto foca em UI/UX, animações fluidas e uma experiência de compra simplificada com integração via WhatsApp.

![Preview do Projeto](https://via.placeholder.com/1200x600?text=Preview+Prime+Burger)
*(Substitua este link por um print real do seu projeto após o deploy)*

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as tecnologias mais modernas do ecossistema React:

*   **[React](https://reactjs.org/)** - Biblioteca para construção de interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática.
*   **[Vite](https://vitejs.dev/)** - Build tool ultrarrápida.
*   **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first para estilização.
*   **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca poderosa para animações.
*   **[Lucide React](https://lucide.dev/)** - Ícones modernos e leves.
*   **Context API** - Gerenciamento de estado global (Carrinho de compras).

## ✨ Funcionalidades

*   **Design Responsivo:** Layout adaptável para Mobile, Tablet e Desktop.
*   **Cardápio Interativo:** Filtragem por categorias (Hambúrgueres, Porções, Bebidas).
*   **Carrinho de Compras:**
    *   Adicionar e remover itens.
    *   Ajustar quantidades.
    *   Cálculo automático do total.
*   **Checkout via WhatsApp:** O pedido é formatado em uma mensagem de texto e enviado diretamente para o WhatsApp do estabelecimento.
*   **Animações:** Transições suaves de entrada, hover effects e feedback visual.

## 📦 Como rodar localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd NOME-DO-REPO
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    Abra `http://localhost:5173` (ou a porta indicada no terminal).

## 🚀 Como fazer Deploy no GitHub Pages

Este projeto já está configurado para deploy automático no GitHub Pages usando `gh-pages`.

1.  **Configuração Inicial:**
    Abra o arquivo `vite.config.ts` e altere a propriedade `base` para o nome do seu repositório:
    ```typescript
    export default defineConfig({
      // ...
      base: '/nome-do-seu-repositorio/', // <--- IMPORTANTE: Mude isso!
    })
    ```

2.  **Executar o Deploy:**
    No terminal, rode o comando:
    ```bash
    npm run deploy
    ```

    Este comando irá:
    *   Compilar o projeto (Build).
    *   Criar uma branch `gh-pages`.
    *   Enviar os arquivos estáticos para o GitHub.

3.  **Ativar no GitHub:**
    *   Vá até as **Settings** do seu repositório no GitHub.
    *   Clique em **Pages** (menu lateral esquerdo).
    *   Em **Build and deployment**, certifique-se de que a fonte (Source) está definida como `Deploy from a branch`.
    *   Selecione a branch `gh-pages` e a pasta `/ (root)`.

---

Desenvolvido com 💛 por [Seu Nome]
