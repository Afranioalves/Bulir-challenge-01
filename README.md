# Bulir Challenge 001
Esse projecto, consiste em uma API Restfull para uma plataforma, onde os clientes podem contratar prestadores de serviços e os prestadores de serviços, podem cadastrar os serviços que eles realizem. <br /><br />
Para esse projecto foi usado o <b>Nodejs, Express, TypeScript</b>, e o banco de dados <b>Mysql</b>

## * Requisitos para rodar na maquina local
<ul>
    <li>Versão 18 do NodeJs Instalado [ <a href="https://nodejs.org/pt/download/prebuilt-installer" target="blank"> Baixar Aqui</a> ]</li>
    <li>Banco de Dados Mysql [ <a href="https://dev.mysql.com/downloads/workbench/" target="blank"> Baixar Aqui</a> ]</li>
</ul>

#### NOTA
Podes usar o <a href="https://www.apachefriends.org/" target="blank"> <b>xampp</b></a> para gerenciar o seu banco de dados mysql

Depois de cumprir com os requisitos citados a cima, clone o repositorio na sua maquina e segue os seguintes passos :

<ol>
    <li>Abra o terminal ou prompt command na pasta do projecto;</li>
    <li>Rode o comando <code>npm install</code>, para instalar as depedências;</li>
    <li>Abra o projecto em um editor de texto, recomendo usar o <b>vs code</b>;</li>
    <li>Mude o nome do arquivo <b>.env.exemple</b>, para <b>.env</b> ;</li>
    <li>Dentro do arquivo que foi renomeado, insira as suas informações de acesso para o banco de dados;</li>
    <li>Crie um <b>banco de dados</b> com o mesmo nome que está em <b>DATABASE_NAME</b> dentro do ficheiro <b>.env</b></li>
    <li>Rode o comando <code>npm run dev</code> para rodar o projecto</li>
</ol>

## * Requisitos para testar API
<ul>
    <li>Tenha uma ferramente de teste para API instalado</li>
    <li>Recomendo usar o Postman <a href="https://www.postman.com/" target="blank"> Baixar aqui</a></li>
</ul>

## * Importante
<b>Caso estiver usar o xampp para gerenciar banco de dados :</b>
<ol>
    <li>Crie um banco de dados, com o mesmo nome que está no <b>DATABASE_NAME</b> dentro do ficheiro <b>.env</b></li>
    <li>Importe o ficheiro <b>bullir_challenge001.sql</b> no banco de dados criado, o ficheiro está dentro da pasta <b>assets</b> no projecto </li>
</ol>

<b>Caso estiver usar o Mysql Workbench ou outro Software para gerenciar banco de dados:</b>
<ol>
    <li>Crie um banco de dados, com o mesmo nome que está no <b>DATABASE_NAME</b> dentro do ficheiro <b>.env</b></li>
    <li>Abra o ficheiro <b>Bulir_database_script.txt</b> e use-o para te orientar nas criações das tabelas do banco de dados, o ficheiro está dentro da pasta <b>assets</b> no projecto </li>
</ol>

<b>Caso estiver usar o Postman para testar a API :</b>

<ol>
    <li>Importe o ficheiro <b>Bulir-challenge-001.postman_collection.json</b> dentro do postman, para poder ver as routas de testes. o ficheiro está dentro da pasta <b>assets</b> no projecto </li>
</ol>

<b>Caso estiver usar outro software para Testar API :</b>

<ol>
   <li>Abra o ficheiro <b>API DOC.pdf</b> e use-o para te orientar nas requisições de teste da API, o ficheiro está dentro da pasta <b>assets</b> no projecto </li>
</ol>

    


### Autor

Nome: Afrânio Alves<br />
Email: afranio777alves@gmail.com<br />
Telefone: +244 945-784-248<br />
Behance: [behance.net/afrnioalves](behance.net/afrnioalves)<br />
Github: [https://github.com/afranioalves](https://github.com/afranioalves)<br />
Linkedin: [https://www.linkedin.com/in/afranioalves/](https://www.linkedin.com/in/afranioalves/)
