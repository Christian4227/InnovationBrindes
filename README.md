# InnovationBrindes

Este projeto faz parte do processo seletivo para desenvolvedor júnior da Code Group.

Versão do Next.js utilizada: 16.1.6 - App router
Gerenciador de pacote principal usado: pnpm

# Bibliotecas utilizadas no projeto

- Zod: Validação de dados

# Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js
- pnpm
- Docker

# Passos para rodar o container docker com a app

## 1. Configuração do Banco de Dados (Docker)

Este projeto utiliza Docker para o banco de dados PostgreSQL.

1. Crie um arquivo `.env` na **raiz do projeto** (mesmo nível do `docker-compose.yml`) com a seguinte variável:

    ```env
    DOCKER_DB_PASSWORD=senhaDoPostegres
    ```

2. Inicie o container do banco de dados executando o comando na raiz do projeto:

    ```bash
    docker compose up -d
    ```

    O banco de dados estará acessível na porta `5456`.
    Para verificar se está rodando, use `docker ps` e procure pelo container `innovation_brindes_container`.

## 2. Configuração e Execução do Frontend

1. Navegue até a pasta do frontend:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    pnpm install
    ```

3. Execute o projeto em modo de desenvolvimento:

    ```bash
    pnpm dev
    ```

4. Acesse a aplicação no navegador em `http://localhost:3000`.

# Decisões técnicas e o que ficou pendente

## Escolha do Docker Compose

Decidi escolher o Docker Compose para orquestrar o ambiente, apontando para o Dockerfile que está na pasta frontend para a construção da imagem da aplicação.
Além disso, adicionei arquivos .env no mesmo nível do docker compose e dentro da pasta frontend para não expor informações confidenciais e sensíveis

## Escolha da base de dados - PostgreSQL

Para esta dinâmica, eu escolhi o PostgreSQL por ser uma base de dados que eu já conheço e por ser simples para ser configurado.

## Fluxo de Login

**Endpoint**: `POST https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/login/acessar`

No login, usei um formulário para os campos e, para a validação dos campos, usei o Zod como forma de definir os tipos de dados e definí-los como obrigatórios.
Se falhar na validação, uma mensagem de erro será retornado e exibida na tela.
Se passar na validação, será feito um fetch para o endpoint indicado no PDF da dinâmica.
Se falhar na requisição, será enviado e exibida uma mensagem na tela com o motivo da falha da requisição.
Senão, o usuário será redirecionado para a tela de produtos com o token.

# Tailwind

## Variáveis

Decidi não usar, por hora, o @theme por ainda não saber configurar, mas apliquei as variáveis css dentro do classname do Tailwind.

# Cache

## Imagens

Para o cache de imagens do sistema em questão, decidi usar o período de 1 dia, pois penso que é um bom tempo para não pesar o tempo de processamento ao recarregar a página e pesar na busca da imagem do produto novamente.

## O que ficou pendente

- Implementação de testes automatizados (Unitários e E2E).
- Melhorias na acessibilidade (WAI-ARIA) em componentes complexos.
- Refinamento de animações e transições.

# Screenshot do Lighthouse (desktop) e GIF/MP4 curto do fluxo

!Lighthouse Score

!Fluxo da Aplicação

# Requisitos Funcionais (obrigatórios)

1. Autenticação e guarda de rotas

- [x] /login com email, senha, “manter logado” e “esqueceu a senha?” (link não precisa funcionar).
- [x] Chamar o endpoint de login (POST); em sucesso, salvar o token e redirecionar para /produtos. Em erro (status=0), exibir mensagem amigável.
- [x] Bloquear acesso a /produtos sem token (redirect automático para /login).

2. Listagem de produtos (cards)

- [x] Buscar via GET com token e renderizar grid responsivo (imagem, nome, código, preço, botão “CONFIRA”, selo “EXCLUSIVO!”).
- [x] Busca com debounce (300–500 ms): filtra por nome e/ou código usando o POST de listagem com filtros. Exibir estado vazio quando não houver resultados.
- [x] Paginação/infinite scroll (escolha um): carregar lotes e indicar loading incremental.
- [x] Ordenação local por preço (asc/desc) e por nome (A→Z / Z→A).

3. Detalhe rápido do produto

- [ ] Ao clicar em “CONFIRA”, abrir Modal/Drawer com dados do item (usar os campos já retornados; se faltar algo, reutilize os do card). Botão “Fechar”.
- [ ] A Modal deve ser acessível (foco preso, Esc fecha, aria-\*).

> **Justificativa:** A ideia do modal ao usar a biblioteca `headlessui` foi pensada, mas não houve tempo para implementar a tempo até a entrega hoje (quarta-feira).

4. Favoritos (persistência local)

- [ ] Permitir favoritar um produto (ícone/ação no card).
- [ ] Persistir em localStorage para que os favoritos reapareçam ao recarregar.
- [ ] Filtro “Mostrar apenas favoritos”.

> **Justificativa:** Ao saber usar o **Zustand**, ficou óbvio o seu uso neste quesito.

5. Estados da UI e erros

- [x] Skeleton/Loading para 1ª carga e para carregamentos paginados.
- [ ] Erro com ação “Tentar novamente”.
- [x] 401 deve forçar logout e redirect ao /login.
- [x] Formatar preço em BRL (ex.: R$ 4,60). (Os campos de produto constam no retorno do endpoint.)

> **Justificativa:** A ideia do modal (para erros/ações) ao usar a biblioteca `headlessui` foi pensada, mas não houve tempo para implementar a tempo até a entrega hoje (quarta-feira).

# Considerações Finais

Se houvesse um pouco mais de tempo para fazer, eu poderia contemplar a maioria dos itens, mas isso não foi possível devido a algumas dificuldades enfrentadas principalmente para configurar o `auth.js` e os route handlers em que, segundo a documentação disponível, não foi possível concluir e foi a maior parte do tempo para configurar isso por falta de documentação, além da utilização do App Router que, na versão atual, só é suportada na versão beta do NextAuth.

Por esse motivo, não consegui fazer os outros itens.
