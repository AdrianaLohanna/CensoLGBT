# CensoLGBT

Api de Cadastro de Pessoas LGBTQIAP+


## 📝 Apresentação

<p align="justify">  Vivemos em uma sociedade onde passamos a existir como população para o estado, a partir do recenseamento que é feito pelo IBGE a cada dez anos. No entanto, se considerarmos que em mais de meio século de existência do nosso país, nunca se  deu visibilidade a população LGBTQIAP+ em nosso sistema censitário, o que é resultado de uma reprodução histórica da LGBTQIFOBIA institucional do Brasil que não entende a necessidade da existência dessa população, não só para o país como também para as políticas públicas. Pois  nunca se colocou no censo questões que visem a caracterização dessa população. Considerando essa dívida histórica e a ineficácia do estado nesse sentido, se gestou este projeto  com vistas a desenvolver uma API  que sirva como caracterizador dessa população. <br>

<p align="justify">

<p align="justify">

## 📚 Aprendizados

Como projeto final, esta API visa o cadastramento de pessoas LGBTQIAP+’s com vistas a elaboração de um censo que possa ser utilizada como base de dados para políticas públicas sociais voltados a esta população.  Esta API Rest está fundamentada no método CRUD: 

1- Create (criar), 
2-Read (leitura), 
3-Update (atualizar),e 
4-Delete (deletar).


## ⚒️ Tecnologias utilizadas no projetos:

- [JavaScript](https://www.javascript.com/)
- [Vscode](https://code.visualstudio.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [Heroku](https://dashboard.heroku.com/apps)  

### Dependências utilizadas 

- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [Nodemon](https://nodemon.io/)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)

## 🚧 Arquitetura MVC 
```

 📁 censoLGBT
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 administradorCensoControlleranuncioController.js
   |         |- 📑 autenticacaoCensoController.js
   |	     |- 📑 formularioCensoController.js
   |	       
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 midllewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |    |
   |    |     |- 📁 schemas
   |    |         |- 📑 AssistenciaSocialSchemaanuncioSchema.js
   |    |         |- 📑 Avaliacao.js
   |	|    	  |- 📑 EducacaoSchema.js
   |	|    	  |- 📑 EducacaoSchema.js
   |	|    	  |- 📑 DeficiienciaSchema.js
   |	|   	  |- 📑 EducacaoSchema.js
   |	|	  |- 📑 HabitacaoSchema.js
   |    |         |- 📑 IdentificacaoPessoalShcema.js
   |    |         |- 📑 SaudeSchema.js
   |    |         |- 📑 SegurancaPuplicaSchema.j
   |    |         |- 📑 TrabalhoeRendaSchema.j
   |    |         |- 📑 usuarioSchema.j
   |    |
   |	|- 📑 administradorCensoModel.js
   |    |- 📑 formularioCensoModel.js
   |
   |
   |    |- 📁 routes
   |	     |- 📑 administradorCensoRoutes.js
   |         |- 📑 formularioCensoRoutes.js
   |	     |- 📑 index.js
   |
   |    |- 📑 app.js
   |
   
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 models.md   
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile   
   |- 📑 README.md
   |- 📑 server.js

```

## 🔗 Funcionalidades 

* Cadastrar / Criar: 
1- Cadastrar administrador, 
2- Criar formulário.

* Buscar/Listar: 
1- Buscar administrador por id, 
2- Listar todos os administradores,
3- Listar um formulário
4- Listar todos os fomulários

* Atualizar:
1- Atualizar administrador
2- Atualizar formulário

*Deletar: 
1- Deletar Admninistrador 
2- Deletar Formulário 


## ➡️ Rotas

- Local: http://localhost:8090 (rodando localmente)

- Heroku: https://censo-lgbt.herokuapp.com/ (consumir API)

- Utilize o Postman para testar os endpoints da API localmente ou via Heroku.

## 🔃 Manipulação da Rota de Apresentação:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          |      `/`                | Retorna página inicial do projeto.


## 🔃 Manipulação das Rotas de Administradores:

| Método HTTP  | Endpoint                                   | Descrição                            |
| ------------ | ------------------------------------------ | ------------------------------------ |
| GET          | `"/", protegido, controller.listar`        | Lista todos os administradores       |
| GET          | `"/:id",protegido,controller.buscar`       | Lista um único administrador         |
| POST         | `"/", protegido, controller.criar`         | Cadastra administrador               |
| POST         | `"/entrar", controller.entrar`             | Faz login do administrador           |
| PATCH        | `"/:id", protegido, controller.atualizar`  | Atualizar administrador              |
| DELETE       | `"/:id",protegido, controller.deletar`     | Deleta um  administrador             |
 
## 🔃 Manipulação das Rotas de Formulários:

| Método HTTP  | Endpoint                                   | Descrição                            |
| ------------ | ------------------------------------------ | ------------------------------------ |
| GET          | `"/",protegido, controller.listar`         | Lista todos os formulários           |
| GET          | `"/:id",protegido, controller.buscar`      | Lista um único formulário            |
| POST         | `"/", controller.criar           `         | Cria um formulário                   |
| PATCH        | `""/:id",protegido, controller.atualizar`  | Atualiza um formulário               |
| DELETE       | `"/:id",protegido,controller.deletar`      | Deleta um formulário                 |


🔎 Documentação  via postman:

- https://documenter.getpostman.com/view/20767520/UzXPxGoy

## 🔎 Demonstração da aplicação, realizada no Postman:

 - LINK: https://youtu.be/8-41WyJYYL8

## ⚠️ Implementações futuras

* Proteção de dados
* Inplmentar front-end
* Buscar Financiamento para viabilização do projeto.


## 🗣️ Agradecimentos

<p align="justify"> Inicialmente quero agradecer a toda equipe do Reprograma pela oportunidade, a todas as minhas colegas de turma pelo companheirismo e em especial as professoras Hannah Freitas e Beatriz Ramerindo pelo super apoio a mim prestado. . ❤️

## 📢 Contatos da desenvolvedora:


* [Linkedin](https://www.linkedin.com/in/adriana-lohanna-dos-santos-b90b0a62/)



