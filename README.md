# GerenciarClientes
teste para vaga de devJr-softskills

Passo 1: npm install
Passo 2: npm run start
para verificar o proejto localmente


Projeto feito com NodeJS, ExpressJS, MongoDB, Mongoose e template EJS. Type = module
Criado CRUD padrão.
Padrão model-view-controller

Endpoints: create, read, update e delete

view foi divido usando template EJS
include-
 -footer da pagina
 -form para formulario de novo cliente
 -header da pagina
 -show pra mostrar os atuais cliente
add_user criaçao de novo cliente, data de nascimento feito com date picker
index index da pagina onde está o tabela com informaçoes e botao novo cliente e upload
update_user pagina para atualizar o cleitne

assets
  css css geral
  js com index.js e jquery
  
server
  controller metodos dos endpoints
  database arquivo de conexao do bd
  model schema do mongodb
  routes 
    router.js rotas da API
    upload.js rota para upload de arquivo Nào implementado
 services render para requisição api com axios
    
    
e Server.js como arquivo inicial e importaçoes

API testada com postman
