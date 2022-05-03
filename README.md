---
title: "README.md"
output: pdf_document
---

# Ambiente Docker with nodejs and MongoDB

#### Como usar?

- Incie a instalação das depedências com o comando `npm i`

- Em seguida com o docker devidamente instalado e configurado, vamos usar o comando ` docker-compose up -a`, com esse comando o container com nodejs/mongodb já vai estar de pe só que em background, porém precisamos acompanhar os logs do container, para isso vamos usar o comando ` docker logs -f container_name` no nosso caso o container*name será \*\*\_nodejs*\*\*, como isso podemos acompanhar os logs.

- Para gerenciar o banco NOSQL podemos usar o **MongoDB Compass**, basta acessa o site do mongodb ou buscar no google, e bem fácil e tem para todos os OS, depois de baixo e instalado, vamos adicionar o host do nosso banco, no caso do mongo que o protocolo **mongodb://** a nossa url vai ficar assim `mongodb://db:27017`, usar ao invés de localhost db pq vai a portar para o host dentro no container, logo depois a porta que foi definida, depois disso está tudo pronto.
