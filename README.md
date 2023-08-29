# Desafio Docker Full Cycle

## Descrição do Projeto
<p align="center">Projeto criado com o objetivo de concluir o desafio proposto pelo curso dev full cycle 3.0</p>

<h3>Desafio 2</h3>

O usuário acessa o nginx, o mesmo fará uma chamada para a aplicação aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
# Como inicializar e testar os serviços ?
  dentro do diretório com o arquivo docker-compose.yaml utilize o comando:
    <pre>```docker compose up```</pre>


  pode ser adicionado o arqumento "-d" para que sejam levantados os serviços em background:
    <pre>``docker compose up -d``</pre>

  Ao acessar localmente a url
    http://localhost:8080

Uma conexão é iniciada com o servidor nginx que se comunicará com a aplicação node, e esta irá inserir um nome aleatório no banco de dados


# Como parar e testar os serviços ?
  ainda na mesma pasta aonde o docker-compose.yaml está localizado utilize o comando:
    <pre>```docker-compose down```</pre>