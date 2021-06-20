# devnology-be-agencia-veiculos



## Escolhas
- node/express: recursos mínimos para criação de uma api, acredito não precisar de um framework com várias funcionalidades neste momento, na medida que o uso de novas pacotes se fazer necessário, tenho a opção de adiciona-los. Curva de aprendizado baixa e comunidade bem desenvolvida. os problemas que tive até este ponto do projeto e que terei durante o desenvolvimento, terei amparo pela comunidade.

- JSON: Formato simples para troca de informações entre sistemas, tenho base de experiencia com o formato. Não trabalhei com xml, pois nunca tive a experiencia de usar o em api rest. Idenpedente da estrutura escolhida, acredito que fazendo pocas modificações no app.js, a comunicação com outro formato seria possivel de forma simples.  

- VSCode: editor leve versátil e versátil, funciona muito bem com a linguagem de desenvolvimento escolhida para o projeto.

- Versão de rotas: Baseado em algumas apis, como por exemplo API da marvel, o versionamento de rota auxilia no momento de testes de integração e na etapa de melhora do sistema, considerando que poderiamos manter uma rota antiga e adicionar uma nova versão sem quebrar a compatibilidade com sistemas ou clientes que consomem a rota antiga.

- Sequelize ORM: Auxilia na alteraçãoes entre banco de dados. SQL abstraido pelo ORM.

- MYSQL (ambiente dev): Banco de dados relacional que tenho mais experiência. essa escolha foi baseada na minha preferência.

- sqlite (ambiente testes): A facilidade de provisionar uma base para testes com poucas configurações.

- sqlitemanager: extensão do chrome para acessar a base sqlite.

- Mysql Workbench: Preferencia de gerenciador que tenho experiencia. Antes do workbench, fazia uso do phpmyadmin, mas os ganhos usando o workbench podem ser facilmente notados.

- Heroku: Trabalhaei academicamente com a Plataforma fazendo deploy de aplicações. A escolha dessa plataforma é que identifiquei uma facilidade no deploy junto ao Github, facilidade comparada ao Azure, onde efetuei poucos testes acadêmicos. Mais uma vez, a escolha foi baseada em preferencia e experiência.

- JEST: ferramenta completa para testes unitários.

- Padrão repository: implementação básica do repository para mitigar o acoplamento com o banco de dados.
## Problemas / Soluções durante o desenvolvimento
- Confrequencia usava a base de desenvolvimento para fazer os teste unitários, como boa pratica, para este projeto, tentei fazer o uso de uma base sqlite para os testes. Tive dificuldade com a separação de ambientes de forma automática.

## Funcionalidades
### Alguns dos requisitos funcionais estão sendo quebrados em classes menores.
### Tentativa de criar pacotes independentes para reduzir o acoplamento entre as partes do projeto
- Cadastro de marcas    
- Cadastro de veículos

## Buscas
- https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/
- https://developer.marvel.com/docs
- https://sequelize.org/master/
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
- https://devcenter.heroku.com/
- https://www.youtube.com/watch?v=2G_mWfG0DZE&t=2421s

## Como rodar essa aplicação

## Como fazer o deploy da aplicação

## Requisitos do cliente
- Cadastrar a compra de um veículo, modelo, marca, ano de fabricação, placa, cor, chassi, data da
compra e valor da compra.

- Registrar a venda de um veículo, com data da venda, valor da venda e comissão do vendedor (10%
sobre o lucro da venda).

- Deverá ser possível listar todos os veículos, veículos disponíveis e histórico de veículos vendidos.

- Listar o valor total em compras e vendas, lucro/prejuízo do mês e o valor pago em comissões.

- Enviar o link do repositório no linkedin

- Prazo 02/07/2021