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

# Passo a passo para rodar o projeto

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

# Decisões técnicas tomadas durante a implementação do sistema

## Escolha do Docker Compose

Decidi escolher o Docker Compose por ser um arquivo que não precisa adicionar um arquivo Dockerfile e escrever linhas de comando para dockerizar a aplicação.
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
