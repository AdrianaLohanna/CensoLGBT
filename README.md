# CensoLGBT

Api de Cadastro de Pessoas LGBTQIAP+



```
 <h1 align="center">
  <img src="./assets/api-caroneiros.jpeg" width="350">
<p align="center"><p>
</h1>

<h1 align="center">
    <p align="center">API Caroneiros 🚗 <p>
</h1>

## 📝 Apresentação

<p align="justify">  Considerando que em mais de meio século de existência do nosso país, vivemos em uma sociedade onde a maneira em que como população para o estado existimos é a partir do recenseamento que é feito pelo IBGE a cada dez anos. Outrora se consideramos que nesse tempo histórico nunca nosso país deu visibilidade a população LGBTQIAP+ , o que é resultado de uma reprodução histórica da LGBTQFOBIA institucional de um estado que não entende a necessidade da existência dessa população não só para o país como para as políticas públicas, que nunca se colocou no censo questões que visem a a caracterização dessa população. Considerando essa dívida histórica e a ineficácia do estado nesse sentido, se gestou este projeto com vistas a desenvolver um banco de dados que sirva como caracterizador dessa população. <br>

<p align="justify">

<p align="justify">

 ## ➡️ Link

 - [Apresentação](https://www.canva.com/design/DAEyvIDEevE/share/preview?token=tjmm2ZDRSXiHmD7tHaz4_Q&role=EDITOR&utm_content=DAEyvIDEevE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

## 📚 Aprendizados

Como projeto final, esta API visa o cadastramento de pessoas LGBTQIAP+’s com vistas a elaboração de um censo que possa ser utilizada como base de dados para políticas públicas sociais voltados a esta população.  Esta API Rest está fundamentada no método CRUD: 
1- Create (criar), 
2-Read (leitura), 
3-Update (atualizar),e 
4Delete (deletar).


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
   |	       |- 📑 formularioCensoController.js
   |	       |- 📑 .js
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 midllewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |    |
   |    |      |- 📁 schemas
	 |   	|	        |- 📑 AssistenciaSocialSchemaanuncioSchema.js
   |    |         |- 📑 Avaliacao.js
   |	  |  	      |- 📑 EducacaoSchema.js
   |	  |  	      |- 📑 DeficiienciaSchema.js
   |	  | 	      |- 📑 EducacaoSchema.js
   |		|         |- 📑 HabitacaoSchema.js
   |    |         |- 📑 IdentificacaoPessoalShcema.js
   |    |         |- 📑 SaudeSchema.js
   |    |         |- 📑 SegurancaPuplicaSchema.j
   |    |         |- 📑 TrabalhoeRendaSchema.j
   |    |         |- 📑 usuarioSchema.j
   |    |
   |		|- 📑 administradorCensoModel.js
   |    |- 📑 formularioCensoModel.js
   |
   |
   |    |- 📁 routes
   |	     |- 📑 administradorCensoRoutes.js
   |       |- 📑 formularioCensoRoutes.js
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
1- Buscar aministrador por id, 
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
 
## 🔃 Manipulação das Rotas de Formulário:

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
### Criação de administrador
<h1 align="center">
  <img src="./assets/Post - Cadastrar Administrador.gif" width="900">
<p align="center"><p>
</h1>

### Login de usuário
<h1 align="center">
  <img src="./assets/login-usuario.gif" width="900">
<p align="center"><p>
</h1>

### Criação de anúncio
<h1 align="center">
  <img src="./assets/criar-anuncio.gif" width="900">
<p align="center"><p>
</h1>

### Todos os anúncios
<h1 align="center">
  <img src="./assets/todos-anuncios.gif" width="900">
<p align="center"><p>
</h1>

## ❕ Dados para Collection Anúncios:
- id: gerado automaticamente
- Usuário: id do usuário, obrigatório
- Data da viagem: tipo string e obrigatório
- Local de saída e local de chegada: tipo string e obrigatório
- Turno e horário: tipo string e obrigatório
- Carro: id do carro, obrigatório
- Espaço na mala, aceita pets e cadeira de bebê: tipo boolean, obrigatório
- Vagas: tipo number, obrigatório

API deve retornar seguinte JSON:

```jsx
{
  "_id": "61ba79173f9d32b8326a311a",
  "usuario": "61ba6d2124b4d77ed675c0c1",
  "dataViagem": "16/12/2021",
  "localSaida": "Muritiba",
  "localChegada": "Cruz das Almas",
  "turno": "manhã",
  "horario": "07h",
  "carro": "61ba76cb8f1aa8427e16035b",
  "arCondicionado": true,
  "espacoMala": false,
  "vagas": 3,
  "aceitaPets": false,
  "cadeiraBebe": false,
  "__v": 0
}
```

## ❕ Dados para Collection Carros:

- id: gerado automaticamente
- Dono: id do usuário, obrigatório
- Marca e modelo: tipo string e obrigatório
- Ano: tipo number e obrigatório
- Placa: tipo string e obrigatório
- Airbags, ar condicionado, cadeira bebê: tipo boolean, obrigatório
- Tamanho mala: tipo number, obrigatório

API deve retornar seguinte JSON:

```jsx
{
  "_id": "61ba76cb8f1aa8427e16035b",
  "dono": "61ba6d2124b4d77ed675c0c1",
  "marca": "Fiat",
  "modelo": "Argo",
  "ano": 2019,
  "placa": "AAA2020",
  "airbags": true,
  "arCondicionado": true,
  "tamanhoMala": 500,
  "cadeiraBebe": true,
  "__v": 0
}
```

## ❕ Dados para Collection Usuários:

- id: gerado automaticamente
- Nome: tipo string, obrigatório
- Email: tipo string e obrigatório
- Idade: tipo number e obrigatório
- RG: tipo string e obrigatório
- Telefone: tipo string e obrigatório
- Data de criação: tipo Date, gerado automaticamente e obrigatório
- Senha: tipo string, obrigatório

API deve retornar seguinte JSON:

```jsx
{
  "_id": "61bbd52a0a1388268be23b9e",
        "nome": "erika freitas",
        "email": "erikafreitas47@gmail.com",
        "idade": 25,
        "rg": "1112223330",
        "telefone": "75982971924",
        "dataCriacao": "2021-12-17T00:00:31.924Z",
        "senha": "$2b$10$tr7fzXqD31AYMnNzBRjQ/Oo6qdFVjiD7mC776fmxwKYk/5YC9IFpG",
        "__v": 0     
}
```

## ❕ Dados para Collection Caronas:

- id: gerado automaticamente
- anúncio carona: id do anúncio, obrigatório
- usuario carona: id do usuário, obrigatório

API deve retornar seguinte JSON:

```jsx
{
  "_id": "61ba7a59be11ca33a9b07ac8",
  "anuncioCarona": "61b1737b0ef9db440ac38473",
  "usuarioCarona": "61ba6d2124b4d77ed675c0c1",
  "__v": 0     
}
```

## ⛔ Status

❌ Em andamento

## ⚠️ Implementações futuras

* Proteção de dados
* Fazer buscas mais refinadas
* Fazer checagem no banco de dados para cadastros
* Implementar canal de mensagem entre quem oferece e quem busca a carona
* Deixar comentários e likes/dislikes sobre o motorista e a viagem
* Opção de dividir gasolina
* Opção de caronas para encomendas

## 🤝🏽 Deseja contribuir para o projeto?

- Faça um fork do projeto.
- Crie uma nova branch com as suas alterações: git checkout -b seu-nome
- Salve as alterações e crie uma mensagem de commit contando o que você fez: git commit -m "minhas mudanças"
- Envie as suas alterações: git push origin seu-nome

## 🗣️ Agradecimentos

<p align="justify"> Agradeço a toda equipe da Reprograma. Entrar para esse curso foi, sem dúvidas, uma das maiores alegrias desse ano. Além de ser uma grande esperança de melhorias no futuro. Agradeço à todas as professoras que tive durante as semanas do curso. Conheci tantas mulheres incríveis que, com certeza, me inspiraram a seguir e aprender mais. A nossa querida facilitadora, as nossas monitoras sempre presentes, e principalmente as minhas colegas de turma. Essas mulheres incríveis que com certeza acompanharei para o resto da vida. Passar esses meses ao lado dessas mulheres foi uma experiência incrível de empatia e solidariedade. Eu tenho certeza que nunca esquecerei de nenhuma. Agradeço demais a minha família, por me incentivar a voltar para os estudos e possibilitar que isso acontecesse. Agradeço a cada amigo que torceu e vibrou comigo cada pequena conquista nos códigos. Agradeço também a mim, pois não foram meses fáceis e precisei de muita determinação para seguir. Daqui para frente, lembrarei de tudo isso. ❤️

## 📢 Fale comigo

<img src="./assets/erika.jpg" width="150">

* [Linkedin](https://www.linkedin.com/in/%C3%A9rika-de-freitas-b63331ba/)
* [Telegram](https://t.me/erikafreitas47)

## 🖋️ Licença

Esse projeto está sob a licença [MIT](./LICENSE).

```

```
