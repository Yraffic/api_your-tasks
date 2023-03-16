API para Gerenciamento de Projetos

Esta API foi criada para permitir que os usuários gerenciem seus projetos de forma fácil e eficiente. Os usuários podem criar projetos, adicionar tarefas e monitorar o progresso de seus projetos.
Como Usar

Para começar a usar esta API, siga as etapas abaixo:

    Clone este repositório em sua máquina local usando o comando git clone https://github.com/Yraffic/api_your_projects.git.

    Instale as dependências necessárias usando o comando npm install.

    Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
    DB_HOTS=
    DB_PORT=
    DB_USER=
    DB_PASS=
    DB_DATABASE=


    Inicie o servidor usando o comando npm run dev.

    Acesse a API em http://localhost:3000.

Endpoints Disponíveis

Esta API possui os seguintes endpoints disponíveis:

    GET /projects: Retorna todos os projetos cadastrados.
    GET /projects/:id: Retorna um projeto específico.
    POST /projects: Cria um novo projeto.
    PUT /projects/:id: Atualiza um projeto existente.
    DELETE /projects/:id: Deleta um projeto existente.
    
    GET /tarefas/project_id: Retorna todas as terefas de um projeto.
    GET /tarefas/project_id/:task_id: Retorna uma tarefa específica.
    POST /tarefas/project_id: Cria uma nova tarefa para um projeto específico.
    PUT /tarefas/project_id/:task_id: Atualiza uma tarefa existente.
    DELETE /tarefas/project_id/:task_id: Deleta uma tarefa existente.
   

Tecnologias Utilizadas
    
    Typescript
    Node.js
    Express
    Postgresql
