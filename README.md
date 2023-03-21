**Curso "Do Zero a Produção: Aprenda a construir uma API Node.js com Typescript" - Waldemar Neto** </br>

`[CO1] => SETUP DO PROJETO` </br>

* [C01P01]: Iniciar o projeto configurando tsconfig, package.json, module-alias (utilização de paths para facilitar a importação).</br>
* [C01P02]: Setup do eslint com Node.js e Typescript, usar para manter padrão do projeto que é mantido por mais pessoas.</br>
* [C01P03]: Setup do modo de desenvolvimento com ts-node e ts-node-dev.</br>
* [C01P04]: Configuração Jest para executar testes. Testes unitários ficam dentro de src, testes end-to-end ficam dentro de test. Criação de um teste básico, seguindo TDD.</br>
* [C01P05]: Setup do server usando o módulo OvernightJs(acrescenta decorators no express), facilitando o uso do express.js para criação da API. Seguindo TDD, implementar o mínimo possível parao teste passar.</br>

>`EXTRA`: Para implementação do teste de integração end-to-end com supertest, foi necessário tipar um global para a inicialização de um único server para rodar todos os testes, impedindo que também seja utilizado o banco de dados diversas vezes. [ver vídeo Node.js e Typescript: Entendendo Tipagem e Declaration Merging de Globais]</br>

* [C01P06]: Setup do prettier para garantir a padronização do projeto. </br>

`[CO2] => CRIANDO API` </br>

* [C02P01]: Início do desenvolvimento da API com testes unitários usando Jest e requisições com Axios. Desenvolvimento do client para buscar dados numa API externa e depois normalizar eles para o uso na aplicação. </br>