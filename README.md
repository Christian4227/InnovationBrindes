# InnovationBrindes

Este projeto faz parte do processo seletivo para desenvolvedor júnior da Code Group.

Versão do Next.js utilizada: 16.1.6 - App router
Gerenciador de pacote principal usado: pnpm

# Bibliotecas utilizadas no projeto

- Zod: Validação de dados

# Configuração do Banco de Dados (Docker)

Este projeto utiliza Docker para o banco de dados PostgreSQL.

## Como rodar

Antes de executar o arquivo Docker Compose, é necessário instalar o Docker na sua máquina.
Para isso, acesse o site oficial do Docker e siga as instruções de instalação.

Para iniciar o container do banco de dados, execute o comando abaixo na raiz do projeto:

```bash
docker compose up -d
```

O banco de dados estará acessível na porta `5456`.

Para verificar se o Docker está executando na sua máquina, abra um novo terminal e na pasta raiz do projeto execute o comando docker ps. O nome do conteiner innovation_brindes_container será exibido no log das informações.

Para inicializar o docker compose, é necessário adicionar um arquivo .env no mesmo nível do arquivo docker-compose.yml com a seguinte variável de ambiente:

DOCKER_DB_PASSWORD=senhaDoPostegres

# Decisões técnicas tomadas durante a implementação do sistema

## Escolha do Docker Compose

Decidi escolher o Docker Compose por ser um arquivo que não precisa adicionar um arquivo Dockerfile e escrever linhas de comando para dockerizar a aplicação.
Além disso, adicionei arquivos .env no mesmo nível do docker compose e dentro da pasta frontend para não expor informações confidenciais e sensíveis

## Escolha da base de dados - PostegresSQL

Para esta dinâmica, eu escolhi o PostegresSQL por ser uma base de dados que eu já conhecço e por ser simples para ser configurado.

METHOD: POST
URL: https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/login/acessar HEADER:
Content-Type => application/json

No login, usei um formulário para os campos e, para a validação dos campos, usei o Zod como forma de definir os tipos de dados e definí-los como obrigatórios.
Se falhar na validação, uma mensagem de erro será retornado e exibida na tela.
Se passar na validação, será feito um fetch para o endpoint indicado no PDF da dinâmica.
Se falhar na requisição, será enviado e exibida uma mensagem na tela com o motivo da falha da requisição.
Senão, o usuário será redirecionado para a tela de produtos com o token.
